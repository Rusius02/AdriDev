// src/components/LanguageSelector/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'; // Créez ce fichier CSS

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Fonction pour changer la langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => changeLanguage('fr')} 
        className={i18n.language === 'fr' ? 'active' : ''}
        title="Français"
      >
        <span className="flag-icon">🇫🇷</span>
        {/* Vous pouvez aussi mettre du texte : FR */}
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={i18n.language === 'en' ? 'active' : ''}
        title="English"
      >
        <span className="flag-icon">🇬🇧</span>
        {/* EN */}
      </button>
      <button 
        onClick={() => changeLanguage('es')} 
        className={i18n.language === 'es' ? 'active' : ''}
        title="Español"
      >
        <span className="flag-icon">🇪🇸</span>
        {/* ES */}
      </button>
      <button 
        onClick={() => changeLanguage('de')} 
        className={i18n.language === 'de' ? 'active' : ''}
        title="Deutsch"
      >
        <span className="flag-icon">🇩🇪</span>
        {/* DE */}
      </button>
      <button 
        onClick={() => changeLanguage('nl')} 
        className={i18n.language === 'nl' ? 'active' : ''}
        title="Nederlands"
      >
        <span className="flag-icon">🇳🇱</span>
        {/* NL */}
      </button>
    </div>
  );
};

export default LanguageSelector;