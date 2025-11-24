import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsListScreen.css';


const projects = [
  { 
    id: 'nisolnicole', 
    title: 'NisolNicole', 
    description: 'Vitrine Littéraire & E-commerce (Vue3 & .NET)',
    thumbnail: '/images/NisolNicole/home-screen.png' 
  },
  { 
    id: 'finovo', 
    title: 'Finovo', 
    description: 'ERP Modulaire (React & FastAPI/Python)',
    thumbnail: '/images/Finovo/billing-screen.png' 
  },
  { 
    id: 'justgaming', 
    title: 'JustGaming', 
    description: 'Réseau Social pour Gamers (Django & HTMX)',
    thumbnail: '/images/JustGaming/home-screen.png' 
  },
   { 
    id: 'mytasker', 
    title: 'MyTasker', 
    description: 'Gestionnaire de Projets & Tâches (WPF)',
    thumbnail: '/images/MyTasker/project-view.png' 
  },
  { 
    id: 'longlove',
    title: 'LongLove', 
    description: 'App Mobile pour Couples à Distance (React Native)',
    thumbnail: '/images/LongLove/messaging.png'
  },
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