import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./MovieDetail.css"
import Header from "../../components/header/Header";
export default function MovieDetail() {
    const [movie, setMovie] = useState();
    const { id } = useParams();

    const getData = () => {

        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => {
                setMovie(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(movie)
    return (
        <div className="main">
            <Header />
            <div className="movie">
                <div className="movie_intro">
                    <img className="movie_backdrop " src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
                </div>
                <div className="movie_detail">
                    <div className="movie_detailLeft">
                        <img className="movie_poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                    </div>
                    <div className="movie_detailRight" >
                        <div className="movie_desc">
                            <div className="movie_name">{movie ? movie.original_title : ""}</div>
                            <div className="movie_tagline">{movie ? movie.tagline : ""}</div>
                            <div className="movie_rating">
                                {movie ? movie.vote_average : ""} <i className="fas fa-star" />
                                <span className="movie_votecount"> {movie ? "(" + movie.vote_count + ")" : ""}</span>
                            </div>
                            <div className="movie_runtime">{movie ? movie.runtime + " mins" : ""}</div>
                            <div className="movie_data">{movie ? "Release data: " + movie.release_date : ""}</div>
                            <div className="movie_genres">
                                {
                                    movie && movie.genres
                                        ? movie.genres.map((genres) => (
                                            <>
                                                <span className="movie_genre" id={genres.id}>
                                                    {genres.name}
                                                </span>
                                            </>
                                        ))
                                        : ""
                                }
                            </div>
                        </div>
                        <div className="movie_detailBottom">
                            <div className="movie_text">Synopsis</div>
                            <div className="movie_overview">{movie ? movie.overview : ""}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
        
    )
}