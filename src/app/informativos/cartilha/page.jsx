// // pages/editar-tabela/[id].js
// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const EditarTabela = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [tabela, setTabela] = useState({
//     bcg: '',
//     hepatiteB: '',
//     rotaVirus: '',
//     dtpa: '',
//     Vip: '',
//     Hib: '',
//     Vpc10: '',
//     MeningococicasConjugadas: '',
//     MeningococicaB: '',
//     Influenza: '',
//     FebreAmarela: '',
//     Scr: '',
//     Varicela: '',
//     HepatiteA: '',
//     Hpv4: '',
//     Dengue: '',
//     covid19: '',
//     idPaciente: '',
//   });

//   useEffect(() => {
//     if (id) {
//       // Carregue os dados da tabela pelo ID ao montar a página
//       fetch(`http://localhost:3000/api/tabela/${id}`)
//         .then((response) => response.json())
//         .then((data) => setTabela(data))
//         .catch((error) => console.error('Erro ao obter dados da tabela:', error));
//     }
//   }, [id]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setTabela((prevTabela) => ({ ...prevTabela, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Envie os dados atualizados para a API
//     fetch(`http://localhost:3000/api/tabela/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(tabela),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Dados da tabela atualizados com sucesso!');
//           // Redirecione para a página de visualização ou outra página
//           router.push(`/visualizar-tabela/${id}`);
//         } else {
//           console.error('Erro ao atualizar dados da tabela. Status:', response.status);
//         }
//       })
//       .catch((error) => console.error('Erro na requisição:', error));
//   };

//   return (
//     <div>
//       <h1>Editar Tabela</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           BCG:
//           <input type="text" name="bcg" value={tabela.bcg} onChange={handleChange} />
//         </label>
      
//         <button type="submit">Salvar Alterações</button>
//       </form>
//     </div>
//   );
// };

// export default EditarTabela;

// "use client"
// // pages/editar-tabela/[id].js
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';

// const EditarTabela = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [tabela, setTabela] = useState({
//     bcg: '',
//     hepatiteB: '',
//     // Adicione as demais propriedades da tabela aqui
//   });

//   useEffect(() => {
//     if (id) {
//       // Carregue os dados da tabela pelo ID ao montar a página
//       fetch(`http://localhost:3000/api/tabela/${id}`)
//         .then((response) => response.json())
//         .then((data) => setTabela(data))
//         .catch((error) => console.error('Erro ao obter dados da tabela:', error));
//     }
//   }, [id]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setTabela((prevTabela) => ({ ...prevTabela, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Envie os dados atualizados para a API
//     fetch(`http://localhost:3000/api/tabela/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(tabela),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Dados da tabela atualizados com sucesso!');
//           // Redirecione para a página de visualização ou outra página
//           router.push(`/visualizar-tabela/${id}`);
//         } else {
//           console.error('Erro ao atualizar dados da tabela. Status:', response.status);
//         }
//       })
//       .catch((error) => console.error('Erro na requisição:', error));
//   };

//   return (
//     <div>
//       <h1>Editar Tabela</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Adicione campos para as propriedades da tabela aqui */}
//         <label>
//           BCG:
//           <input type="text" name="bcg" value={tabela.bcg} onChange={handleChange} />
//         </label>

//         <button type="submit">Salvar Alterações</button>
//       </form>
//     </div>
//   );
// };

// export default EditarTabela;

//
// 
// pages/editar-tabela/[id].js
// 
"use client"
import { useState } from 'react';

const EditarTabela = () => {
  const [id, setId] = useState('');
  const [tabela, setTabela] = useState({
    bcg: '',
    hepatiteB: '',
    rotavirus: '',
    dtpa: '',
    vip: '',
    hib: '',
    vpc10: '',
    meningococicasConjugadas: '',
    meningococicaB: '',
    influenza: '',
    febreAmarela: '',
    scr: '',
    varicela: '',
    hepatiteA: '',
    hpv4: '',
    dengue: '',
    covid19: '',
    idPaciente: '',
    // Adicione outras propriedades da tabela aqui
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    fetch(`http://localhost:8080/sua-aplicacao-java/api/tabela/${id}`)
      .then((response) => response.json())
      .then((data) => setTabela(data))
      .catch((error) => console.error('Erro ao obter dados da tabela:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTabela((prevTabela) => ({ ...prevTabela, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSave = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/sua-aplicacao-java/api/tabela/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tabela),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Dados da tabela atualizados com sucesso!');
          setIsEditMode(false);
        } else {
          console.error('Erro ao atualizar dados da tabela. Status:', response.status);
        }
      })
      .catch((error) => console.error('Erro na requisição:', error));
  };

  return (
    <div>
      <h1>Editar Tabela</h1>
      <label>
        ID da Tabela:
        <input type="text" value={id} onChange={handleChangeId} />
      </label>
      <button onClick={handleSearch}>Pesquisar</button>
      <br />
      {isEditMode ? (
        <form onSubmit={handleSave}>
          <label>
            BCG:
            <input type="text" name="bcg" value={tabela.bcg} onChange={handleChange} />
          </label>
          <label>
            Hepatite B:
            <input type="text" name="hepatiteB" value={tabela.hepatiteB} onChange={handleChange} />
          </label>
          <label>
            dtpa  :
            <input type="text" name="dtpa" value={tabela.dtpa} onChange={handleChange} />
          </label>
          <label>
          vip:
            <input type="text" name="rotavirus" value={tabela.vip} onChange={handleChange} />
          </label>
          <label>
          hib:
            <input type="text" name="hib" value={tabela.hib} onChange={handleChange} />
          </label>
          <label>
          vpc10:
            <input type="text" name="vpc10" value={tabela.vpc10} onChange={handleChange} />
          </label>
          <label>
          meningococicasConjugadas:
            <input type="text" name="meningococicasConjugadas" value={tabela.meningococicasConjugadas} onChange={handleChange} />
          </label>
          <label>
          meningococicaB:
            <input type="text" name="meningococicaB" value={tabela.meningococicaB} onChange={handleChange} />
          </label>
          <label>
          influenza:
            <input type="text" name="influenza" value={tabela.influenza} onChange={handleChange} />
          </label>
          <label>
          febreAmarela:
            <input type="text" name="febreAmarela" value={tabela.febreAmarela} onChange={handleChange} />
          </label>
          <label>
          scr:
            <input type="text" name="scr" value={tabela.scr} onChange={handleChange} />
          </label>
          <label>
          varicela:
            <input type="text" name="varicela" value={tabela.varicela} onChange={handleChange} />
          </label>
          <label>
          hepatiteA:
            <input type="text" name="hepatiteA" value={tabela.hepatiteA} onChange={handleChange} />
          </label>
          <label>
          hpv4:
            <input type="text" name="hpv4" value={tabela.hpv4} onChange={handleChange} />
          </label>
          <label>
          dengue:
            <input type="text" name="dengue" value={tabela.dengue} onChange={handleChange} />
          </label>
          <label>
          covid19:
            <input type="text" name="covid19" value={tabela.covid19} onChange={handleChange} />
          </label>

          <button type="submit">Salvar Alterações</button>
        </form>
      ) : (
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
          <p>varicela: {tabela.varicela}</p>
          <p>hepatiteA: {tabela.hepatiteA}</p>
          <p>hpv4: {tabela.hpv4}</p>
          <p>dengue: {tabela.dengue}</p>
          <p>covid19: {tabela.covid19}</p>



          
          
          <button onClick={handleEditClick}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default EditarTabela;
