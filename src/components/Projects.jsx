import React from 'react';
import './com.css'; 

function Projects() {
  const projectList = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. This project demonstrates  React and API integration.',
      liveLink: 'https://project-one-live-link.com',
      sourceCode: 'https://github.com/Megh2507/weather_app'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project demonstrate responsive designs using CSS.',
      liveLink: 'https://project-two-live-link.com',
      sourceCode: 'https://github.com/topics/ecommerce-website'
    },

  ];

  return (
    <div className="projects container">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
