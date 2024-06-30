import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AportacionPage from './components/pages/AportacionPage';
import ContactPage from './components/pages/ContactPage';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import CalorPage from './components/pages/CalorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aportacion" element={<AportacionPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/sesion" element={<LoginPage />} />
        <Route path="/calor" element={<CalorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
