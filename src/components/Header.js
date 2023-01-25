import { Form } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import {goToHome, goToProfile, goToLogin} from "../routes/coordinator"
import { useNavigate } from "react-router-dom";


//2.2 ja criamos as funções no coordinator, agora inportamos aqui, importamos os hooks(useNavigate  e ou useParams) apara passarmops os parametro para as funções no coordinator
function Header() {

  //2.2 uso do navigate

  const navigate = useNavigate()

  //chamamos as funcoes dentro dos onclick com arrow function pois receberaõ os parametro navigate e ou path params, e isso sera recebido nas funções no arquivo coordinator

  return (
    <StyledHeader>
      <StyledButton onClick={()=>goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton  onClick={()=>goToProfile(navigate, "bananinha")}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={()=>goToLogin(navigate)}>
        Faça seu login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
