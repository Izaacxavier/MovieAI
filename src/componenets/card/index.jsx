import { CalendarBlank, Globe} from "@phosphor-icons/react";
import {Container, Header, Main, Footer, ContainerButton, ContainerButtonSinopse,ContainerButtonShared } from "./styles";
import star from "../../assets/star.svg";
import { Button } from "../button";
import ButtonIcon from '../../assets/icone.svg'
import IconShare from '../../assets/iconshare.svg'
import IconNote from '../../assets/iconnote.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalVideo } from "../modalVideo";

export function Card({title, poster, vote_average, release_date, language, movieId, trailerKey}) {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  console.log(trailerKey)

  function handleOpenModal () {
    console.log("clicou")
    setModalIsOpen(true)
}

  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <span>
          <img src={star} />
          {vote_average}
        </span>
      </Header>
      <Main>
        <img src={poster} alt="barbie movie" />
        <div className="info">
          <span>
          <Globe/>{language}/pt-br
          </span>
          <span>
            <CalendarBlank />{release_date}
          </span>
        </div>
      </Main>
      <Footer>
        <Button 
        icon={ButtonIcon} 
        title="Assistir trailer" 
        titleAlt="Click para assitir o trailer"
        OpenModal={handleOpenModal}
        />   
        <ContainerButton>
          <ContainerButtonSinopse>
          <Link to={`/details/${movieId}`}>
            <Button 
            icon={IconNote}
             titleAlt="Click para ver mais" 
             title="Sinopse" 
             isLink={true}/>
          </Link>
          </ContainerButtonSinopse>
          <ContainerButtonShared>
            <Button 
            icon={IconShare}
            titleAlt="Click para compartilhar" 
            variantStyles/>
          </ContainerButtonShared>
        </ContainerButton>
      </Footer>

      <ModalVideo
       modalIsOpen={modalIsOpen}
       linkVideo={trailerKey}
       />
    </Container>
  );
}
