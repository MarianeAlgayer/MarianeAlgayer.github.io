import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.75rem 12.5rem;
  box-shadow: 1px 4px 4px #EFF2F5;
  position: relative;
  margin-bottom: 4rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 2.25rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 2.25rem;

    a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 400;
    }

    a:hover {
      text-decoration: underline var(--green) 4px;
    }
  }

  @media (max-width: 1080px) {
    padding: 3.75rem 5rem;
  }

  @media (max-width: 720px) {
    padding: 3.75rem 3rem;
    margin-bottom: 0.5rem;
  }
`;
