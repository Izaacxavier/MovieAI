import { Container } from './styles'

export function Button ({icon, title, variantStyles}){
    return(
        <Container className={variantStyles ? "variantStyles" : ""} type="button">
            <img src={icon}/>
            {title}
        </Container>
    )
}