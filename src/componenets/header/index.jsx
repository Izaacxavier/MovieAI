import {Container} from './styles'
import logo from '../../assets/logo.svg'
import { ButtonReload } from '../buttonReload'
import { ButtonBackToHome } from '../buttonBackToHome'

export function Header ({isDetails = false, newMoviesSuggestions, isLoading}){ 
    
    return(
        <Container>
            <img src={logo} alt="movieAI logo roxo" />
            {isDetails ?
             <ButtonBackToHome 
             title="Voltar"/> : 
             <ButtonReload 
             title="Nova recomendação"
             shuffleMovies={newMoviesSuggestions}
             loading={isLoading}
            /> }
        </Container>
    )

}