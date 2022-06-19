import StarWarsImg from '../images/star-wars.png';
import TrybeWalletImg from '../images/trybe-wallet.png';
import PortfolioImg from '../images/portfolio.png';

export const TECHNOLOGIES = [
  'Git', 'HTML', 'CSS', 'JS ES6', 'TypeScript', 'ReactJS', 'RTL', 'NodeJS',
];

export const PROJECTS = [
  {
    id: 1,
    name: 'Star Wars Planets Search',
    description: 'A list of planets from the Star Wars universe, which the user can apply different filters.',
    technologies: ['JS ES6', 'ReactJS', 'Context API', 'React Hooks'],
    image: StarWarsImg,
    deployUrl: 'https://marianealgayer.github.io/star-wars-planets-search-project/',
    repositoryUrl: 'https://github.com/MarianeAlgayer/star-wars-planets-search-project',
  },
  {
    id: 2,
    name: 'Trybe Wallet',
    description: 'A expense tracker app with currency conversion.',
    technologies: ['JS ES6', 'ReactJS', 'Redux'],
    image: TrybeWalletImg,
    deployUrl: 'https://trybe-wallet-project-marianealgayer.vercel.app/',
    repositoryUrl: 'https://github.com/MarianeAlgayer/trybe-wallet-project',
  },
  {
    id: 3,
    name: 'This portfolio',
    description: 'My personal website with a list of my projects.',
    technologies: ['JS ES6', 'ReactJS', 'React Router', 'Styled Components'],
    image: PortfolioImg,
    deployUrl: 'https://marianealgayer.github.io/',
    repositoryUrl: 'https://github.com/MarianeAlgayer/MarianeAlgayer.github.io',
  },
];
