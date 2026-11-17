import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomeHologram.css';

const linkedInUrl = 'https://www.linkedin.com/in/adrien-sti%C3%A9venart-105361211/';
const githubUrl = 'https://github.com/Rusius02';

const technologies = [
  'Java',
  'C# / .NET',
  'JavaScript',
  'React',
  'Vue 3',
  'Python',
  'Flutter',
  'SQLite',
];

const HomeHologram = ({ onViewProjects }) => {
  const { t } = useTranslation();

  return (
    <main className="home-shell">
      <header className="site-header">
        <a className="site-brand" href="/" aria-label={t('home_name')}>
          <span className="site-brand-mark">AS</span>
          <span>{t('home_name')}</span>
        </a>
        <nav className="site-navigation" aria-label={t('main_navigation')}>
          <button className="text-link" onClick={onViewProjects}>{t('view_projects')}</button>
          <a className="text-link" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" />{t('home_eyebrow')}</p>
          <h1>{t('home_title_1')}</h1>
          <p className="hero-subtitle">{t('home_title_2')}</p>
          <p className="hero-description">{t('home_intro')}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onViewProjects}>
              {t('view_projects')} <span aria-hidden="true">&rarr;</span>
            </button>
            <a className="button button-secondary" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              {t('contact_me_linkedin')}
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <div className="profile-image-frame">
            <img src="/profile-adrien.jpg" alt={t('home_name')} className="profile-image" />
          </div>
          <p className="profile-caption">{t('profile_caption')}</p>
        </div>
      </section>

      <section className="professional-section" aria-labelledby="experience-heading">
        <div className="section-heading">
          <p className="eyebrow">{t('experience_eyebrow')}</p>
          <h2 id="experience-heading">{t('experience_heading')}</h2>
        </div>
        <div className="experience-grid">
          {[1, 2, 3].map((item) => (
            <article className="experience-card" key={item}>
              <span className="experience-number">0{item}</span>
              <h3>{t(`path_section_title_${item}`)}</h3>
              <p>{t(`path_section_content_${item}`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section" aria-labelledby="expertise-heading">
        <div className="section-heading">
          <p className="eyebrow">{t('skills_section_title')}</p>
          <h2 id="expertise-heading">{t('expertise_heading')}</h2>
        </div>
        <div className="technology-list">
          {technologies.map((technology) => <span className="technology-pill" key={technology}>{technology}</span>)}
        </div>
        <div className="language-list">
          <span>{t('language_french_native')}</span>
          <span>{t('language_english_professional')}</span>
        </div>
      </section>

      <footer className="site-footer">
        <span>{t('footer_text')}</span>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  );
};

export default HomeHologram;
