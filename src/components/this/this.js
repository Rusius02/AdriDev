import React, { useState } from 'react';
import './this.css'; 

const PortfolioScreen = ({ onClose }) => {
  const projectData = {
    id: 'portfolio',
    title: 'Ce Portfolio Interactif',
    subtitle: 'Une Vitrine Technologique Construite avec React & CSS Holographique',
    description: "Ce portfolio n'est pas qu'une simple collection de projets; c'est un projet à part entière, conçu pour offrir une expérience immersive et moderne. L'objectif était de créer une plateforme dynamique et visuellement distinctive, qui reflète non seulement mes compétences techniques en développement web frontend, mais aussi ma capacité à innover dans la présentation de mon travail. Inspiré par les interfaces futuristes des films de science-fiction, il adopte un thème holographique unique.",
    objective: "L'objectif principal était de concevoir un portfolio qui se démarque, en utilisant les dernières technologies frontend pour une performance optimale et une esthétique soignée. Les défis incluaient l'implémentation de l'effet holographique via CSS, la gestion de la navigation SPA avec React Router, l'optimisation des performances pour les animations, et la conception d'une structure de composants modulaire et maintenable. C'est une démonstration de ma maîtrise de React et de ma créativité en design d'interface.",
    features: [
      '**Interface Holographique :** Design visuel unique avec des éléments translucides, des effets de lueur et des animations subtiles pour un rendu futuriste.',
      '**Navigation SPA Fluide :** Utilisation de React Router pour une expérience de navigation sans rechargement de page, rapide et intuitive.',
      '**Composants Modulaires :** Structure de code organisée en composants React réutilisables et faciles à maintenir.',
      '**Responsivité Mobile-First :** Conception adaptée à une large gamme d\'appareils, des ordinateurs de bureau aux smartphones, pour une accessibilité maximale.',
      '**Intégration d\'Icônes Font Awesome :** Utilisation d\'une bibliothèque d\'icônes pour améliorer l\'esthétique et la compréhension visuelle des fonctionnalités.',
      '**Gestions des États (Hooks) :** Utilisation des hooks React pour gérer l\'état des composants et les effets secondaires de manière efficace.',
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 (SCSS)', 'React Router Dom', 'Font Awesome'],
    githubLink: 'https://github.com/Rusius02/AdriDev', 
    screenshots: [
      { src: '/images/this/home-screen.png', alt: 'Écran d\'accueil du portfolio' },
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
              <h3><i className="fas fa-laptop-code"></i> LA GENÈSE DU PORTFOLIO</h3>
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-bullseye"></i> OBJECTIFS & RÉALISATIONS TECHNIQUES</h3>
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-tools"></i> FONCTIONNALITÉS CLÉS</h3>
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
                ))}
              </ul>
            </div>
            <div className="tech-used-block">
              <h3><i className="fas fa-code-branch"></i> PILES TECHNOLOGIQUES</h3>
              <div className="tech-tags">
                {projectData.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {projectData.githubLink && (
                <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                  <i className="fab fa-github"></i> DÉPÔT GITHUB DU PORTFOLIO
                </a>
              )}
            </div>
          </div>

          <div className="scan-line-separator"></div>

          <div className="screenshots-section">
            <h3><i className="fas fa-images"></i> APERÇUS DU PORTFOLIO</h3>
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

export default PortfolioScreen;