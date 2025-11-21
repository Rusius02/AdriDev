import React, { useState } from 'react';
import './LongLoveScreen.css'; // Nous allons créer ce fichier CSS

const LongLoveScreen = ({ onClose }) => {
  const projectData = {
    id: 'longlove',
    title: 'LongLove - Connecter les Cœurs à Distance',
    subtitle: 'Application Mobile pour Couples (React Native & Node.js/Firebase)',
    description: "LongLove est une application mobile innovante, conçue pour renforcer les liens des couples vivant une relation à longue distance. Née de l'observation que la distance peut parfois altérer la spontanéité et la proximité, LongLove propose un espace privé et enrichi, facilitant la communication, le partage et les activités ludiques, pour que la distance ne soit plus un frein à l'amour.",
    objective: "L'objectif principal est de fournir une boîte à outils numérique complète pour les relations à distance. LongLove vise à recréer une intimité et une connexion émotionnelle fortes grâce à des fonctionnalités intuitives et engageantes, rendant chaque jour à distance plus doux et plus connecté. Le projet explorera les défis spécifiques du développement mobile multi-plateforme avec React Native et l'intégration de services backend pour des fonctionnalités temps réel.",
    features: [
      '**Messagerie Enrichie :** Échange de messages textuels, vocaux, photos et vidéos dans un cadre privé et sécurisé.',
      '**Calendrier Partagé :** Synchronisation des dates importantes, gestion des événements de couple et compte à rebours pour la prochaine rencontre.',
      '**Activités Ludiques & Jeux de Couple :** Quiz personnalisés, défis quotidiens et espace de dessin collaboratif pour s\'amuser ensemble.',
      '**Galerie de Souvenirs :** Un album photo/vidéo privé et organisé pour immortaliser les moments partagés et les souvenirs précieux.',
      '**Partage d\'Humeur & Notifications Haptiques :** Envoyer rapidement son état d\'esprit et des vibrations douces pour simuler des "touches" à distance.',
      '**"Love Letters" :** Un espace dédié à l\'écriture de messages intimes, conservés comme des trésors de la relation.',
    ],
    technologies: ['React Native', 'Node.js (Express/Firebase)', 'WebSockets (Socket.IO)', 'MongoDB/PostgreSQL', 'JavaScript'],
    githubLink: 'https://github.com/Rusius02/LongLove', // Remplacez par le lien réel de votre dépôt
    screenshots: [
      { src: '/images/LongLove/messaging.png', alt: 'Maquette de l\'écran de messagerie' },
      { src: '/images/LongLove/shared-calendar.png', alt: 'Maquette de l\'écran Calendrier Partagé' },
      { src: '/images/LongLove/couple-game.png', alt: 'Maquette d\'un jeu de couple' },
      { src: '/images/LongLove/memory-gallery.png', alt: 'Maquette de la Galerie de Souvenirs' },
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
          
          {/* Bouton de Fermeture */}
          {onClose && (
            <button className="hologram-close-button" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          )}

          {/* En-tête du Projet */}
          <div className="project-header">
            <h1 className="project-title">{projectData.title}</h1>
            <p className="project-subtitle">{projectData.subtitle}</p>
          </div>

          <div className="scan-line-separator"></div>

          {/* Section Description et Objectif */}
          <div className="project-details">
            <div className="description-block">
              <h3><i className="fas fa-heart"></i> L'IDÉE DERRIÈRE LONGLOVE</h3>
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-mobile-alt"></i> VISION & DÉFIS TECHNIQUES</h3>
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          {/* Section Fonctionnalités et Technologies */}
          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-gift-heart"></i> FONCTIONNALITÉS CLÉS</h3> {/* Icône de cadeau et cœur */}
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
                ))}
              </ul>
            </div>
            <div className="tech-used-block">
              <h3><i className="fas fa-tools"></i> TECHNOLOGIES CHOISIES</h3>
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

          {/* Section Captures d'écran (Carrousel) */}
          <div className="screenshots-section">
            <h3><i className="fas fa-images"></i> MAQUETTES CONCEPTUELLES</h3> {/* Icône d'images */}
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

export default LongLoveScreen;