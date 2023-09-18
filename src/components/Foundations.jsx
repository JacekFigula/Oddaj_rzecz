import {Link, useNavigate} from "react-router-dom";
import MyDecoration from "./MyDecoration.jsx";

function Foundations() {

    return (<>
            <section className="in_work found__wrapper">
                <h1 className="hero__hdl">Komu pomagamy?</h1>
                <MyDecoration/>
                <div className="found__btns">
                    <p className="found__btn btn">Fundacjom</p>
                    <p className="found__btn btn">Organizacjom pozarządowym</p>
                    <p className="found__btn btn">Lokalnym zbiórkom</p>
                </div>
                <div className="found__options">
                    <h2 className="found__desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                    <div className="found__foundations">
                        <div className="found__foundation">
                            <div className="found__properties">
                                <h3 className="found__name">Fundacja Dzieciom</h3>
                                <p className="found__mission">Cel i misja: Pomoc dla potrzebujących dzieci</p>
                            </div>
                            <p className="found__items">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                        <div className="found__foundations">
                            <div className="found__foundation">
                                <div className="found__properties">
                                    <h3 className="found__name">Fundacja Dzieciom</h3>
                                    <p className="found__mission">Cel i misja: Pomoc dla potrzebujących dzieci</p>
                                </div>
                                <p className="found__items">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Foundations

const foundations = {
    "fundacje":
        [
            {
                "title": "Fundacja Dzieciom",
                "subtitle": "Pomoc dla potrzebujących dzieci",
                "desc": "Nasza fundacja działa na rzecz wsparcia dzieci w trudnej sytuacji życiowej. Organizujemy zbiórki, eventy i warsztaty dla najmłodszych."
            },
            {
                "title": "Fundacja Bezdomnym",
                "subtitle": "Wsparcie dla osób bezdomnych",
                "desc": "Dążymy do tego, aby każda osoba bezdomna znalazła schronienie i wsparcie, które pozwoli jej wrócić do normalnego życia."
            }
        ],
    "organizacje":
        [
            {
                "title": "Organizacja Przyroda",
                "subtitle": "Ochrona środowiska naturalnego",
                "desc": "Zajmujemy się ochroną przyrody i edukacją ekologiczną. Pomagamy w utrzymaniu równowagi ekosystemów lokalnych."
            },
            {
                "title": "Organizacja Edukacja",
                "subtitle": "Wsparcie edukacyjne dla młodzieży",
                "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
            }
        ],
    "lokalne":
        [
            {
                "title": "Lokalna Inicjatywa Parkowa",
                "subtitle": "Zadbajmy o nasze zielone miejsca",
                "desc": "Działamy na rzecz zachowania i rozbudowy miejsc zielonych w naszym mieście. Organizujemy akcje sadzenia drzew i dbania o parki."
            },
            {
                "title": "Lokalne Centrum Kultury",
                "subtitle": "Szerzenie kultury w naszym regionie",
                "desc": "Promujemy lokalnych artystów i organizujemy wydarzenia kulturalne dla mieszkańców naszego miasta."
            }
        ]
}