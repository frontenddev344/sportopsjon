import React from "react";
import './App.css';
import Cardhome from "./Cardhome";

function Homecart() {
    return (
        <>
            <section className="homeCart">
                <div className="container">
                    <h1>Sportolási lehetőség</h1>
                    <p>A Sportopsjon.com-nál büszkék vagyunk arra, hogy Norwat egyik legjobb sportolási e-kereskedelmi oldala vagyunk.
                        Egyedülálló és speciális szolgáltatást kínálunk. A legjobb sportruházatot használjuk, értékeljük és kritizáljuk számos
                        sportboltból Norvégiában. Professzionális csapatunk bölcsen használja fel idejét az Ön számára a legjobb minőségű
                        sport e-kereskedelmi márkák a legjobb áron.</p>
                    <p>Fittségtől vagy erőképességtől függetlenül a sportopsjon.com csapata választott minőségi felszerelés
                        mindenkinek. Fedezze fel edző- és sportfelszereléseink
                        széles választékát. Hadd segítsünk hogy még ma elérje erőnléti és kondicionáló céljait!</p>
                    <div className="cardWrapper">
                        <h2>LEGÚJABB ÉRKEZŐK</h2>
                        <div className="cartinnersetup">
                            <Cardhome imgsrc="img/img1.jpg" content="Speed ​​​​Bag Kit box labda " link="" />
                            <Cardhome imgsrc="img/img2.jpg" content="Lexco tányér 15kg" link="" />
                            <Cardhome imgsrc="img/img3.jpg" content="Pivot XF Olympic Curl Bar" link="" />
                            <Cardhome imgsrc="img/img1.jpg" content="Abilica WallBall, 5kg" link="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Homecart;