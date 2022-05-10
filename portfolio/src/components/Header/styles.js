import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;

  padding-bottom: 2.5rem;
  margin: 2.5rem 6.25rem 5rem;
  border-bottom: 2px solid var(--blue);

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  
    margin: 3rem;
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
