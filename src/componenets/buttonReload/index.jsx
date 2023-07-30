import { CircleNotch, Lightning } from "@phosphor-icons/react";
import { Container } from "./styles";

export function ButtonReload({ title, loading = false}) {
  return (
    <Container type="button" disabled={loading}>
      {loading ? "Carregando..." : `${title}`}
      <span>{loading ? <CircleNotch /> : <Lightning />}</span>
    </Container>
  );
}
