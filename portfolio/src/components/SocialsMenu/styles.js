import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 40%;
  margin-right: 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    position: initial;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4rem;
  margin: 0.4rem 0;

  & > * {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue);
  }

  &:hover {
    background-color: var(--green);
  }

  @media (max-width: 720px) {
    margin: 1.5rem;
  }
`;
