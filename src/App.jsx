import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Index } from './components/Index';
import { Body } from './components/Body';

function App() {
  return (
    <Router>
      <Header />  {/* Componente de navegación */}
      <Routes>
        <Route path="/" element={<Body/>} />  {/* Página principal (Home) */}
        <Route path="/index" element={<Index />} />  {/* Ruta para Pet Index */}
        </Routes>
      <Footer />  {/* Componente Footer */}
    </Router>
  );
}

export default App;