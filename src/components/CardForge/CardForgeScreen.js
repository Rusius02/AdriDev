import React, { useState } from 'react';
import './CardForgeScreen.css'; 

const CardForgeScreen = ({ onClose }) => {
  const projectData = {
    id: 'cardforge',
    title: 'CardForge - Le Créateur de Top Trumps Personnalisé',
    subtitle: 'Jeu de Cartes Compétitif & Moddable (Technologies Web Modernes)',
    description: "CardForge est un projet de jeu de cartes en ligne inspiré du célèbre principe des 'Top Trumps', mais avec une dimension créative et communautaire inégalée : la possibilité pour les joueurs de créer leurs propres decks de A à Z. Fatigué des jeux aux cartes prédéfinies, l'objectif est d'offrir une plateforme où l'imagination est la seule limite, permettant de confronter n'importe quel thème, personnage ou concept.",
    objective: "L'ambition de CardForge est de développer un environnement de jeu sur navigateur robuste et intuitif, qui supporte non seulement le gameplay 'Top Trumps' classique, mais aussi un éditeur de cartes et de decks puissant. Les défis techniques incluent la gestion dynamique des schémas de cartes (caractéristiques variables), la persistance des données utilisateur (decks créés) et une interface temps réel pour les parties multijoueurs. Le but est de prouver qu'un jeu de cartes web peut être riche, personnalisable et compétitif.",
    features: [
      '**Éditeur de Deck Avancé :** Créez des cartes avec des noms, descriptions, images personnalisées et des statistiques définissables (force, agilité, intelligence, etc.).',
      '**Gameplay "Top Trumps" :** Affrontez d\'autres joueurs en ligne dans des duels stratégiques, où la connaissance de votre deck et la chance déterminent le vainqueur.',
      '**Gestion de Collections :** Organisez, modifiez et partagez vos decks personnalisés avec la communauté.',
      '**Matchmaking Intelligent :** Trouvez rapidement des adversaires en fonction de vos préférences et de la disponibilité des decks.',
      '**Système de Communauté :** Évaluez, commentez et découvrez les decks créés par d\'autres joueurs.',
    ],
    technologies: ['React (Frontend)', 'Node.js/Express (Backend)', 'MongoDB/PostgreSQL', 'WebSockets (Socket.IO)', 'HTML5', 'CSS3'], 
    githubLink: 'https://github.com/Rusius02/CardForge', 
    screenshots: [
      { src: '/images/CardForge/deck-builder.png', alt: 'Maquette de l\'éditeur de deck CardForge' },
      { src: '/images/CardForge/gameplay-screen.png', alt: 'Maquette de l\'écran de gameplay' }, 
      { src: '/images/CardForge/collection-manager.png', alt: 'Maquette de la gestion de collection' }, 
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
              <h3><i className="fas fa-magic"></i> L'IDÉE DERRIÈRE CARDORGE</h3> 
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-gavel"></i> VISION & DÉFIS TECHNIQUES</h3> 
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-hat-wizard"></i> CARACTÉRISTIQUES PRINCIPALES</h3> 
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
                ))}
              </ul>
            </div>
            <div className="tech-used-block">
              <h3><i className="fas fa-tools"></i> BOÎTE À OUTILS TECHNOLOGIQUE</h3>
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
            <h3><i className="fas fa-images"></i> APERÇUS DU JEU</h3>
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

export default CardForgeScreen;