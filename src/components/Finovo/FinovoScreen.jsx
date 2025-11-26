import React, { useState } from 'react';
import './FinovoScreen.css'; 
import { useTranslation } from 'react-i18next';

const FinovoScreen = ({ onClose }) => {
  const { t } = useTranslation();

  const projectData = {
    id: 'finovo',
    title: t('finovo_title'),
    subtitle: t('finovo_subtitle'),
    description: t('finovo_description'),
    objective: t('finovo_objective'),
    features: [
      t('finovo_feature_1'),
      t('finovo_feature_2'),
      t('finovo_feature_3'),
      t('finovo_feature_4'),
      t('finovo_feature_5'),
    ],
    roadmap: [
      t('finovo_roadmap_item_1'),
      t('finovo_roadmap_item_2'),
      t('finovo_roadmap_item_3'),
      t('finovo_roadmap_item_4'),
      t('finovo_roadmap_item_5'),
      t('finovo_roadmap_item_6'),
    ],
    technologies: ['React', 'FastAPI (Python)', 'SQLAlchemy', 'PostgreSQL', 'Microservices', 'Docker (prévu)'],
    githubLink: 'https://github.com/Rusius02/Finovo-frontend',
    screenshots: [
      { src: '/images/Finovo/billing-screen.png', alt: t('finovo_screenshot_alt_1') },
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
            <i className="fas fa-times"></i> {t('project_close_button')} {/* <-- Clé générique */}
          </button>
        )}

        <div className="project-header">
          <h1 className="project-title">{projectData.title}</h1>
          <p className="project-subtitle">{projectData.subtitle}</p>
        </div>

        <div className="scan-line-separator"></div>

        <div className="project-details">
          <div className="description-block">
            <h3><i className="fas fa-lightbulb"></i> {t('finovo_idea_title')}</h3>
            <p>{projectData.description}</p>
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-cogs"></i> {t('finovo_vision_title')}</h3>
            <p>{projectData.objective}</p>
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-star"></i> {t('finovo_features_title')}</h3>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-code"></i> {t('finovo_tech_stack_title')}</h3>
            <div className="tech-tags">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {projectData.githubLink && (
              <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                <i className="fab fa-github"></i> {t('project_github_button')} {/* <-- Clé générique */}
              </a>
            )}
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="roadmap-section">
          <h3><i className="fas fa-route"></i> {t('finovo_roadmap_title')}</h3>
          <ul>
            {projectData.roadmap.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>

        <div className="scan-line-separator"></div>

        <div className="screenshots-section">
          <h3><i className="fas fa-image"></i> {t('finovo_screenshots_title')}</h3>
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