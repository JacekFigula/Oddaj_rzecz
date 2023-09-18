import MyDecoration from "./MyDecoration.jsx";
import {Link} from "react-router-dom";

function Hero() {

    return (
        <section className="hero__wrapper">
        <div className="hero__bg">
            {/*<img className="hero__bgimage" src="src/assets/Home-Hero-Image.jpg" alt="items to giveaway"/>*/}
        </div>
        <div className="hero__opening">
            <h1 className="hero__hdl">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
            <MyDecoration></MyDecoration>
            <div className="hero__btns">
                <Link to="/oddaj-rzeczy" className="hero__btn btn">ODDAJ <br/> RZECZY</Link>
                <Link to="/oddaj-rzeczy" className="hero__btn btn">ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
            </div>
        </div>
    </section>)

}

export default Hero