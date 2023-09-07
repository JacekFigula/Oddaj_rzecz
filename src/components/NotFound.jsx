import {Link} from "react-router-dom";
import Header from "./Header.jsx";

function NotFound() {

    return (<>
        <Header/>
        <h1>404,Nothing is here</h1>
        <Link to="/">Go to Home</Link>

    </>)

}

export default NotFound