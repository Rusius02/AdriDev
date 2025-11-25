import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProjectsListScreen.css';
import { useTranslation } from 'react-i18next';


const projects = [
  { 
    id: 'portfolio', 
    title: 'Ce Portfolio Interactif', 
    description: 'Une Vitrine Technologique (React & CSS)',
    thumbnail: '/images/this/home-screen.png' 
  },
  { 
    id: 'nisolnicole', 
    title: 'NisolNicole', 
    description: 'Vitrine Littéraire & E-commerce (Vue3 & .NET)',
    thumbnail: '/images/NisolNicole/home-screen.png' 
  },
  { 
    id: 'finovo', 
    title: 'Finovo', 
    description: 'ERP Modulaire (React & FastAPI/Python)',
    thumbnail: '/images/Finovo/billing-screen.png' 
  },
  { 
    id: 'justgaming', 
    title: 'JustGaming', 
    description: 'Réseau Social pour Gamers (Django & HTMX)',
    thumbnail: '/images/JustGaming/home-screen.png' 
  },
   { 
    id: 'mytasker', 
    title: 'MyTasker', 
    description: 'Gestionnaire de Projets & Tâches (WPF)',
    thumbnail: '/images/MyTasker/project-view.png' 
  },
  { 
    id: 'longlove',
    title: 'LongLove', 
    description: 'App Mobile pour Couples à Distance (React Native)',
    thumbnail: '/images/LongLove/messaging.png'
  },
  { 
    id: 'cardforge', 
    title: 'CardForge', 
    description: 'Jeu de Cartes Personnalisable (Web)',
    thumbnail: '/images/CardForge/deck-builder.png' 
  },
];

const ProjectsListScreen = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleGoHome = () => {
    navigate('/'); 
  };
 return (
    <div className="projects-list-container">
      <div className="projects-list-hologram-border">
        <div className="projects-list-hologram-content">
          <button className="hologram-back-button" onClick={handleGoHome}>
            <i className="fas fa-arrow-left"></i> {t('projects_list_back_to_home')} 
          </button>
          <h1 className="projects-list-title">{t('projects_list_title')}</h1> 
          <p className="projects-list-subtitle">{t('projects_list_subtitle')}</p> 

          <div className="scan-line-separator"></div>

          <div className="project-cards-grid">
            {projects.map(project => (
              <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
                <div className="project-card-image-container">
                    <img src={project.thumbnail} alt={t(`project_title_${project.id}`)} className="project-card-image" />
                </div>
                <h2 className="project-card-title">{t(`project_title_${project.id}`)}</h2> 
                <p className="project-card-description">{t(`project_description_${project.id}`)}</p> 
                <div className="project-card-action">
                    <span className="hologram-button-small">{t('projects_list_view_project_button')} <i className="fas fa-arrow-right"></i></span> {/* <-- Traduit */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListScreen;