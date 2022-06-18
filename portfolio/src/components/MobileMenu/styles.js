import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: var(--medium-pink);
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  text-align: end;
  padding: 2rem;
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `}

  svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  nav {
    margin-top: 6rem;

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-bottom: 2rem;

  color: var(--blue);
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline var(--pink) 4px;
  }
`;
