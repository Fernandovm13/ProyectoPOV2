import React, { useState } from 'react';

const DonationForm = () => {
  const [donation, setDonation] = useState({ name: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${donation.name} por tu donación de $${donation.amount}`);
    setDonation({ name: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={donation.name} onChange={handleChange} required />

      <label htmlFor="amount">Cantidad:</label>
      <input type="number" id="amount" name="amount" value={donation.amount} onChange={handleChange} required />

      <button type="submit">Donar</button>
    </form>
  );
};

export default DonationForm;
