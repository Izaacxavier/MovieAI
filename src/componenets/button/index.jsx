import { Container } from './styles'

export function Button ({icon, title, variantStyles, titleAlt, isLink}){
    
        return(
            <Container 
            className={variantStyles ? "variantStyles" : ""}
              title={titleAlt} 
              type="button">
                <img src={icon}/>
                {title}
            </Container>        
        ) 
    
}