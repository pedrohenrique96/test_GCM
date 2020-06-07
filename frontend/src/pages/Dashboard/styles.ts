import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Error {
  error: boolean;
}

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1``;

export const Content = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  &:last-child {
  }
`;

export const Input = styled.input<Error>`
  height: 36px;
  width: 30%;
  border: 1px solid ${(props) => (props.error ? 'red' : 'hsl(0, 0%, 80%)')};
  border-radius: 4px;
  padding: 0 5px;
  margin-right: 10px;
`;

export const Button = styled.button`
  height: 36px;
  width: 10%;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  background: transparent;

  &:hover {
    color: #fff;
    background: #666;
  }
`;

export const Repositories = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
  grid-auto-rows: 50px;
`;

export const Repository = styled.div`
  height: 56px;
  width: 60%;
  border: 1px solid hsl(0, 0%, 80%);
  background: rgb(255, 255, 255, 0.6);
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const RepositorySave = styled.button`
  height: 26px;
  width: 20%;
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

export const ButtonView = styled(Link).attrs({
  to: '/view',
})`
  float: right;
  height: 36px;
  padding: 0 20px;
  width: 30%;
  color: #333;
  background: transparent;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #fff;
    background: #666;
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
