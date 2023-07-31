import { Container, Content, MovieDatails } from './styles'
import { Header } from "../../componenets/header";
import { useParams } from 'react-router-dom';
import img1 from '../../assets/img1.svg'
import { CalendarBlank, Clock, Dot } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { keyApi } from '../../config/keyApi'

export function Details (){
    const apiUrl = "https://api.themoviedb.org/3/movie/";
    const imagePath = "https://image.tmdb.org/t/p/original";
    const {id} = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`${apiUrl}${id}?api_key=${keyApi}&language=pt-BR`)
        .then( response => response.json())
        .then( data => {
            

            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                poster: `${imagePath}${data.poster_path}`,
                releaseDate: data.release_date,
                releaseDateFormatted: data.release_date.slice(0, 4),
                duration: data.runtime,
                genero1: data.genres[0].name,
                genero2: data.genres[1].name,
                genero3: data.genres[2].name
            }
            console.log(data)
            setMovie(movie)
        })

        
    }, [id])

    


    return(
        <Container>
            <Header isDetails/>
            <Content>
                <img src={movie.poster} alt="" />
                <MovieDatails>
                    <div className='title_movie'>
                        <h1>{movie.title}.</h1> 
                        <span>({movie.releaseDateFormatted})</span>
                        </div> 
                    <div className='details'>
                        <span><Clock/> {movie.duration}m</span>
                        <span><CalendarBlank/> {movie.releaseDate}</span>
                        <span>{movie.genero1}</span>
                        <span>{movie.genero2}</span>
                        <span>{movie.genero3}</span>

                    </div>
                    <div className='sinopse'>
                    <h3>Sinopse:</h3>
                    <p>{movie.sinopse}</p>
                    </div>
                </MovieDatails>
            </Content>
        </Container>
    )
}