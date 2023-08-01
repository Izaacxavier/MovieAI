import { CalendarBlank, Globe} from "@phosphor-icons/react";
import { Container, Header, Main, Footer, ContainerButton, ContainerButtonSinopse, ContainerButtonShared, Info, ContainerButtonsWhithShare } from "./styles";
import star from "../../assets/star.svg";
import { Button } from "../button";
import ButtonIcon from "../../assets/icone.svg";
import IconShare from "../../assets/iconshare.svg";
import IconNote from "../../assets/iconNote.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalVideo } from "../modalVideo";

export function Card({ title, poster, vote_average, release_date, language, movieId, trailerKey, isDetailsPage}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(trailerKey);

  function handleOpenModal() {
    console.log("clicou");
    setModalIsOpen(true);
  }
  function closeModal() {
    console.log("clicou");
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Header>
        <h1 className={isDetailsPage ? "is_details_page" : ""}>{title}</h1>
        <span className={isDetailsPage ? "is_details_page" : ""}>
          <img src={star} />
          {vote_average}
        </span>
      </Header>
      <Main>
        <img src={poster}/>
        <Info className={isDetailsPage ? "is_details_page" : ""}>
          <span>
            <Globe />
            {language}/pt-br
          </span>
          <span>
            <CalendarBlank />
            {release_date}
          </span>
        </Info>
      </Main>
      <Footer>
        <ContainerButton className={isDetailsPage ? "is_details_page" : ""}>
        <Button 
          icon={ButtonIcon}
          title="Assistir trailer"
          titleAlt="Click para assitir o trailer"
          OpenModal={handleOpenModal}
        />
        <ContainerButtonsWhithShare>
          <ContainerButtonSinopse>
            <Link to={`/details/${movieId}`}>
              <Button
                icon={IconNote}
                titleAlt="Click para ver mais"
                title="Sinopse"
                isLink={true}
              />
            </Link>
          </ContainerButtonSinopse>
          <ContainerButtonShared>
            <Button
              icon={IconShare}
              titleAlt="Click para compartilhar"
              variantStyles
            />
          </ContainerButtonShared>
        </ContainerButtonsWhithShare>
        </ContainerButton>
      </Footer>

      <ModalVideo
        modalIsOpen={modalIsOpen}
        linkVideo={trailerKey}
        closeModal={closeModal}
      />
    </Container>
  );
}
