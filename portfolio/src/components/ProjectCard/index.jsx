import React from 'react';
import PropTypes from 'prop-types';

import { FiGithub, FiExternalLink } from 'react-icons/fi';

import Anchor from '../Anchor';

import { Container } from './styles';

function ProjectCard({
  name, description, technologies, image, deployUrl, repositoryUrl,
}) {
  return (
    <Container>
      <div className="img-wrapper">
        <Anchor
          href={ deployUrl }
          text={ <img src={ image } alt={ name } /> }
        />
      </div>

      <div className="details">
        <div>
          <h4>{name}</h4>

          <div className="links-wrapper">
            <Anchor
              href={ repositoryUrl }
              text={ <FiGithub /> }
            />

            <Anchor
              href={ deployUrl }
              text={ <FiExternalLink /> }
            />
          </div>
        </div>

        <p>{ description }</p>

        <ul>
          { technologies.map((technologie) => (
            <li key={ technologie }>{ technologie }</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.array,
  image: PropTypes.string,
  deployUrl: PropTypes.string,
  repositoryUrl: PropTypes.string,
}.isRequired;

export default ProjectCard;
