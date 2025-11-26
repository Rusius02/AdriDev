import React, { useState } from 'react';
import './this.css'; 
import { useTranslation } from 'react-i18next';

const PortfolioScreen = ({ onClose }) => {
  const { t } = useTranslation();
  const projectData = {
    id: 'portfolio',
    title: t('portfolio_title'),
    subtitle: t('portfolio_subtitle'),
    description: t('portfolio_description'),
    objective: t('portfolio_objective'),
    features: [
      t('portfolio_feature_1'),
      t('portfolio_feature_2'),
      t('portfolio_feature_3'),
      t('portfolio_feature_4'),
      t('portfolio_feature_5'),
      t('portfolio_feature_6'),
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 (SCSS)', 'React Router Dom', 'Font Awesome'], // Noms propres
    githubLink: 'https://github.com/Rusius02/AdriDev',
    screenshots: [
      { src: '/images/this/home-screen.png', alt: t('portfolio_screenshot_alt_1') },
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
            <h3><i className="fas fa-laptop-code"></i> {t('portfolio_genesis_title')}</h3>
            <p>{projectData.description}</p>
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-bullseye"></i> {t('portfolio_objectives_achievements_title')}</h3>
            <p>{projectData.objective}</p>
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-tools"></i> {t('portfolio_features_title')}</h3>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-code-branch"></i> {t('portfolio_tech_stack_title')}</h3>
            <div className="tech-tags">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {projectData.githubLink && (
              <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                <i className="fab fa-github"></i> {t('portfolio_github_button')}
              </a>
            )}
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="screenshots-section">
          <h3><i className="fas fa-images"></i> {t('portfolio_screenshots_title')}</h3>
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