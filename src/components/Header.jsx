import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import logo from '../assets/images/logo.png';
import '../assets/styles/Header.css';

export const Header = () => {

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Index', path: '/index' },
    { name: 'Pet Abilities', path: '/PetAbilities' }
  ];

  return (
    <header>
      <div className="header-middle">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="titulo_pagina"> Hunter Bestiary </h1>
      </div>
      <nav aria-label="Main navigation">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* Link react-router-dom to nav */}
              <Link to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};