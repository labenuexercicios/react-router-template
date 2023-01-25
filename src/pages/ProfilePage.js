import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";
import (useParams)
//2.2 usando o use params
// o parametro é um objeto, precisamos desestruturar. como passamos la como name, faremos assim
// la no botao de vir pra profile, na função de onclick,passamos o navigate e o nome que qeuremos como argumento

function ProfilePage() {
//2.2 desestruturação
  const{name} = useParams()
  // sem desestrutuação
  //const pathParams = uesePArams() e na hora de chamar na função seria pahParams.name (o pathPArams é um objeto, então seria pathParams.valor que clocamos no path params do route que criamos (path= "/profile/:name"))

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca do usuário</h1>
      <p>{name}</p>
    </MainContainer>
  );
}

export default ProfilePage;
