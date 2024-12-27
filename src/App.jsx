import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Index } from './components/Index';
import { Home } from './components/Home';
import { PetAbilities } from './components/PetAbilities';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} /> 
        <Route path="/PetAbilities" element={<PetAbilities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;