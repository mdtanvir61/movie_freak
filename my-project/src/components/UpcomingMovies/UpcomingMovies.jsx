import './UpcomingMovies.css'
import MovieCard from '../MovieList/MovieCard'
import { useEffect, useState } from 'react'

function UpcomingMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchUpcomingMovies()
    }, [])

    const fetchUpcomingMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=0a2893fbdda749ca9b3a73920c0351cd"
        )
        const data = await response.json()
        setMovies(data.results)
    }

    return (
        <section className='movie_list'>
            <header className="align_center movie_list_header">
                <h2 className='align_center movie_list_heading'>Upcoming Movies</h2>
            </header>
            <div className="movie_cards">
                {
                    movies.map(movie => 
                    <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </section>
    )
}

export default UpcomingMovies