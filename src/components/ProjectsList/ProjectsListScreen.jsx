import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProjectsListScreen.css';

const projects = [
  {
    id: 'job-radar',
    titleKey: 'project_title_job_radar',
    descriptionKey: 'project_description_job_radar',
    technologies: ['Python', 'SQLite'],
    repository: 'https://github.com/Rusius02/job-radar',
    mark: 'JR',
    categoryKey: 'project_category_python',
  },
  {
    id: 'carbtrack',
    titleKey: 'project_title_carbtrack',
    descriptionKey: 'project_description_carbtrack',
    technologies: ['JavaScript', 'Python', 'SQLite'],
    repository: 'https://github.com/Rusius02/CarbTrack',
    mark: 'CT',
    categoryKey: 'project_category_web',
  },
  {
    id: 'fourcage',
    titleKey: 'project_title_fourcage',
    descriptionKey: 'project_description_fourcage',
    technologies: ['Flutter', 'Dart', 'Colyseus'],
    repository: 'https://github.com/Rusius02/FourCage',
    mark: 'FC',
    categoryKey: 'project_category_mobile',
  },
  {
    id: 'portfolio',
    titleKey: 'project_title_portfolio',
    descriptionKey: 'project_description_portfolio',
    thumbnail: '/images/this/home-screen.png',
    technologies: ['React', 'CSS'],
    repository: 'https://github.com/Rusius02/AdriDev',
    detailPath: '/projects/portfolio',
    categoryKey: 'project_category_web',
  },
  {
    id: 'finovo',
    titleKey: 'project_title_finovo',
    descriptionKey: 'project_description_finovo',
    thumbnail: '/images/Finovo/billing-screen.png',
    technologies: ['React', 'FastAPI', 'Python'],
    repository: 'https://github.com/Rusius02/Finovo-frontend',
    detailPath: '/projects/finovo',
    categoryKey: 'project_category_web',
  },
  {
    id: 'nisolnicole',
    titleKey: 'project_title_nisolnicole',
    descriptionKey: 'project_description_nisolnicole',
    thumbnail: '/images/NisolNicole/home-screen.png',
    technologies: ['Vue 3', '.NET', 'C#'],
    repository: 'https://github.com/Rusius02/NicoleNisol',
    detailPath: '/projects/nisolnicole',
    categoryKey: 'project_category_web',
  },
  {
    id: 'longlove',
    titleKey: 'project_title_longlove',
    descriptionKey: 'project_description_longlove',
    thumbnail: '/images/LongLove/messaging.png',
    technologies: ['Flutter', 'Node.js', 'Firebase', 'Gemini'],
    repository: 'https://github.com/Rusius02/LongLove',
    detailPath: '/projects/longlove',
    categoryKey: 'project_category_mobile',
  },
  {
    id: 'justgaming',
    titleKey: 'project_title_justgaming',
    descriptionKey: 'project_description_justgaming',
    thumbnail: '/images/JustGaming/home-screen.png',
    technologies: ['Django', 'Python', 'HTMX'],
    detailPath: '/projects/justgaming',
    categoryKey: 'project_category_web',
  },
  {
    id: 'mytasker',
    titleKey: 'project_title_mytasker',
    descriptionKey: 'project_description_mytasker',
    thumbnail: '/images/MyTasker/project-view.png',
    technologies: ['C#', 'WPF', '.NET'],
    repository: 'https://github.com/Rusius02/myTasker',
    detailPath: '/projects/mytasker',
    categoryKey: 'project_category_desktop',
  },
  {
    id: 'cardforge',
    titleKey: 'project_title_cardforge',
    descriptionKey: 'project_description_cardforge',
    thumbnail: '/images/CardForge/deck-builder.png',
    technologies: ['TypeScript', 'Web'],
    repository: 'https://github.com/Rusius02/TrumpsCardsGames',
    detailPath: '/projects/cardforge',
    categoryKey: 'project_category_web',
  },
];

const ProjectsListScreen = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="projects-page">
      <header className="projects-header">
        <button className="back-link" onClick={() => navigate('/')}>
          <span aria-hidden="true">&larr;</span> {t('projects_list_back_to_home')}
        </button>
        <p className="eyebrow">{t('projects_eyebrow')}</p>
        <h1>{t('projects_list_title')}</h1>
        <p className="projects-intro">{t('projects_list_subtitle')}</p>
      </header>

      <section className="project-cards-grid" aria-label={t('projects_list_title')}>
        {projects.map((project) => {
          const projectTitle = t(project.titleKey);
          const cardContent = (
            <>
              <div className="project-card-visual">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt="" className="project-card-image" />
                ) : (
                  <span className="project-card-mark" aria-hidden="true">{project.mark}</span>
                )}
                <span className="project-category">{t(project.categoryKey)}</span>
              </div>
              <div className="project-card-content">
                <h2>{projectTitle}</h2>
                <p className="project-card-description">{t(project.descriptionKey)}</p>
                <ul className="project-technologies" aria-label={t('technologies_label')}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className="project-card-actions">
                  {project.detailPath && (
                    <Link to={project.detailPath} className="project-action-link">
                      {t('projects_list_view_project_button')} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                  {project.repository && (
                    <a
                      className="repository-link"
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('project_github_button')}: ${projectTitle}`}
                    >
                      {t('project_github_button')} <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                </div>
              </div>
            </>
          );

          return (
            <article className="project-card" key={project.id}>
              {cardContent}
            </article>
          );
        })}
      </section>

      <footer className="projects-footer">
        <Link to="/" className="back-link">{t('projects_list_back_to_home')}</Link>
        <a href="https://github.com/Rusius02" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </main>
  );
};

export default ProjectsListScreen;
