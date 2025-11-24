import React, { useState } from 'react';
import './FinovoScreen.css'; // Nous allons créer ce fichier CSS

const FinovoScreen = ({ onClose }) => {
  const projectData = {
    id: 'finovo',
    title: 'Finovo - Solutions de Gestion d\'Entreprise Modulaires',
    subtitle: 'ERP nouvelle génération (React & FastAPI/Python)',
    description: "Finovo est une initiative visant à révolutionner les logiciels de gestion d'entreprise (ERP) actuels. Constatant une insatisfaction généralisée vis-à-vis des solutions existantes, souvent rigides et coûteuses, j'ai entrepris de développer une alternative moderne et flexible. Finovo est conçu pour s'adapter précisément aux besoins réels de chaque entreprise, sans surcharger les clients avec des fonctionnalités superflues ni des coûts injustifiés.",
    objective: "L'objectif principal de Finovo est de prouver qu'une solution ERP complète peut être modulaire, performante et personnalisable. La priorité initiale est le développement d'un module de facturation robuste, capable de générer des factures au format XML compatible Peppol. À terme, Finovo ambitionne de devenir un ERP complet, évolutif et économique, basé sur une architecture de microservices.",
    features: [ // Fonctionnalités actuelles ou à court terme
      '**Facturation Avancée :** Création et gestion de factures, devis et avoirs.',
      '**Compatibilité Peppol :** Génération de factures au format XML standardisé pour les échanges européens.',
      '**Architecture Microservices :** Chaque module est indépendant, garantissant flexibilité, scalabilité et résilience.',
      '**Interface Utilisateur Intuitive :** Frontend développé avec React pour une expérience utilisateur moderne et réactive.',
      '**API Robuste :** Backend construit avec FastAPI (Python) pour des performances élevées et une documentation API automatique.',
    ],
    roadmap: [ // Feuille de route pour les futures versions et modules
      '**Gestion de la Relation Client (CRM) :** Suivi des prospects, clients, et gestion des opportunités commerciales.',
      '**Gestion des Stocks & Logistique :** Optimisation des inventaires, suivi des flux de marchandises et gestion des entrepôts.',
      '**Comptabilité & Finance :** Module complet pour la tenue des comptes, le suivi budgétaire et les rapports financiers.',
      '**Ressources Humaines (RH) :** Gestion des employés, des congés, des fiches de paie et du recrutement.',
      '**Personnalisation Poussée :** Un tableau de bord configurable et des rapports adaptés à chaque métier.',
      '**Déploiement Cloud & On-Premise :** Options de déploiement flexibles pour s\'adapter aux préférences client.',
    ],
    technologies: ['React', 'FastAPI (Python)', 'SQLAlchemy', 'PostgreSQL', 'Microservices', 'Docker (prévu)'],
    githubLink: 'https://github.com/Rusius02/Finovo', // Remplacez par le lien réel de votre dépôt
    screenshots: [
      { src: '/images/Finovo/billing-screen.png', alt: 'Capture d\'écran du Module de Facturation' },
      { src: '/images/Finovo/dashboard.png', alt: 'Capture d\'écran du Tableau de Bord' },
      { src: '/images/Finovo/peppol-xml.png', alt: 'Capture d\'écran de la génération XML Peppol' },
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
              <h3><i className="fas fa-lightbulb"></i> L'IDÉE DERRIÈRE FINOVO</h3> {/* Nouvelle icône */}
              <p>{projectData.description}</p>
            </div>
            <div className="objective-block">
              <h3><i className="fas fa-cogs"></i> VISION & ARCHITECTURE</h3> {/* Nouvelle icône */}
              <p>{projectData.objective}</p>
            </div>
          </div>

          <div className="scan-line-separator"></div>

          {/* Section Fonctionnalités (Actuelles/Prioritaires) et Technologies */}
          <div className="features-tech-section">
            <div className="features-block">
              <h3><i className="fas fa-star"></i> FONCTIONNALITÉS PRIORITAIRES</h3> {/* Nouvelle icône */}
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li> 
                ))}
              </ul>
            </div>
            <div className="tech-used-block">
              <h3><i className="fas fa-code"></i> TECHNOLOGIES CLÉS</h3> {/* Nouvelle icône */}
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
            <h3><i className="fas fa-route"></i> FEUILLE DE ROUTE & MODULES FUTURS</h3> {/* Nouvelle icône */}
            <ul>
              {projectData.roadmap.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          </div>

          <div className="scan-line-separator"></div>

          {/* Section Captures d'écran (Carrousel) */}
          <div className="screenshots-section">
            <h3><i className="fas fa-image"></i> APERÇUS & MAQUETTES</h3>
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

export default FinovoScreen;