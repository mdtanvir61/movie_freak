import { useEffect, useState } from 'react';
import './TopRatedMovies.css';
import MovieCard from '../MovieList/MovieCard';

function TopRatedMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?api_key=0a2893fbdda749ca9b3a73920c0351cd"
            );
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    return (
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">Top Rated Movies</h2>
            </header>
            <div className="movie_cards">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}

export default TopRatedMovies;