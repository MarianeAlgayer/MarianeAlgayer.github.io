import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 10vh 12.5rem 0;
  
  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    font-style: italic;

    margin-bottom: 3rem;
  }

  h2 {
    margin-bottom: 1.5rem;

    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 1rem;

    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: 400;

    a {
      color: var(--blue);
      text-decoration: underline var(--pink) 4px;
      padding: 0.2rem;

      &:hover {
         background-color: var(--pink);
      }
    }
  }

  @media (max-width: 1080px) {
    margin: 10vh 5rem 0;
  }

  @media (max-width: 720px) {
    margin: 10vh 3rem 0;
  }
`;
