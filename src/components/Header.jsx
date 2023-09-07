import {Link} from "react-router-dom";

function Header() {

    return (<>
        <section className="header__wrapper">
        <div className="header__topWrapper">
            <Link to="/logowanie">Zaloguj</Link>
            <Link to="/rejestracja">Załóż konto</Link>
            <Link to="/wylogowano">Wyloguj</Link>
        </div>
        <div className="header__btmWrapper">
            <Link to="/">Start</Link>
            <Link>O co chodzi?</Link>
            <Link>O nas</Link>
            <Link>Fundacja i organizacje</Link>
            <Link>Kontakt</Link>
        </div>
        </section>
    </>)

}

export default Header