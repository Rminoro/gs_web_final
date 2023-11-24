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
          <p>dtpa: {tabela.dtpa}</p>
          <p>vip: {tabela.vip}</p>
          <p>hib: {tabela.hib}</p>
          <p>vpc10: {tabela.vpc10}</p>
          <p>meningococicasConjugadas: {tabela.meningococicasConjugadas}</p>
          <p>meningococicaB: {tabela.meningococicaB}</p>
          <p>influenza: {tabela.influenza}</p>
          <p>febreAmarela: {tabela.febreAmarela}</p>
          <p>scr: {tabela.scr}</p>
          <p>varicela: {tabela.varicela}</p>
          <p>hepatiteA: {tabela.hepatiteA}</p>
          <p>hpv4: {tabela.hpv4}</p>
          <p>dengue: {tabela.dengue}</p>
          <p>covid19: {tabela.covid19}</p>
          <p>idPaciente: {tabela.idPaciente}</p>
          


          {/* Adicione outros campos conforme necessário */}
        </div>
      )}
    </div>
  );
};

export default PesquisarTabela;
