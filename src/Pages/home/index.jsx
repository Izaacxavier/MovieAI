import { Container, Content } from "./styles";
import { Card } from "../../componenets/card";
import { useState, useEffect } from "react";
import { keyApi } from "../../config/keyApi";
import { Header } from "../../componenets/header";

export function Home() {
  const apiUrl = "https://api.themoviedb.org/3/movie/";
  const imagePath = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}popular?api_key=${keyApi}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        const getMovies = data.results.slice(0, 3);
        fetchTrailers(getMovies);
        console.log(data.results)
      });
  }, []);


  function fetchTrailers(movies) {
    const promises = movies.map((movie) =>
      fetch(`${apiUrl}${movie.id}/videos?api_key=${keyApi}&language=en-US`)
        .then((response) => response.json())
        .then((data) => {
          const trailers = data.results.filter((video) => video.type === "Trailer");
          const trailerKey = trailers.length > 0 ? trailers[0].key : null;
          return { ...movie, trailerKey };
        })
    );

    Promise.all(promises).then((moviesWithTrailers) => {
      setMovies(moviesWithTrailers);
    });
  }

  function newMoviesSuggestions() {
    console.log("clicou");
    fetch(`${apiUrl}popular?api_key=${keyApi}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        data.results.sort(() => Math.random() - 0.5);
        const getMovies = data.results.slice(0, 3);
        setMovies(getMovies);
      });
  }

  return (
    <Container>
      <Header newMoviesSuggestions={newMoviesSuggestions} />
      <Content>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster={imagePath + movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date.slice(0, 4)}
            language={movie.original_language}
            movieId={movie.id}
            trailerKey={movie.trailerKey}

            trailerLink
          />
        ))}
      </Content>
    </Container>
    
  );
}
