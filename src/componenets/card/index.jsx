import { CalendarBlank, Clock, Play, Star } from "@phosphor-icons/react";
import {Container, Header, Main, Footer, ContainerButton, ContainerButtonSinopse,ContainerButtonShared } from "./styles";
import img1 from "../../assets/img1.svg";
import star from "../../assets/star.svg";
import { Button } from "../button";
import ButtonIcon from '../../assets/icone.svg'
import IconShare from '../../assets/iconshare.svg'
import IconNote from '../../assets/iconnote.svg'

export function Card() {
  return (
    <Container>
      <Header>
        <h1>Barbie</h1>
        <span>
          <img src={star} />
          4.9
        </span>
      </Header>
      <Main>
        <img src={img1} alt="barbie movie" />
        <div className="info">
          <span>
            <Clock /> 1:54:00
          </span>
          <span>
            {" "}
            <CalendarBlank /> 2023
          </span>
        </div>
      </Main>
      <Footer>
        <Button icon={ButtonIcon} title="Assistir trailer" />
        <ContainerButton>
          <ContainerButtonSinopse>
            <Button icon={IconNote} title="Sinopse" />
          </ContainerButtonSinopse>
          <ContainerButtonShared>
            <Button icon={IconShare} variantStyles/>
          </ContainerButtonShared>
        </ContainerButton>
      </Footer>
    </Container>
  );
}
