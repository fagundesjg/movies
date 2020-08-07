import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 200px;
  width: 100%;
  flex-direction: column;
  margin: 15px 40px;
`;

const Backdoor = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
  height: 300px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  transition: filter 0.3s;
  transition: border-color 0.3s;
  justify-content: center;
  align-content: center;

  &:hover > button {
    bottom: 30px;
    opacity: 1;
  }

  &:hover > .hide {
    opacity: 1;
  }

  &:hover {
    border-color: #1ed760;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .rating {
    margin-bottom: 15px;
    font-family: 'Roboto';
  }

  .genre {
  }

  svg {
    opacity: 0;
    margin-bottom: 10px;
    fill: #1ed760;
    align-self: center;
  }
`;

const Cover = styled.div<{ src: string }>`
  display: flex;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

const Title = styled.span`
  color: white;
`;

const Button = styled.button`
  position: absolute;
  background-color: #1ed760;
  border-radius: 8px;
  opacity: 0;
  bottom: 0px;
  border: none;
  color: white;
  font-weight: bold;
  transition: opacity 0.3s;
  transition: bottom 0.3s;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  width: 80%;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }

  &:focus {
    outline: none;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.6s;
`;

const Year = styled.span`
  font-size: 12px;
`;

export { Container, Cover, Title, Button, Text, Year, Backdoor };
