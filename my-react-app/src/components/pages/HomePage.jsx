import React from 'react';
import MainTemplate from '../templates/MainTemplate';

const HomePage = () => {
  return (
    <MainTemplate>
      <div className="home-section">
        <h2>Bienvenido a Plantando Futuro</h2>
        <p>
          En Plantando Futuro nos dedicamos a la reforestación y conservación del medio ambiente.
          Únete a nosotros en nuestra misión de hacer del mundo un lugar mejor plantando árboles y
          cuidando nuestro entorno.
        </p>
        <div className="image-container">
          <div className="image-item">
            <img src="/prevencion.jpg" alt="Prevención" />
          </div>
          <div className="image-item">
            <img src="/prevencion2.jpg" alt="Prevención 2" />
          </div>
          <div className="image-item">
            <img src="/prevencion3.jpg" alt="Prevención 3" />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
