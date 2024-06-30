import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import DonationForm from '../molecules/DonationForm';
import '../../assets/styles/aportacion.css';

const AportacionPage = () => {
  return (
    <MainTemplate>
      <section id="aportacion" className="aportacion-section">
        <h2>Contribuye para Plantar un Árbol</h2>
        <DonationForm />
      </section>
    </MainTemplate>
  );
};

export default AportacionPage;
