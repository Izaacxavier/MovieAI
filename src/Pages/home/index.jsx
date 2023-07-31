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
        // const shuffledMovies = data.results.sort(() => Math.random() - 0.5);
        const getMovies = data.results.slice(0, 3);
        setMovies(getMovies);
      });
  }, []);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailsPromises = movies.map((movie) =>
          fetch(`${apiUrl}${movie.id}?api_key=${keyApi}`).then((response) =>
            response.json()
          )
        );

        const movieDetailsData = await Promise.all(movieDetailsPromises);
        setMovies((prevMovies) =>
          prevMovies.map((movie, index) => ({
            ...movie,
            duration: convertToHoursAndMinutes(movieDetailsData[index].runtime),
          }))
        );
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movies]);

  const convertToHoursAndMinutes = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

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
            duration={movie.duration}
            movieId={movie.id}
          />
        ))}
      </Content>
    </Container>
  );
}
