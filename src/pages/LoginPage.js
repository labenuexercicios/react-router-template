import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator"

export default function LoginPage (){

const navigate=useNavigate()

    return(
        <>

        <h1>faça seu login</h1>
        <button onClick={()=>goToHome(navigate)}>voltar pra home</button>
        </>
    )
}