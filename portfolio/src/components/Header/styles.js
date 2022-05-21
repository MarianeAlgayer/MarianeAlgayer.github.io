import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: block;
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 10vh;
  padding: 0 6.25rem;

  text-align: right;
  background-color: rgb(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);

  &:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}

  @media (max-width: 720px) {
    padding: 0 2rem;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0 1rem;

  color: var(--blue);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline var(--green) 4px;
  }
`;
