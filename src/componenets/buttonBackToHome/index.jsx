import {  ArrowArcLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export function ButtonBackToHome({ title}) {
  return (
    <Link to="/">
    <Container type="button">
      {title}
      <span><ArrowArcLeft /></span>
    </Container>
    </Link>
  );
}
