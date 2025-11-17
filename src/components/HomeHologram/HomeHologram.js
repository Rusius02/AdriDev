import './HomeHologram.css';

// Définition des données pour l'affichage
const personalData = {
  name: 'ADRIEN STIÉVENART',
  titles: ['Développeur et Artiste dans l\'Âme', 'Bachelier en Informatique de Gestion'],
  photoPath: '/profile-adrien.jpg', // Placez votre image dans le dossier public
  sections: [
    {
      title: 'MON PARCOURS : L\'ÉVOLUTION',
      content: 'Après quelques années d\'études d\'ingénieur en agronomie, j\'ai réalisé que cette voie n\'était pas faite pour moi. Mon intérêt s\'est alors porté sur l\'informatique, en particulier le développement web, mobile et logiciel. J\'ai commencé par apprendre les bases de Java, puis j\'ai complété un Bachelier en Informatique de Gestion avec succès.',
    },
    {
      title: 'EXPÉRIENCE PROFESSIONNELLE : PHARMA TECH',
      content: 'J\'ai acquis une première expérience en tant que consultant, affecté à une mission dans une société spécialisée dans le développement de solutions informatiques pour le secteur pharmaceutique.',
    },
    {
      title: 'NOUVELLE AVENTURE : INDÉPENDANCE',
      content: 'Malgré les doutes générés par la complexité du marché de l\'emploi actuel, j\'ai pris la décision de me lancer dans une aventure solo pour maîtriser mes projets. Bienvenue sur mon portfolio ! N\'hésitez pas à me contacter pour toute collaboration. Explorez mes réalisations ci-dessous.',
    },
  ],
  technologies: [
    { name: 'React', xp: 85 },
    { name: 'Angular', xp: 70 },
    { name: 'Vue3', xp: 60 },
    { name: 'Java', xp: 90 },
    { name: '.NET / C#', xp: 75 },
    { name: 'C / C++', xp: 45 },
    { name: 'HTML/CSS', xp: 95 },
    { name: 'Python', xp: 55 },
    { name: 'VBA', xp: 65 },
  ],
  languages: ['Français (Natif)', 'Anglais (Professionnel)'],
};

const HomeHologram = ({ onViewProjects, onContact }) => {
  return (
    <div className="hologram-container">
      <div className="hologram-border">
        <div className="hologram-content">
          
          {/* Section principale - Nom et Titres */}
         <div className="header-section">
            <div className="profile-image-container">
              <img src={personalData.photoPath} alt="Adrien Stiévenart" className="profile-image" />
            </div>
            {/* Nouveau conteneur pour les textes à côté de la photo */}
            <div className="text-header-content"> 
                <h1 className="main-title">{personalData.name}</h1> {/* Ou {displayedTitle} si vous avez gardé l'effet */}
                <div className="titles-block">
                    <p className="subtitle">{personalData.titles[0]}</p>
                    <p className="subtitle">{personalData.titles[1]}</p>
                </div>
            </div>
          </div>

          {/* Section du Parcours divisé */}
          <div className="scan-line-separator"></div>
          <div className="parcours-section">
            {personalData.sections.map((section, index) => (
              <div key={index} className="parcours-block">
                <h3>{section.title}</h3>
                <p className="parcours-content">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="scan-line-separator"></div>

          {/* Section des Compétences et Langues */}
          <div className="skills-and-lang-section">
            
            <div className="skills-block">
              <h2><i className="fas fa-microchip"></i> COMPÉTENCES TECHNIQUES</h2>
              <div className="tech-list">
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
              <h2><i className="fas fa-globe"></i> LANGUES</h2>
              <div className="language-tags">
                {personalData.languages.map((lang, index) => (
                  <span key={index} className="language-tag">{lang}</span>
                ))}
              </div>
            </div>

          </div>

          {/* Section des Boutons d'Action */}
          <div className="action-buttons-section">
           <button className="hologram-button projects" onClick={onViewProjects}>VOIR LES PROJETS</button>
            <button className="hologram-button contact" onClick={onContact}>ME CONTACTER</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeHologram;

// NOTE : N'oubliez pas d'installer Font Awesome pour les icônes (npm install --save @fortawesome/fontawesome-free)
// ou de remplacer les balises <i> par des icônes React.