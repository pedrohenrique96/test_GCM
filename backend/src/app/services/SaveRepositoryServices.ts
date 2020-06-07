import axios from 'axios';
import { Document } from 'mongoose';
import RepositoryModel from '../model/RepositoryModel';

interface Request {
  repository: {
    name: string;
    html_url: string;
    contributors_url: string;
    pulls_url: string;
  };
}

interface ObjectPullsContributors {
  contributors: [];
  pulls: any[];
}

interface Response {
  response: Document;
}

export default class DataReposServices {
  async execute({ repository }: Request): Promise<Response> {
    const pullsContributors = {} as ObjectPullsContributors;
    const arrThreePulls = [] as any[];

    const { contributors_url, name, pulls_url, html_url } = repository;
    const pulls_url_formated = pulls_url.replace('{/number}', ' ');

    await axios
      .get(`${contributors_url}`)
      .then(
        contributors => (pullsContributors.contributors = contributors.data),
      )
      .catch(err => {
        throw new Error(err);
      });
    await axios
      .get(`${pulls_url_formated}`)
      .then(pulls => {
        arrThreePulls.push(pulls.data[0], pulls.data[1], pulls.data[2]);
      })
      .catch(err => {
        throw new Error(err);
      });
    pullsContributors.pulls = arrThreePulls;

    const { contributors, pulls } = pullsContributors;

    const response = await RepositoryModel.create({
      name,
      html_url,
      contributors,
      pulls,
    });

    return { response };
  }
}
