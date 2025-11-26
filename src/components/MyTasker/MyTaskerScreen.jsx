import React, { useState } from 'react';
import './MyTaskerScreen.css';
import { useTranslation } from 'react-i18next';

const MyTaskerScreen = ({ onClose }) => { 
  const { t } = useTranslation();
 const projectData = {
    title: t('mytasker_title'),
    subtitle: t('mytasker_subtitle'),
    description: t('mytasker_description'),
    objective: t('mytasker_objective'),
    features: [
      t('mytasker_feature_1'),
      t('mytasker_feature_2'),
      t('mytasker_feature_3'),
      t('mytasker_feature_4'),
      t('mytasker_feature_5'),
    ],
    technologies: ['WPF', 'C#', '.NET Framework'], // Laissées en dur car noms propres
    githubLink: 'https://github.com/Rusius02/myTasker',
    screenshots: [
      { src: '/images/MyTasker/project-view.png', alt: t('mytasker_screenshot_alt_1') },
      { src: '/images/MyTasker/person-view.png', alt: t('mytasker_screenshot_alt_2') },
      { src: '/images/MyTasker/task-view.png', alt: t('mytasker_screenshot_alt_3') },
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
            <h3><i className="fas fa-info-circle"></i> {t('mytasker_presentation_title')}</h3>
            <p>{projectData.description}</p>
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-bullseye"></i> {t('mytasker_objective_learning_title')}</h3>
            <p>{projectData.objective}</p>
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-list-check"></i> {t('mytasker_features_title')}</h3>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index}><i className="fas fa-angle-right"></i> {feature}</li>
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-tools"></i> {t('mytasker_tech_stack_title')}</h3>
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

        <div className="screenshots-section">
          <h3><i className="fas fa-image"></i> {t('mytasker_screenshots_title')}</h3>
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

export default MyTaskerScreen;