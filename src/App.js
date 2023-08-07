import { MainContainer } from "./style"
import Router from "./routes/Router"

// AULA 17 REACT ROUTER

//  PRATICA GUIADA 1

//1.1 Configure o site usando o React  Router, existem 2 paginas na aplicação:
// HomePage será acessada no path "/"
// ProfilePage sera acessada no path "/profile/:name"

//1.2 crie a pasta routes e dentro dela o componente Route.js

//1.3 dentro do Route.JS, faça o roteamento dessas 2 paginas para que fiquem acessiveis pela url

//resolução: foi criada a pasta, o componente Router, foram feitas as rotas nele e agora importamos ele aqui e chamamos no retorno do App

//  PRATICA 2

//2.1 faremos a navegação entre as telas 
// no header existem dois botoes que vamos usar para a navegação entre paginas
// crie um arquivo na pasta routes chamado coordinator
//2.2 dentro do cordinator crie as funções: goToHime direcina pra home e goToProfile direciona para a profile page de um noime especifco
//na pagina prifle page, faremos o uso do path params

function App() {
  return (
    <MainContainer>
      <Router/>
    </MainContainer>
  )
}

export default App
