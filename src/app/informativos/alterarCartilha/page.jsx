"use client"
import React, { useState } from 'react';
import styles from '@/components/styles/cadastro.scss';


const AlterarTabela = () => {
  const [id, setId] = useState('');
  const [tabela, setTabela] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Estados para os novos valores
  const [novosValores, setNovosValores] = useState({
    bcg: '',
    hepatiteB: '',
    rotavirus: '',
    dtpa:'',
    vip:'',
    hib:'',
    vpc10:'',
    meningococicasConjugadas:'',
    meningococicaB:'',
    influenza:'',
    febreAmarela:'',
    scr:'',
    varicela:'',
    hepatiteA:'',
    hpv4:'',
    dengue:'',
    covid19:'',
    idPaciente:'',
  });

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

  const handleChangeNovosValores = (event) => {
    const { name, value } = event.target;
    setNovosValores((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    fetch(`http://localhost:8080/NTJ-Health/api/tabela/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novosValores),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados atualizados com sucesso:', data);
       
      })
      .catch((error) => console.error('Erro ao atualizar dados da tabela:', error));
  };

  return (

    <div className="conteudo">
      <h1>Alterar Tabela</h1>
      <label>
        ID da Tabela:
        <input type="text" value={id} onChange={handleChangeId} />
      </label>
      <button onClick={handleSearch}>Pesquisar</button>
      <br />
      {isLoaded && (
        <div>
          <h2>Informações da Tabela</h2>
         

          <h2>Atualizar Dados</h2>
        
        <table>
          <label>
            BCG:
            <input type="text" name="bcg" value={novosValores.bcg} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
            Hepatite B:
            <input type="text" name="hepatiteB" value={novosValores.hepatiteB} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
            rotavirus:
            <input type="text" name="rotavirus" value={novosValores.rotavirus} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          dtpa:
            <input type="text" name="dtpa" value={novosValores.dtpa} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          vip:
            <input type="text" name="vip" value={novosValores.vip} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          hib:
            <input type="text" name="hib" value={novosValores.hib} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          vpc10:
            <input type="text" name="vpc10" value={novosValores.vpc10} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          meningococicasConjugadas:
            <input type="text" name="meningococicasConjugadas" value={novosValores.rotavirmeningococicasConjugadasus} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          meningococicaB:
            <input type="text" name="meningococicaB" value={novosValores.meningococicaB} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          influenza:
            <input type="text" name="influenza" value={novosValores.influenza} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          febreAmarela:
            <input type="text" name="febreAmarela" value={novosValores.febreAmarela} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          scr:
            <input type="text" name="scr" value={novosValores.scr} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          varicela:
            <input type="text" name="varicela" value={novosValores.varicela} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          hepatiteA:
            <input type="text" name="hepatiteA" value={novosValores.hepatiteA} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          hpv4:
            <input type="text" name="hpv4" value={novosValores.hpv4} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          dengue:
            <input type="text" name="dengue" value={novosValores.dengue} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          covid19:
            <input type="text" name="covid19" value={novosValores.covid19} onChange={handleChangeNovosValores} />
          </label>
          <br />
          <label>
          idPaciente:
            <input type="text" name="idPaciente" value={novosValores.idPaciente} onChange={handleChangeNovosValores} />
          </label>
          <br />
          
          <button onClick={handleUpdate}>Atualizar</button>
          </table>
        </div>
      )}
    </div>
  );
};

export default AlterarTabela;
