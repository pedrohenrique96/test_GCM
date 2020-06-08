import axios from 'axios';

interface Request {
  username: string;
  page: number;
}

interface Response {
  data: [];
}

export default class DataReposServices {
  async execute({ username, page }: Request): Promise<Response> {

    if (!username) {
      throw new Error('Username not provided');
    }

    return await axios
      .get(`https://api.github.com/users/${username}/repos`, {
        params: {
          page,
          per_page: 10
        },
      })
      .then(repos => repos.data)
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  }
}
