"use client"
import menuStyle from '@/components/styles/cadastro.scss'
import React, { useState } from 'react';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosCadastro = { nome, idade, cpf, email, telefone };

    try {
      const resposta = await fetch('http://localhost:8080/NTJ-Health/api/paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dadosCadastro),
      });

      // Agora verificamos se a resposta está ok
      if (resposta.ok) {
        console.log('Cadastro realizado com sucesso!');
        // Se desejar redirecionar após o sucesso, descomente a linha abaixo
        // window.location = '/'
      } else {
        console.error('Erro ao cadastrar usuário.');
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
    }
  };

  return (
    <div >
      <h1>Cadastro de Paciente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Idade:
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </label>
        <br />
        <label>
          CPF:
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
