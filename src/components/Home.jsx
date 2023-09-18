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
import Hero from "./Hero.jsx";
import Foundations from "./Foundations.jsx";


function Home() {
    const user = useUser();
    console.log(user)
    return (<>
        <Header/>
        <Hero/>
        <HomeThreeColumns/>
<Foundations/>

    </>)

}

export default Home