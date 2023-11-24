
"use client";
import menuStyle from '@/components/styles/cadastro.scss';
import React, { useState } from 'react';
import Link from 'next/link';

const Cadastro = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosCadastro = {
      id: parseInt(id),
      nome,
      idade: parseInt(idade),
      cpf,
      email,
      telefone,
    };

    try {
      const resposta = await fetch('http://localhost:3000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dadosCadastro),
      });

      if (resposta.ok) {
        console.log('Cadastro realizado com sucesso!');
        // Realize ações adicionais, se necessário.
        console.log(dadosCadastro)
      } else {
        console.error('Erro ao cadastrar paciente:', resposta.status, resposta.statusText);
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
    }
  };

  return (
    <div>
      <h1>Cadastro de Paciente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
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
      <br/>
      <h3>
      <Link href="/informativos/alterarCartilha">
                Clique aqui para alterar as informações da cartilha do paciente
            </Link>
        
            <Link href="/informativos/cartilha">
                Caso o paciente já tenha cadastro, Clique aqui para consultar
            </Link>
      </h3>
    </div>

  );
  
};

export default Cadastro;
