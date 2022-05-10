import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Introduction = styled.section`
  padding: 0 6.25rem;
  
  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    font-style: italic;
    padding-bottom: 0.5rem;
  }

  h2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    padding: 3.75rem 5rem 5rem;

    font-size: 1.5rem;
    line-height: 2.125rem;
    font-weight: 300;
  }

  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 400;

    &:hover {
      text-decoration: underline var(--green) 4px;
    }
  }

  img {
    width: 15rem;
    margin: 0 0.5rem;
  }

  @media (max-width: 720px) {
    padding: 0 3rem;

    p {
      padding: 3rem 0;
    }
  }
`

export const Projects = styled.section`
  background-color: var(--light-pink);
  padding: 3.75rem;
  width: 100%;
  height: 400px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    display: block;
    margin: 1rem auto;
    width: 3rem;
    border-top: 2px solid var(--blue);
  }
`