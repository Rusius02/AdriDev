import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; 

import HomeHologram from './components/HomeHologram/HomeHologram';
import ProjectsListScreen from './components/ProjectsList/ProjectsListScreen'; 
import MyTaskerScreen from './components/MyTasker/MyTaskerScreen';
import NisolNicoleScreen from './components/NisolNicole/NisolNicoleScreen';
import FinovoScreen from './components/Finovo/FinovoScreen';
import JustGamingScreen from './components/JustGaming/JustGamingScreen';
import LongLoveScreen from './components/LongLove/LongLoveScreen';
import CardForgeScreen from './components/CardForge/CardForgeScreen';

function App() {
  const navigate = useNavigate(); 

  const handleViewProjects = () => {
    navigate('/projects'); 
  };

  const handleContact = () => {
    alert('Contactez-moi ! (Fonctionnalité à implémenter)');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <HomeHologram 
            onViewProjects={handleViewProjects} 
            onContact={handleContact} 
          />
        } />

        <Route path="/projects" element={<ProjectsListScreen />} />

        <Route path="/projects/mytasker" element={<MyTaskerScreen onClose={() => navigate('/projects')} />} />
        <Route path="/projects/nisolnicole" element={<NisolNicoleScreen onClose={() => navigate('/projects')} />} />
        <Route path="/projects/finovo" element={<FinovoScreen onClose={() => navigate('/projects')} />} />
        <Route path="/projects/justgaming" element={<JustGamingScreen onClose={() => navigate('/projects')} />} />
        <Route path="/projects/longlove" element={<LongLoveScreen onClose={() => navigate('/projects')} />} />
        <Route path="/projects/cardforge" element={<CardForgeScreen onClose={() => navigate('/projects')} />} />
      </Routes>
    </div>
  );
}

export default App;