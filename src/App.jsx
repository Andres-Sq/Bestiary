import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Index } from './components/Index';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Header />  {/* Componente de navegación */}
      
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página principal (Home) */}
        <Route path="/index" element={<Index />} />  {/* Ruta para Pet Index */}
        <Route path="/pet-abilities" component={'PetAbilities'} />  {/* Ruta para Pet Abilities */}
        <Route path="/pet-by-id" component={'PetById'} />  {/* Ruta para Pet by Id */}
        <Route path="/ability-by-id" component={'AbilityById'} />  {/* Ruta para Ability by Id */}
      </Routes>
      <Footer />  {/* Componente Footer */}
    </Router>
  );
}

export default App;