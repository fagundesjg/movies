import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 0;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1ed760;
  border: none;
  max-width: 200px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { Container, MoviesContainer, Button };
