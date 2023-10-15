import { useEffect, useState } from "react"
import axios from "axios"
import Cards from "../card/Card";
import "./MovieList.css"
import { Col, Container, Row } from "reactstrap";
import { useParams,Link } from "react-router-dom";

export default function MovieList() {
    const [data, setData] = useState([]);
    const { type } = useParams();
    const getData = (() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => {
                setData(res.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    })


    useEffect(() => {
        getData()
    }, [type])

    console.log(data)
    return (
        <div className="Movie">
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col sm="6" md="2">
                            <Link to={`/movie/${item.id}`}>
                                <Cards movie={item} index={index} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}