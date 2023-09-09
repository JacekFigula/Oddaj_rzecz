import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet, useNavigate
} from 'react-router-dom';
import Header from "./Header.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import {useUser} from "../providers/UserProvider.jsx";
import { getAuth, signOut } from "firebase/auth";
import {app} from "../firebase.jsx";

function Home() {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        console.log("handleLogout initialized")
        const auth = getAuth(app);
        signOut(auth).then(() => {
            navigate("/logowanie");
        }).catch((error) => {
            // An error happened.
        });
    }
    const user = useUser();
    console.log(user)
    return (<>
        <Header/>
        <HomeThreeColumns/>
        <Link className="btn" to="/oddaj-rzeczy">Idź do oddaj rzeczy</Link>
        <Link to="/logowanie">Logowanie</Link>
        <Link to="/rejestracja">Zarejestruj się </Link>
        <Link onClick={handleLogout} to="/wylogowano">Wyloguj się</Link>

    </>)

}

export default Home