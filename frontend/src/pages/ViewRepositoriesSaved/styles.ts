import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Repositories = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Repository = styled.div`
  width: 90%;
  height: 150px;
  border: 1px solid hsl(0, 0%, 80%);
  background: rgb(255, 255, 255, 0.6);
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 4px;
  transition: 0.5s;

  &:hover {
    margin-left: 5px;
  }
`;

export const RepositoryName = styled.span`
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  margin: 5px 0;
`;

export const Details = styled.button`
  height: 26px;
  width: 25%;
  color: #333;
  background: transparent;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  margin-left: 10px;

  &:hover {
    color: #fff;
    background: #666;
  }
`;

export const ContainerModal = styled.div`
  button {
    background: transparent;
    float: right;
    border: none;
  }
`;

export const NameProject = styled.h1`
  color: #333;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const Content = styled.div``;

export const Contributors = styled.span`
  color: #333;
  font-size: 18px;
`;

export const Pulls = styled.div`
  margin-top: 10px;
`;

export const PullItemTitle = styled.h1`
  color: #333;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const PullItemUserOpen = styled.div`
  display: flex;
  align-items: center;
`;

export const PullItemUserOpenImage = styled.img`
  height: 30px;
  border-radius: 15px;
`;

export const PullItemUserOpenUsername = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Title = styled.h1``;
