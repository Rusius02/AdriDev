// src/components/ProjectsList/ProjectsListScreen.js
import React from 'react';
import { Link } from 'react-router-dom'; // Pour naviguer vers les projets
import './ProjectsListScreen.css'; // Créez ce fichier CSS

// Données de vos projets (vous pouvez les déplacer dans un fichier de données si elles deviennent nombreuses)
const projects = [
  { 
    id: 'mytasker', 
    title: 'MyTasker', 
    description: 'Gestionnaire de Projets & Tâches (WPF)',
    thumbnail: '/images/MyTasker/project-view.png' // Utilisez une de vos captures comme vignette
  },
  // Ajoutez d'autres projets ici au fur et à mesure
  // { id: 'autre-projet', title: 'Autre Projet', description: 'Description rapide', thumbnail: '/chemin/vers/image.png' },
];

const ProjectsListScreen = () => {
  return (
    <div className="projects-list-container">
      <div className="projects-list-hologram-border">
        <div className="projects-list-hologram-content">
          <h1 className="projects-list-title">MES PROJETS</h1>
          <p className="projects-list-subtitle">Explorez mes réalisations techniques et artistiques.</p>
          
          <div className="scan-line-separator"></div>

          <div className="project-cards-grid">
            {projects.map(project => (
              <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
                <div className="project-card-image-container">
                    <img src={project.thumbnail} alt={`Aperçu de ${project.title}`} className="project-card-image" />
                </div>
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-action">
                    <span className="hologram-button-small">VOIR LE PROJET <i className="fas fa-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListScreen;