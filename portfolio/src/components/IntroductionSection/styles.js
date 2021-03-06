import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 12.5rem;
  height: 100vh;
  
  h1 {
    display: flex;
    align-items: center;

    font-size: 1.75rem;
    font-weight: 600;
    font-style: italic;

    padding-bottom: 0.5rem;

    & > * {
      margin: 0 0.5rem;
    }
  }

  h2 {
    display: flex;
    flex-wrap: wrap;

    font-size: 1.5rem;
    font-weight: 400;

    span {
      background-color: var(--green);
    }

    span:first-child {
      margin-left: 0.5rem;
      padding-left: 0.2rem;
    }

    span:last-child {
      margin-right: 0.5rem;
      padding-right: 0.2rem;
    }
  }

  p {
    padding: 5rem 0;
    width: 80%;

    font-size: 1.25rem;
    line-height: 2.25rem;
    font-weight: 400;

    a {
      color: var(--blue);
      text-decoration: underline var(--green) 4px;
      padding: 0.2rem;

      &:hover {
         background-color: var(--green);
      }
    }

    span {
      text-decoration: underline var(--green) 4px;
    }
  }

  @media (max-width: 1080px) {
    margin: 0 5rem;
  }

  @media (max-width: 720px) {
    margin: 0 3rem;

    p {
      width: 100%;
    }
  }
`;
