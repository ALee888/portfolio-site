import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.url}>
      <div className="project" id='project'>
          <div>
            <p>{project.name}</p>
          </div>
          <div>
            <img src={project.thumbnail !== 'N/A' ? project.thumbnail : 'https://via.placeholder.com/400'} alt={project.name}/>
          </div>
          <div>
            <span>{project.description}</span>
            <h3>{project.name}</h3>
          </div>
      </div>
    </a>
  )
}
  
export default ProjectCard