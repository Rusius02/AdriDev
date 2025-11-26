import React, { useState } from 'react';
import './NisolNicoleScreen.css'; 
import { useTranslation } from 'react-i18next';

const NisolNicoleScreen = ({ onClose }) => {
  const { t } = useTranslation();
  const projectData = {
    id: 'nisolnicole',
    title: t('nisolnicole_title'),
    subtitle: t('nisolnicole_subtitle'),
    description: t('nisolnicole_description'),
    objective: t('nisolnicole_objective'),
    featuresV1: [
      t('nisolnicole_feature_v1_1'),
      t('nisolnicole_feature_v1_2'),
      t('nisolnicole_feature_v1_3'),
      t('nisolnicole_feature_v1_4'),
      t('nisolnicole_feature_v1_5'),
    ],
    roadmap: [
      t('nisolnicole_roadmap_item_1'),
      t('nisolnicole_roadmap_item_2'),
      t('nisolnicole_roadmap_item_3'),
    ],
    technologies: ['Vue3', '.NET/C#', 'REST API', 'HTML5', 'CSS3', 'JavaScript'], // Noms propres
    githubLink: 'https://github.com/Rusius02/NicoleNisol',
    screenshots: [
      { src: '/images/NisolNicole/home-screen.png', alt: t('nisolnicole_screenshot_alt_1') },
      { src: '/images/NisolNicole/shop-screen.png', alt: t('nisolnicole_screenshot_alt_2') },
      { src: '/images/NisolNicole/contact-screen.png', alt: t('nisolnicole_screenshot_alt_3') },
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
            <h3><i className="fas fa-info-circle"></i> {t('nisolnicole_presentation_title')}</h3>
            <p>{projectData.description}</p>
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-rocket"></i> {t('nisolnicole_vision_objectives_title')}</h3>
            <p>{projectData.objective}</p>
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-list-check"></i> {t('nisolnicole_features_v1_title')}</h3>
            <ul>
              {projectData.featuresV1.map((feature, index) => (
                <li key={index}><i className="fas fa-angle-right"></i> {feature}</li>
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-tools"></i> {t('nisolnicole_tech_stack_title')}</h3>
            <div className="tech-tags">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {projectData.githubLink && (
              <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                <i className="fab fa-github"></i> {t('project_github_button')}
              </a>
            )}
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="roadmap-section">
          <h3><i className="fas fa-map-signs"></i> {t('nisolnicole_roadmap_title')}</h3>
          <ul>
            {projectData.roadmap.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>

        <div className="scan-line-separator"></div>

        <div className="screenshots-section">
          <h3><i className="fas fa-image"></i> {t('nisolnicole_screenshots_title')}</h3>
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