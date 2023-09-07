import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import '../scss/main.scss'
import '../scss/settings/_colors.scss';
import MyDecoration from "./MyDecoration.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
function Logout() {

    return (<>
        <Header/>
        <section className="logout__wrapper">
        <h1 style={{textAlign: "center"}}>Wylogowanie nastąpiło <br/> pomyślnie!</h1>
        <MyDecoration/>
        <Link to="/">Strona główna</Link>

    </section>
    </>)

}

export default Logout