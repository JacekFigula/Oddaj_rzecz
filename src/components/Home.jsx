import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Header from "./Header.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";

function Home() {

    return (<>
<Header/>
        <HomeThreeColumns/>
        <Link to="/oddaj-rzeczy">Idź do oddaj rzeczy</Link>
        <Link to="/logowanie">Logowanie</Link>
        <Link to="/rejestracja">Zarejestruj się </Link>
        <Link to="/wylogowano">Wyloguj się</Link>

    </>)

}

export default Home