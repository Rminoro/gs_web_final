"use client"
import React, { useState } from 'react';
import styles from '@/components/styles/cadastro.scss';

const PesquisarTabela = () => {
  const [id, setId] = useState('');
  const [tabela, setTabela] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:8080/NTJ-Health/api/tabela/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTabela(data);
        setIsLoaded(true);
      })
      .catch((error) => console.error('Erro ao obter dados da tabela:', error));
  };

  return (
    <div className={styles.container}>
      <h1>Pesquisar Tabela</h1>
      <label>
        ID da Tabela:
        <input type="text" value={id} onChange={handleChangeId} />
      </label>
      <button onClick={handleSearch}>Pesquisar</button>
      <br />
      {isLoaded && (
        <div>
          <h2>Informações da Tabela</h2>
          <p>BCG: {tabela.bcg}</p>
          <p>Hepatite B: {tabela.hepatiteB}</p>
          <p>Rotavírus: {tabela.rotavirus}</p>
          {/* Adicione outros campos conforme necessário */}
        </div>
      )}
    </div>
  );
};

export default PesquisarTabela;
