import {Link, useNavigate} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
import {auth} from "../firebase.jsx";

function Header() {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        console.log("handleLogout initialized")
        signOut(auth).then(() => {
            navigate("/wylogowano");
        }).catch((error) => {
            // An error happened.
        });
    }
    return (<>
        <section className="header__wrapper">
        <div className="header__topWrapper">
            <Link className="btn" to="/logowanie">Zaloguj</Link>
            <Link className="btn" to="/rejestracja">Załóż konto</Link>
            <Link onClick={handleLogout}  className="btn" to="/wylogowano">Wyloguj się</Link>
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