import React from 'react';
import '../../assets/styles/styles2.css';

const MainTemplate = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>Plantando Futuro</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/aportacion">Aportación</a></li>
            <li><a href="/calor">Calor en Suchiapa</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/registro">Registro</a></li>
            <li><a href="/sesion">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>
        <p>&copy; 2024 Plantando Futuro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;
