import { CircleNotch, Lightning } from "@phosphor-icons/react";
import { Container } from "./styles";

export function ButtonReload({ title, loading = false, shuffleMovies}) {

  return (
    <Container
     type="button" 
     disabled={loading}
     onClick={shuffleMovies}
     >
      {loading ? "Carregando..." : `${title}`}
      <span className="animation">{loading ? <CircleNotch /> : <Lightning />}</span>
    </Container>
  );
}
