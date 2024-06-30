import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido ${credentials.username}`);
    setCredentials({ username: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nombre de usuario:</label>
      <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} required />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required />

      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
