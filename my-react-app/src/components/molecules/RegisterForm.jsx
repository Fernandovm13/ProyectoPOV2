import React, { useState } from 'react';

const RegisterForm = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario ${user.username} registrado exitosamente`);
    setUser({ username: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nombre de usuario:</label>
      <input type="text" id="username" name="username" value={user.username} onChange={handleChange} required />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
