import React from 'react'
import logo from '../assets/images/logo.svg';
import '../assets/styles/Header.css';


export const Header = () => {

    const menuItems = ['Home', ' Pet Index', 'Pet Abilities', 'Pet by Id', 'Ability by Id'];

  return (
    <header>
            <div class="header-middle">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 id="titulo_pagina"> Hunter Bestiary </h1>
            </div>
        <nav aria-label="Main navigation">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}