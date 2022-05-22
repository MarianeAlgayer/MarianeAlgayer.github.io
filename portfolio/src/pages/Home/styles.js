import styled from 'styled-components';

export const Projects = styled.section`
  background-color: var(--medium-pink);
  padding: 3.75rem 12.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  @media (max-width: 1080px) {
    padding: 3.75rem 5rem;
  }

  @media (max-width: 720px) {
    padding: 3.75rem 3rem;
  }
`;
