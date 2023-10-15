
import Header from "../../components/header/Header";
import MovieList from "../../components/movielist/MovieList";
import "./Home.css"


export default function Home() {
   

    return (
        <div className="home">
            <Header/>
            <MovieList/>
        </div>
    );
}
