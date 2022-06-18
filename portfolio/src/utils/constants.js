import PortfolioImg from '../images/portfolio.png';
import StarWarsImg from '../images/star-wars.png';

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
    name: 'This portfolio',
    description: 'My personal website with a list of my projects.',
    technologies: ['JS ES6', 'ReactJS', 'React Router', 'Styled Components'],
    image: PortfolioImg,
    deployUrl: 'https://marianealgayer.github.io/',
    repositoryUrl: 'https://github.com/MarianeAlgayer/MarianeAlgayer.github.io',
  },
];
