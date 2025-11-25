import React, { useState } from 'react';
import './CardForgeScreen.css'; 
import { useTranslation } from 'react-i18next';

const CardForgeScreen = ({ onClose }) => {
  const { t } = useTranslation();
  const projectData = {
    id: 'cardforge',
    title: t('cardforge_title'), 
    subtitle: t('cardforge_subtitle'), 
    description: t('cardforge_description'), 
    objective: t('cardforge_objective'),
    features: [
      t('cardforge_feature_1'), 
      t('cardforge_feature_2'),
      t('cardforge_feature_3'),
      t('cardforge_feature_4'),
      t('cardforge_feature_5'),
    ],
    technologies: ['React (Frontend)', 'Node.js/Express (Backend)', 'MongoDB/PostgreSQL', 'WebSockets (Socket.IO)', 'HTML5', 'CSS3'], 
    githubLink: 'https://github.com/Rusius02/TrumpsCardsGames', 
    screenshots: [
      { src: '/images/CardForge/deck-builder.png', alt: t('cardforge_screenshot_alt_1') }, 
      { src: '/images/CardForge/gameplay-screen.png', alt: t('cardforge_screenshot_alt_2') }, 
      { src: '/images/CardForge/collection-manager.png', alt: t('cardforge_screenshot_alt_3') }, 
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
            <h3><i className="fas fa-magic"></i> {t('cardforge_idea_title')}</h3>
            <p>{projectData.description}</p> 
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-gavel"></i> {t('cardforge_vision_title')}</h3> 
            <p>{projectData.objective}</p> 
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-hat-wizard"></i> {t('cardforge_features_title')}</h3>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li> 
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-tools"></i> {t('cardforge_tech_stack_title')}</h3> 
            <div className="tech-tags">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {projectData.githubLink && (
              <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                <i className="fab fa-github"></i> {t('cardforge_github_button')} 
              </a>
            )}
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="screenshots-section">
          <h3><i className="fas fa-images"></i> {t('cardforge_screenshots_title')}</h3> 
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