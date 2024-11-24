import React from 'react'
import '../assets/styles/Footer.css';

export const Footer = () => {
  return (
    <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Tittle</h3>
                    <p>Dirección: Text</p>
                    <p>Teléfono: Text</p>
                    <p>Email: Text</p>
                </div>
                <div className="footer-links">
                    <h3>Tittle 2</h3>
                    <ul>
                        <li><a href="#inicio">Text</a></li>
                        <li><a href="#acerca">Text</a></li>
                        <li><a href="#servicios">Text</a></li>
                        <li><a href="#blog">Text</a></li>
                    </ul>
                </div>
                <div className="footer-legal">
                    <h3>Tittle 3</h3>
                    <ul>
                        <li><a href="#privacidad">Text</a></li>
                        <li><a href="#terminos">Text</a></li>
                        <li><a href="#cookies">Text</a></li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024. Battle.net.</p>
                </div>
            </div>
        </footer>
  )
}