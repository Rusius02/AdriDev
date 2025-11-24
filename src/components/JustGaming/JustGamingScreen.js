import React, { useState } from 'react';
import './JustGamingScreen.css'; 

const JustGamingScreen = ({ onClose }) => {
  const projectData = {
    id: 'justgaming',
    title: 'JustGaming - Le Réseau Social pour Gamers',
    subtitle: 'Connecter la Communauté de Joueurs (Django/Python & HTMX)',
    description: "JustGaming est né de l'idée audacieuse de quatre camarades de bachelier en informatique de gestion, désireux de créer une plateforme sociale dédiée aux passionnés de jeux vidéo. L'objectif était de bâtir un espace où les gamers pourraient se retrouver, partager et surtout, trouver facilement des partenaires pour leurs sessions de jeu. C'est une réponse à l'isolement parfois ressenti dans l'univers du gaming en ligne, en offrant un hub communautaire complet.",
    objective: "Ce projet avait pour ambition de démontrer la faisabilité d'un réseau social dynamique avec des outils et des technologies efficaces. L'utilisation de Django pour le backend a permis une gestion robuste des données utilisateurs et des interactions sociales, tandis que l'intégration de HTMX sur le frontend a été un choix stratégique pour offrir une expérience utilisateur fluide et réactive, sans les complexités d'un framework JavaScript lourd.",
    features: [
      '**Recherche de Partenaires de Jeu :** Système avancé pour trouver des coéquipiers basés sur les jeux, plateformes et styles de jeu.',
      '**Fil d\'Actualités Dynamique :** Partage de statuts, captures d\'écran, vidéos et actualités liées au gaming entre amis et communautés.',
      '**Messagerie Instantanée (Messenger Like) :** Communication privée et de groupe pour coordonner les parties et discuter.',
      '**Profils Utilisateurs Personnalisables :** Affichage des jeux favoris, des statistiques et des préférences de jeu.',
      '**Groupes et Communautés :** Création et gestion de communautés autour de jeux spécifiques ou d\'intérêts communs.',
    ],
    technologies: ['Python', 'Django', 'HTMX', 'HTML5', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/Rusius02/JustGaming', 
    screenshots: [
      { src: '/images/JustGaming/news-screen.png', alt: 'Capture d\'écran du Fil d\'Actualités' },
      { src: '/images/JustGaming/home-screen.png', alt: 'Capture d\'écran de l\'acceuil' },
      { src: '/images/JustGaming/chat-navabar-myprofile.png', alt: 'Capture d\'écran de la Messagerie' },
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
              <h3><i className="fas fa-users-game"></i> L'ESPRIT COMMUNAUTAIRE</h3> 
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-brain"></i> ARCHITECTURE & TECHNOLOGIES CLÉS</h3> 
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-gamepad"></i> FONCTIONNALITÉS ESSENTIELLES</h3> 
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
                ))}
              </ul>
            </div>
            <div className="tech-used-block">
              <h3><i className="fas fa-laptop-code"></i> PILES TECHNOLOGIQUES</h3>
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

export default JustGamingScreen;