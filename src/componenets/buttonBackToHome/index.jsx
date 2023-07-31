import {  ArrowArcLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export function ButtonBackToHome({ title}) {
  return (
    <Container to="/">
      {title}
      <span><ArrowArcLeft /></span>
    </Container>
  );
}
