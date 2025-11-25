import React from 'react';
import './HomeHologram.css';
import { useTranslation } from 'react-i18next'; 

const linkedInUrl = "https://www.linkedin.com/in/adrien-sti%C3%A9venart-105361211/";

const HomeHologram = ({ onViewProjects }) => { 
  const { t } = useTranslation(); 
const personalData = {
  technologies: [
    { name: 'React', xp: 70 },
    { name: 'Angular', xp: 50 },
    { name: 'Vue3', xp: 70 },
    { name: 'Java', xp: 90 },
    { name: '.NET / C#', xp: 75 },
    { name: 'C / C++', xp: 25 },
    { name: 'HTML/CSS', xp: 85 },
    { name: 'Python', xp: 75 },
    { name: 'VBA', xp: 65 },
  ],
};
  return (
    <div className="hologram-container">
      <div className="hologram-border">
        <div className="hologram-content">

          <div className="header-section">
            <div className="profile-image-container">
              <img src="/profile-adrien.jpg" alt={t('home_name')} className="profile-image" />
            </div>
            <div className="text-header-content">
                <h1 className="main-title">{t('home_name')}</h1>
                <div className="titles-block">
                    <p className="subtitle">{t('home_title_1')}</p>
                    <p className="subtitle">{t('home_title_2')}</p>
                </div>
            </div>
          </div>

          <div className="scan-line-separator"></div>
          <div className="parcours-section">
            <div className="parcours-block">
                <h3>{t('path_section_title_1')}</h3>
                <p className="parcours-content">{t('path_section_content_1')}</p>
            </div>
            <div className="parcours-block">
                <h3>{t('path_section_title_2')}</h3>
                <p className="parcours-content">{t('path_section_content_2')}</p>
            </div>
            <div className="parcours-block">
                <h3>{t('path_section_title_3')}</h3>
                <p className="parcours-content">{t('path_section_content_3')}</p>
            </div>
          </div>
          <div className="scan-line-separator"></div>

          <div className="skills-and-lang-section">

            <div className="skills-block">
              <h2><i className="fas fa-microchip"></i> {t('skills_section_title')}</h2>
              <div className="tech-list">
                {/* Les noms de techs (React, Angular...) restent les mêmes, mais les XP peuvent être affichés */}
                {/* ... (votre code existant pour les technologies) ... */}
                {personalData.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech.name}</span>
                    <div className="xp-bar-container">
                      <div className="xp-bar-fill" style={{ width: `${tech.xp}%` }}>
                        <span className="xp-percent">{tech.xp}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="languages-block">
              <h2><i className="fas fa-globe"></i> {t('languages_section_title')}</h2>
              <div className="language-tags">
                <span className="language-tag">{t('language_french_native')}</span>
                <span className="language-tag">{t('language_english_professional')}</span>
              </div>
            </div>

          </div>

          <div className="action-buttons-section">
            <button className="hologram-button projects" onClick={onViewProjects}>{t('view_projects')}</button>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hologram-button contact-button linkedin-button"
            >
              {t('contact_me_linkedin')} <i className="fab fa-linkedin"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeHologram;