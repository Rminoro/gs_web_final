// pages/pacientes.js
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [idPesquisado, setIdPesquisado] = useState('');
  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4567/api/pacientes');
      if (response.ok) {
        const data = await response.json();
        setPacientes(data);
      } else {
        console.error('Erro ao obter pacientes. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao obter pacientes:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const paciente = pacientes.find((p) => p.id === parseInt(idPesquisado));

    if (paciente) {
      setPacienteEncontrado(paciente);
    } else {
      setPacienteEncontrado(null);
      console.error('Paciente não encontrado');
    }
  };

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <div>
        <label>
          Pesquisar por ID:
          <input
            type="number"
            value={idPesquisado}
            onChange={(e) => setIdPesquisado(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      {pacienteEncontrado ? (
        <div>
          <h2>Paciente Encontrado</h2>
          <ul>
            <li>
              Nome: {pacienteEncontrado.nome}, Idade: {pacienteEncontrado.idade}, CPF:{' '}
              {pacienteEncontrado.cpf}, Email: {pacienteEncontrado.email}, Telefone:{' '}
              {pacienteEncontrado.telefone}
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>Lista de Pacientes</h2>
          <ul>
            {pacientes.map((paciente) => (
              <li key={paciente.id}>
                Nome: {paciente.nome}, Idade: {paciente.idade}, CPF: {paciente.cpf}, Email:{' '}
                {paciente.email}, Telefone: {paciente.telefone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pacientes;
