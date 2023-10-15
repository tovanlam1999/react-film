import "./Card.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
export default function Cards(props) {
    const { movie, index } = props;

    return (
       
        <Card className="cards" >
            <img className="cards_img" alt="Sample" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
            <CardBody className="cards_overlay">
                <CardTitle className="cards_title" tag="h5">
                    {movie ? movie.title : ""}
                </CardTitle>
                <CardText className="cards_runtime">
                    {movie ? movie.release_date : ""}
                    <span className="cards_rating">
                        {movie ? movie.vote_average : ""}
                        <i className="fas fa-star" />
                    </span>
                </CardText>
                <CardText className="cards_desc">
                    {movie ? movie.overview.slice(0, 100) + "..." : ""}
                </CardText>
            </CardBody>
        </Card>
    
    )
}