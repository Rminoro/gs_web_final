import Image from 'next/image'
import Cadastro from '../components/cadastro/cadastro';

export default function Home() {
 
    <div><p>a</p></div>
    const Home = () => {
      const cadastrarNoBackend = (dados) => {
        // Lógica para enviar dados para o backend
        console.log('Dados a serem enviados:', dados);
      };
    
      return (
        <div>
          <h1>Minha Página Inicial</h1>
          <Cadastro onCadastrar={cadastrarNoBackend} />
        </div>
      );
    };
    



  
}
