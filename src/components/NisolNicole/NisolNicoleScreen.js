import React, { useState } from 'react';
import './NisolNicoleScreen.css'; // Nous allons créer ce fichier CSS

const NisolNicoleScreen = ({ onClose }) => {
  const projectData = {
    id: 'nisolnicole',
    title: 'NisolNicole - Vitrine Littéraire & E-commerce',
    subtitle: 'Plateforme Auteur Locale (Vue3 & .NET/C#)',
    description: "NisolNicole est une plateforme web dédiée à une auteure locale, conçue pour présenter son œuvre littéraire au public. La première version est une vitrine élégante, offrant une immersion dans son univers et facilitant la découverte de ses écrits. Ce projet illustre la capacité à construire des applications full-stack, en alliant la réactivité du frontend Vue3 à la robustesse d'un backend .NET/C#.",
    objective: "L'objectif principal de la V1 était de créer une présence en ligne professionnelle pour l'auteure, en se familiarisant avec les spécificités de Vue3 pour l'interface utilisateur et en établissant une API RESTful avec .NET/C#. Les versions futures visent à transformer cette vitrine en une plateforme e-commerce complète, soulignant une approche de développement évolutive et axée sur l'expérience utilisateur.",
    featuresV1: [ // Caractéristiques de la V1 actuelle
      'Page d\'Accueil immersive présentant l\'univers de l\'auteure.',
      'Page "Mes Écrits" pour découvrir les publications, avec liens externes vers les plateformes de commande de livres papier.',
      'Page de Contact pour interagir facilement avec l\'auteure.',
      'Design Responsive assurant une expérience utilisateur fluide sur tous les appareils.',
      'Backend .NET/C# léger pour la gestion potentielle de contenus dynamiques (prêt pour l\'évolution).',
    ],
    roadmap: [ // Feuille de route pour les futures versions
      '**V2 : Intégration E-commerce Complète** - Ajout d\'une boutique en ligne avec gestion de catalogue et processus d\'achat sécurisé via l\'API Stripe.',
      '**V3 : Espace Communautaire** - Implémentation d\'un fil d\'actualité pour les annonces et événements, et d\'une page "Workshop" pour des ateliers littéraires.',
      '**Optimisation SEO & Performance** - Amélioration du référencement et des performances globales du site.',
    ],
    technologies: ['Vue3', '.NET/C#', 'REST API', 'HTML5', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/Rusius02/NisolNicole', // Remplacez par le lien réel de votre dépôt
    screenshots: [
      { src: '/images/NisolNicole/home-page.png', alt: 'Capture d\'écran de la Page d\'Accueil' },
      { src: '/images/NisolNicole/writings-page.png', alt: 'Capture d\'écran de la Page Mes Écrits' },
      { src: '/images/NisolNicole/contact-page.png', alt: 'Capture d\'écran de la Page Contact' },
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
              <h3><i className="fas fa-info-circle"></i> PRÉSENTATION DU PROJET</h3>
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-rocket"></i> VISION & OBJECTIFS (V1 & FUTUR)</h3> {/* Icône changée */}
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          {/* Section Fonctionnalités V1 et Technologies */}
          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-list-check"></i> FONCTIONNALITÉS CLÉS (V1)</h3>
              <ul>
                {projectData.featuresV1.map((feature, index) => (
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

          {/* Section Feuille de Route Future */}
          <div className="roadmap-section">
            <h3><i className="fas fa-map-signs"></i> FEUILLE DE ROUTE (VERSIONS FUTURES)</h3> {/* Nouvelle icône */}
            <ul>
              {projectData.roadmap.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          </div>

          <div className="scan-line-separator"></div>

          {/* Section Captures d'écran (Carrousel) */}
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

export default NisolNicoleScreen;