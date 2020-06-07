import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import animationData from '../../assets/loading/6607-loading-drop.json';

import {
  Container,
  Title,
  Repositories,
  Repository,
  RepositoryName,
  Content,
  Contributors,
  Pulls,
  PullItemTitle,
} from './styles';

interface Repositories {
  _id: number;
  name: string;
  contributors: [];
  pulls: [{ title: string }, { title: string }, { title: string }];
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

const ViewRepositoriesSaved: React.FC = () => {
  const [repositories, setRepositories] = useState<Repositories[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRepositories() {
      setLoading(true);
      const response = await api.get('repos');
      setLoading(false);
      setRepositories(response.data);
    }
    loadRepositories();
  }, []);

  return (
    <Container>
      <Title>List Repositories</Title>
      <Link to="/">
        <MdArrowBack size={20} color="#333" />
      </Link>
      {loading ? (
        <Lottie options={defaultOptions} height={300} width={300} />
      ) : (
        <Repositories>
          {repositories.map((repository) => (
            <Repository key={repository._id}>
              <RepositoryName>{repository.name}</RepositoryName>
              <Content>
                <Contributors>
                  Contributors:{' '}
                  <strong>{repository.contributors.length}</strong>{' '}
                </Contributors>

                <Pulls>
                  <PullItemTitle>
                    Pull Request 1:{' '}
                    <strong>{repository.pulls[0]?.title||'Empty'}</strong>
                  </PullItemTitle>
                  <PullItemTitle>
                    Pull Request 2:{' '}
                    <strong>{repository.pulls[1]?.title||'Empty'}</strong>
                  </PullItemTitle>
                  <PullItemTitle>
                    Pull Request 3:{' '}
                    <strong>{repository.pulls[2]?.title || 'Empty'}</strong>
                  </PullItemTitle>
                </Pulls>
              </Content>
            </Repository>
          ))}
        </Repositories>
      )}
    </Container>
  );
};

export default ViewRepositoriesSaved;
