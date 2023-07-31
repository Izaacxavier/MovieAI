import { Container } from './styles'

export function Button ({icon, title, variantStyles, titleAlt, OpenModal}){
    
        return(
            <Container 
                className={variantStyles ? "variantStyles" : ""}
                title={titleAlt} 
                type="button"
                onClick={OpenModal}
              >
                <img src={icon}/>
                {title}
            </Container>        
        ) 
    
}