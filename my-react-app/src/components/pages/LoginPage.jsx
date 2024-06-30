import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import LoginForm from '../molecules/LoginForm';
import '../../assets/styles/sesion.css';

const LoginPage = () => {
  return (
    <MainTemplate>
      <section className="aportacion-section">
        <h2>Iniciar Sesión</h2>
        <LoginForm />
      </section>
    </MainTemplate>
  );
};

export default LoginPage;
