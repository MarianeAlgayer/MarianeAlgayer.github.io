import React from 'react';

import { PROJECTS } from '../../utils/constants';
import ProjectCard from '../ProjectCard';

import { Container } from './styles';

function ProjectsSection() {
  return (
    <Container>
      <h3>Projects</h3>

      <div className="cards-container">
        { PROJECTS.map(({
          id, name, description, technologies, image, deployUrl, repositoryUrl,
        }) => (
          <div key={ name } className="card-wrapper">
            <ProjectCard
              id={ id }
              name={ name }
              description={ description }
              technologies={ technologies }
              image={ image }
              deployUrl={ deployUrl }
              repositoryUrl={ repositoryUrl }
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjectsSection;
