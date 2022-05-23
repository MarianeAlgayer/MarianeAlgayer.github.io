import styled from 'styled-components';

export const Container = styled.section`
  margin: 2rem 0;
  padding: 1rem;
  background-color: var(--light-pink);

  p {
    margin-bottom: 1rem;
  }

  p, li {
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: 400;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin-right: 2rem;

    & > * {
      color: var(--pink);
      margin-right: 0.3rem;
    }
  }

  @media (max-width: 720px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
