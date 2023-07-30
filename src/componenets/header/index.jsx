import {Container} from './styles'
import logo from '../../assets/logo.svg'
import { ButtonReload } from '../buttonReload'

export function Header (){
    return(
        <Container>
            <img src={logo} alt="movieAI logo roxo" />
            <ButtonReload 
            title="Nova recomendaçåo"
            loading
             />
        </Container>
    )
}