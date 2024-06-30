import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import '../../assets/styles/contacto.css';

const ContactPage = () => {
  return (
    <MainTemplate>
      <section className="aportacion-section">
        <h2>Contacto</h2>
        <p>Puedes contactarnos a través del siguiente correo electrónico: info@plantandofuturo.com</p>
      </section>
    </MainTemplate>
  );
};

export default ContactPage;
