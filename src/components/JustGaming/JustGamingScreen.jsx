import React, { useState } from 'react';
import './JustGamingScreen.css'; 
import { useTranslation } from 'react-i18next';

const JustGamingScreen = ({ onClose }) => {
  const { t } = useTranslation();
  const projectData = {
    id: 'justgaming',
    title: t('justgaming_title'),
    subtitle: t('justgaming_subtitle'),
    description: t('justgaming_description'),
    objective: t('justgaming_objective'),
    features: [
      t('justgaming_feature_1'),
      t('justgaming_feature_2'),
      t('justgaming_feature_3'),
      t('justgaming_feature_4'),
      t('justgaming_feature_5'),
    ],
    technologies: ['Python', 'Django', 'HTMX', 'HTML5', 'CSS3', 'JavaScript'], // Laissées en dur car noms propres
    githubLink: 'https://github.com/JeremyVandeputte/JustGaming',
    screenshots: [
      { src: '/images/JustGaming/news-screen.png', alt: t('justgaming_screenshot_alt_1') },
      { src: '/images/JustGaming/home-screen.png', alt: t('justgaming_screenshot_alt_2') },
      { src: '/images/JustGaming/chat-navabar-myprofile.png', alt: t('justgaming_screenshot_alt_3') },
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
            <i className="fas fa-times"></i> {t('project_close_button')}
          </button>
        )}

        <div className="project-header">
          <h1 className="project-title">{projectData.title}</h1>
          <p className="project-subtitle">{projectData.subtitle}</p>
        </div>

        <div className="scan-line-separator"></div>

        <div className="project-details">
          <div className="description-block">
            <h3><i className="fas fa-users-game"></i> {t('justgaming_community_spirit_title')}</h3>
            <p>{projectData.description}</p>
          </div>
          <div className="objective-block">
            <h3><i className="fas fa-brain"></i> {t('justgaming_architecture_tech_title')}</h3>
            <p>{projectData.objective}</p>
          </div>
        </div>

        <div className="scan-line-separator"></div>

        <div className="features-tech-section">
          <div className="features-block">
            <h3><i className="fas fa-gamepad"></i> {t('justgaming_features_title')}</h3>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
              ))}
            </ul>
          </div>
          <div className="tech-used-block">
            <h3><i className="fas fa-laptop-code"></i> {t('justgaming_tech_stack_title')}</h3>
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
          <h3><i className="fas fa-image"></i> {t('justgaming_screenshots_title')}</h3>
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

export default JustGamingScreen;