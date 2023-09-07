import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Header from "./Header.jsx";

function Login() {

    return (<>
        <Header/>
        <h1>LOGOWANIE</h1>
        <Link to="/">Home</Link>

    </>)

}

export default Login