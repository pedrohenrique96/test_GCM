import React, { useState, FormEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';

import api from '../../services/api';
import animationLoading from '../../assets/loading/6607-loading-drop.json';

import {
  Container,
  Title,
  Content,
  Input,
  Button,
  Form,
  Repositories,
  Repository,
  RepositoryName,
  RepositorySave,
  ButtonView,
  PageActions,
} from './styles';

interface Repository {
  name: string;
}

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
};

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    if (repos.length) {
      getRepos();
    }
  }, [page]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username) {
      setError(true);
      return;
    }
    setPage(1);
    getRepos();
  }

  async function getRepos() {
    try {
      setLoading(true);
      const response = await api.post('repos', { username, page });
      setError(false);
      setLoading(false);
      setRepos(response.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  async function handleSaveRepository(repository: Object) {
    try {
      await api.post('create', { repository });
      toast.success('Saved successfully');
    } catch (err) {
      toast.error('Error!');
    }
  }

  return (
    <Container>
      <Title>Repositories</Title>

      <Content>
        <Form onSubmit={handleSubmit}>
          <Input
            error={error}
            placeholder="write username of github"
            name="username"
            type="name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Button type="submit">send</Button>
          <ButtonView>View repositories saved</ButtonView>
        </Form>

        {loading ? (
          <Lottie options={loadingOptions} height={300} width={300} />
        ) : (
          <Repositories>
            {repos.map((repo) => (
              <Repository key={repo.name}>
                <RepositoryName>{repo.name}</RepositoryName>
                <RepositorySave
                  type="button"
                  onClick={() => handleSaveRepository(repo)}
                >
                  save
                </RepositorySave>
              </Repository>
            ))}
          </Repositories>
        )}
      </Content>
      <PageActions>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => setPage(page - 1)}
        >
          Back
        </button>
        <span>Page {page}</span>
        <button
          type="button"
          disabled={!repos.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </PageActions>
    </Container>
  );
};

export default Dashboard;
