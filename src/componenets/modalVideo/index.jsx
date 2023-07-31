import { Container, Content } from "./styles";


export function ModalVideo ({modalIsOpen, linkVideo}) {
    const linkVideoYoutube = "https://www.youtube.com/embed/" ;

    if(modalIsOpen){
        return(
            <Container>
                <Content>
                <iframe width="640" height="360" src={`${linkVideoYoutube}${linkVideo}`} frameborder="0" allowfullscreen></iframe>
                </Content>
            </Container>
        )
    }else{
        return null;
    }
    
}