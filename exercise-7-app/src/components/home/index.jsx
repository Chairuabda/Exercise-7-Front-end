import { Link } from "react-router-dom";

export default function home() {

    return (
        <div>
            <ul>
                <Link to="/counter">
                    <p>Counter</p>
                </Link>
                <Link to="/stopwatch">
                    <p>Stopwatch</p>
                </Link>
                <Link to="/filter">
                    <p>filter</p>
                </Link>
                <Link to="/chatbox">
                    <p>chatbox</p>
                </Link>
            </ul>
        </div>
    )
}