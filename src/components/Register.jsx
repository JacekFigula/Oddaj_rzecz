import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Header from "./Header.jsx";

function Register() {

    return (<>
        <Header/>
        <h1>REJESTRACJA</h1>

        <Link to="/">Go to Home</Link>
    </>)

}

export default Register