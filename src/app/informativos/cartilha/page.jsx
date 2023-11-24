"use client"
import React, { useState } from 'react';
import styles from '@/components/styles/cadastro.scss';
import Link from 'next/link';

const PesquisarTabela = () => {
  const [id, setId] = useState('');
  const [tabela, setTabela] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:8080/NTJ-Health/api/tabela/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTabela(data);
        setIsLoaded(true);
        setError(null);
        console.log(data);
      })
      
      .catch((error) => {
        setIsLoaded(true);
        setError(error.message);
        console.error('Erro ao obter dados da tabela:', error);
      });
  };
  

  return (
    <div className="conteudo">
      <h1>Pesquisar Tabela</h1>
      <label>
        ID da Tabela:
        <input type="text" value={id} onChange={handleChangeId} />
      </label>
      <button onClick={handleSearch}>Pesquisar</button>
      <br />
      {isLoaded && (
        <div className={styles.container}>
          
          <h2>Informações da Tabela</h2>

          <form>
          <table>
            <tr>
            <td>BCG: {tabela.bcg}</td>  
            </tr>
            <tr>
            <td>Hepatite B: {tabela.hepatiteB}</td>
            </tr>
            <tr>
            <td>Rotavírus: {tabela.rotavirus}</td>
            </tr>
            <tr>
            <td>dtpa: {tabela.dtpa}</td>
            </tr>
            <tr>
            <td>vip: {tabela.vip}</td>
            </tr>
            <tr>
            <td>hib: {tabela.hib}</td>
            </tr>
            <tr>
            <td>vpc10: {tabela.vpc10}</td>
            </tr>
            <tr>
            <td>meningococicasConjugadas: {tabela.meningococicasConjugadas}</td>
            </tr>
            <tr>
            <td>meningococicaB: {tabela.meningococicaB}</td>
            </tr>
            <tr>
            <td>influenza: {tabela.influenza}</td>
            </tr>
            <tr>
            <td>febreAmarela: {tabela.febreAmarela}</td>
            </tr>
            <tr>
            <td>scr: {tabela.scr}</td>
            </tr>
            <tr>
            <td>varicela: {tabela.varicela}</td>
            </tr>
            <tr>
            <td>hepatiteA: {tabela.hepatiteA}</td>
            </tr>
            <tr>
            <td>hpv4: {tabela.hpv4}</td>
            </tr>
            <tr>
            <td>dengue: {tabela.dengue}</td>
            </tr>
            <tr>
            <td>covid19: {tabela.covid19}</td>
            </tr>
            <tr>
            <td>idPaciente: {tabela.idPaciente}</td>
            </tr>
           
          </table>
          </form>

          <h3>
            <Link href="/informativos/alterarCartilha">
                Clique aqui para alterar as informações da cartilha do paciente
            </Link>
            </h3>
            <h3>
            <Link href="/informativos/cadastro">
                Caso necessário volte para o cadastro!
            </Link>
            </h3>
        </div>
      )}
    </div>
  );
};

export default PesquisarTabela;
