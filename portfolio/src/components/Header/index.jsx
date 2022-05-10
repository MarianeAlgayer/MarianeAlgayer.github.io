import { Container, StyledLink } from './styles';

const Header = () => (
  <Container>
    <StyledLink to='/'>HOME</StyledLink>
    <StyledLink to='/about'>ABOUT</StyledLink>
    <StyledLink to='/mariane-algayer-resume.pdf' target='_blank'>RÉSUMÉ</StyledLink>
  </Container>
);

export default Header;