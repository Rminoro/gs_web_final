"use client"
import React, { useState } from 'react';

const Cadastro = ({ onCadastrar }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastrar({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleNomeChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
