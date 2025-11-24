import React, { useState } from 'react';
import './MyTaskerScreen.css';

const MyTaskerScreen = ({ onClose }) => { 
  const projectData = {
    title: 'MyTasker - Gestionnaire de Projets & Tâches',
    subtitle: 'Projet de Découverte WPF (C#)',
    description: "MyTasker est une application de bureau conçue pour faciliter la gestion de projets et de tâches. Réalisé avec WPF (Windows Presentation Foundation), ce projet avait pour objectif principal d'explorer et de maîtriser les bases de cette technologie Microsoft, ouvrant ainsi la porte au développement d'applications Windows riches et performantes.",
    objective: "L'ambition première de MyTasker était de s'immerger dans l'écosystème WPF. Il s'agissait d'apprendre à structurer une application desktop, à gérer les interactions utilisateur et à manipuler les données à travers une interface graphique moderne.",
    features: [
      'Gestion des Projets : Création, Consultation, Modification et Suppression (CRUD).',
      'Gestion des Personnes : Création, Consultation, Modification et Suppression (CRUD).',
      'Gestion des Tâches : Création, Consultation, Modification et Suppression (CRUD).',
      'Assignation Intuitive : Lier des tâches à des personnes spécifiques au sein de chaque projet.',
      'Visualisation Claire : Des vues dédiées pour chaque entité afin d\'organiser l\'information.',
    ],
    technologies: ['WPF', 'C#', '.NET Framework'],
    githubLink: 'https://github.com/Rusius02/MyTasker', 
    screenshots: [
      { src: '/images/MyTasker/project-view.png', alt: 'Capture d\'écran de la Vue Projet' },
      { src: '/images/MyTasker/person-view.png', alt: 'Capture d\'écran de la Vue Personne' },
      { src: '/images/MyTasker/task-view.png', alt: 'Capture d\'écran de la Vue Tâche' },
    ],
  };

  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshotIndex((prevIndex) => 
      (prevIndex + 1) % projectData.screenshots.length
    );
  };

  const prevScreenshot = () => {
    setCurrentScreenshotIndex((prevIndex) => 
      (prevIndex - 1 + projectData.screenshots.length) % projectData.screenshots.length
    );
  };

  return (
    <div className="project-screen-container">
      <div className="project-hologram-border">
        <div className="project-hologram-content">
          
          {onClose && (
            <button className="hologram-close-button" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          )}

          <div className="project-header">
            <h1 className="project-title">{projectData.title}</h1>
            <p className="project-subtitle">{projectData.subtitle}</p>
          </div>

          <div className="scan-line-separator"></div>

          <div className="project-details">
            <div className="description-block">
              <h3><i className="fas fa-info-circle"></i> PRÉSENTATION DU PROJET</h3>
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-bullseye"></i> OBJECTIF ET APPRENTISSAGE</h3>
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-list-check"></i> FONCTIONNALITÉS CLÉS</h3>
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index}><i className="fas fa-angle-right"></i> {feature}</li>
                ))}
              </ul>
            </div>
            <div className="tech-used-block">
              <h3><i className="fas fa-tools"></i> TECHNOLOGIES UTILISÉES</h3>
              <div className="tech-tags">
                {projectData.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {projectData.githubLink && (
                <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                  <i className="fab fa-github"></i> VOIR SUR GITHUB
                </a>
              )}
            </div>
          </div>

          <div className="scan-line-separator"></div>

          <div className="screenshots-section">
            <h3><i className="fas fa-image"></i> APERÇUS DE L'INTERFACE</h3>
            <div className="screenshot-viewer">
              <button onClick={prevScreenshot} className="nav-button"><i className="fas fa-chevron-left"></i></button>
              <img 
                src={projectData.screenshots[currentScreenshotIndex].src} 
                alt={projectData.screenshots[currentScreenshotIndex].alt} 
                className="project-screenshot" 
              />
              <button onClick={nextScreenshot} className="nav-button"><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className="screenshot-dots">
                {projectData.screenshots.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentScreenshotIndex ? 'active' : ''}`}
                        onClick={() => setCurrentScreenshotIndex(index)}
                    ></span>
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyTaskerScreen;