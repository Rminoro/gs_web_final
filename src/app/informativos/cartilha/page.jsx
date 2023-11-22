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
"use client"
import { useState } from 'react';

const EditarTabela = () => {
  const [id, setId] = useState('');
  const [tabela, setTabela] = useState({
    bcg: '',
    hepatiteB: '',
    rotavirus: '',
    dtpa: '',
    Vip: '',
    Hib: '',
    Vpc10: '',
    MeningococicasConjugadas: '',
    MeningococicaB: '',
    Influenza: '',
    FebreAmarela: '',
    Scr: '',
    Varicela: '',
    HepatiteA: '',
    Hpv4: '',
    Dengue: '',
    covid19: '',
    idPaciente: '',
    // Adicione as demais propriedades da tabela aqui
  });

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    // Realize uma solicitação à API Java para obter os dados da tabela com base no ID
    fetch(`http://localhost:8080/sua-aplicacao-java/api/tabela/${id}`)
      .then((response) => response.json())
      .then((data) => setTabela(data))
      .catch((error) => console.error('Erro ao obter dados da tabela:', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTabela((prevTabela) => ({ ...prevTabela, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envie os dados atualizados para a API Java
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
      <button onClick={handleSearch}>Pesquisar e Editar</button>

      <form onSubmit={handleSubmit}>
        {/* Adicione campos para as propriedades da tabela aqui */}
        <label>
        <div>
          BCG:
          <input type="text" name="bcg" value={tabela.bcg} onChange={handleChange} />
        </div>
        <div>
          HepatiteB:
          <input type="text" name="HepatiteB" value={tabela.hepatiteB } onChange={handleChange} />
        </div>
          <div>
          rotavirus:
          <input type="text" name="rotavirus" value={tabela.rotavirus} onChange={handleChange} />
          </div>
          <div>
          dtpa:
          <input type="text" name="dtpa" value={tabela.dtpa} onChange={handleChange} />
          </div>
          <div>
          vip:
          <input type="text" name="vip" value={tabela.vip} onChange={handleChange} />
          </div>
          <div>
          hib:
          <input type="text" name="hib" value={tabela.hib} onChange={handleChange} />
          </div>
          <div>
          vpc10:
          <input type="text" name="vpc10" value={tabela.vpc10} onChange={handleChange} />
          </div>
          <div>
          meningococicasConjugadas:
          <input type="text" name="meningococicasConjugadas" value={tabela.meningococicasConjugadas} onChange={handleChange} />
          </div>
          <div>
          meningococicaB:
          <input type="text" name="meningococicaB" value={tabela.meningococicaB} onChange={handleChange} />
          </div>
          <div>
          influenza:
          <input type="text" name="influenza" value={tabela.influenza} onChange={handleChange} />
          </div>
          <div>
          febreAmarela:
          <input type="text" name="febreAmarela" value={tabela.febreAmarela} onChange={handleChange} />
          </div>
          <div>
          scr:
          <input type="text" name="scr" value={tabela.scr} onChange={handleChange} />
          </div>
          <div>
          varicela:
          <input type="text" name="varicela" value={tabela.varicela} onChange={handleChange} />
          </div>
          <div>
          hepatiteA:
          <input type="text" name="hepatiteA" value={tabela.hepatiteA} onChange={handleChange} />
          </div>
          <div>
          hpv4:
          <input type="text" name="hpv4" value={tabela.hpv4} onChange={handleChange} />
          </div>
          <div>
          dengue:
          <input type="text" name="dengue" value={tabela.dengue} onChange={handleChange} />
          </div>
          covid19:
          <input type="text" name="covid19" value={tabela.covid19} onChange={handleChange} />
            
        </label>

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditarTabela;

