import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import '../../assets/styles/calor.css';

const CalorPage = () => {
  return (
    <MainTemplate>
      <section className="calor-section">
        <h2>Calor en Suchiapa</h2>
        <div>
          <img src="calor1.jpg" alt="Calor 1" />
          <p>Imagen representativa del calor en Suchiapa.</p>
        </div>
        <div>
          <img src="calor2.jpg" alt="Calor 2" />
          <p>Otra imagen representativa del calor en Suchiapa.</p>
        </div>
      </section>
    </MainTemplate>
  );
};

export default CalorPage;
