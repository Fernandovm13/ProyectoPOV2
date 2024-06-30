import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import RegisterForm from '../molecules/RegisterForm';
import '../../assets/styles/registro1.css';

const RegisterPage = () => {
  return (
    <MainTemplate>
      <section className="aportacion-section">
        <h2>Registro</h2>
        <RegisterForm />
      </section>
    </MainTemplate>
  );
};

export default RegisterPage;
