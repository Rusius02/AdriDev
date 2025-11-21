// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; // <--- Importez Routes, Route, useNavigate

import HomeHologram from './components/HomeHologram/HomeHologram';
import ProjectsListScreen from './components/ProjectsList/ProjectsListScreen'; // Importez le composant ProjectsListScreen
import MyTaskerScreen from './components/MyTasker/MyTaskerScreen';
import NisolNicoleScreen from './components/NisolNicole/NisolNicoleScreen';

function App() {
  const navigate = useNavigate(); // Hook pour naviguer programmatiquement

  // Fonction pour gérer le clic sur "Voir les Projets"
  const handleViewProjects = () => {
    navigate('/projects'); // Redirige vers la route /projects
  };

  // Fonction pour gérer le clic sur "Me Contacter" (pour l'instant, juste une alerte)
  const handleContact = () => {
    alert('Contactez-moi ! (Fonctionnalité à implémenter)');
    // Vous pouvez rediriger vers une page de contact, ouvrir un formulaire, etc.
  };

  return (
    <div className="App">
      <Routes>
        {/* Route pour l'écran d'accueil */}
        <Route path="/" element={
          <HomeHologram 
            onViewProjects={handleViewProjects} 
            onContact={handleContact} 
          />
        } />

        {/* Route pour la liste des projets */}
        <Route path="/projects" element={<ProjectsListScreen />} />

        {/* Route pour le projet MyTasker */}
        <Route path="/projects/mytasker" element={<MyTaskerScreen onClose={() => navigate('/projects')} />} />
        <Route path="/projects/nisolnicole" element={<NisolNicoleScreen onClose={() => navigate('/projects')} />} />
        {/* Ajoutez d'autres routes de projets ici si nécessaire */}
        {/* <Route path="/projects/autre-projet" element={<AutreProjetScreen onClose={() => navigate('/projects')} />} /> */}

      </Routes>
    </div>
  );
}

export default App;