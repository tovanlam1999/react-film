import "./Header.css"
import { Link} from "react-router-dom"
export default function Header() {
    return (
        <div className="header">
            <h2><Link>Logo</Link></h2>
            <ul>
                <li>
                    <Link to="/movies/popular" style={{textDecoration:"none"}}>
                        <span>Popular</span>
                    </Link>
                </li>
                <li>
                    <Link to="/movies/top_rated" style={{textDecoration:"none"}}>
                        <span>Top Rated</span>
                    </Link>
                </li>
                <li>
                    <Link to="/movies/upcoming" style={{textDecoration:"none"}}>
                        <span>Upcoming</span>
                    </Link>
                </li>
                

            </ul>
        </div>
    );
}
