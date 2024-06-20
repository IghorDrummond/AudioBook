import './App.css'
import brasCubaImg from './assets/bras_cubas.jpeg';
import Capa from './Capa.jsx';

function App() {
  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa:  brasCubaImg,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.'
  };

  return (
    <>
      <div className="capa">
        <Capa imagem={informacoesLivro.capa} textoAlternativo={informacoesLivro.textoAlternativo} />
      </div>
    </>
  )
}

export default App

/*
  Regras do React
  1- Sempre que você quiser colocar uma imagem para seu react, necessário importa ela primerio usando como caminho inicial ./
  2- Para criar componentes, você cria um fonte auxiliar e o importa para esse fonte em página principal, importante lembrar que é 
  necessário seu fonte está com a opção export default e nome da função que você quer exportar
*/