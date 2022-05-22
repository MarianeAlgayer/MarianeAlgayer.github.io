import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  margin-right: 1rem;

  a {
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
  }

  @media (max-width: 720px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    position: initial;
    width: 100%;
    transform: translateY(0);

    a {
      margin: 1.5rem;
    }
  }
`;
