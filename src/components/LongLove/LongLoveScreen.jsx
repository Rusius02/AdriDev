import React, { useState } from 'react';
import './LongLoveScreen.css'; 
import { useTranslation } from 'react-i18next';

const LongLoveScreen = ({ onClose }) => {
  const { t } = useTranslation();
  const projectData = {
    id: 'longlove',
    title: t('longlove_title'),
    subtitle: t('longlove_subtitle'),
    description: t('longlove_description'),
    objective: t('longlove_objective'),
    features: [
      t('longlove_feature_1'),
      t('longlove_feature_2'),
      t('longlove_feature_3'),
      t('longlove_feature_4'),
      t('longlove_feature_5'),
      t('longlove_feature_6'),
    ],
    technologies: ['React Native', 'Node.js (Express/Firebase)', 'WebSockets (Socket.IO)', 'MongoDB/PostgreSQL', 'JavaScript'],
    githubLink: 'https://github.com/Rusius02/LongLove',
    screenshots: [
      { src: '/images/LongLove/messaging.png', alt: t('longlove_screenshot_alt_1') },
      { src: '/images/LongLove/shared-calendar.png', alt: t('longlove_screenshot_alt_2') },
      { src: '/images/LongLove/couple-game.png', alt: t('longlove_screenshot_alt_3') },
      { src: '/images/LongLove/memory-gallery.png', alt: t('longlove_screenshot_alt_4') },
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
            <h3><i className="fas fa-heart"></i> {t('longlove_idea_title')}</h3>
            <p>{projectData.description}</p>
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-mobile-alt"></i> {t('longlove_vision_tech_challenges_title')}</h3>
            <p>{projectData.objective}</p>
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-gift-heart"></i> {t('longlove_features_title')}</h3>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-tools"></i> {t('longlove_tech_stack_title')}</h3>
            <div className="tech-tags">
              {projectData.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            {/* Si vous avez un githubLink et souhaitez le bouton ici : */}
            {projectData.githubLink && (
                <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer" className="hologram-button github-button">
                    <i className="fab fa-github"></i> {t('project_github_button')}
                </a>
            )}
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="screenshots-section">
          <h3><i className="fas fa-images"></i> {t('longlove_screenshots_title')}</h3>
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