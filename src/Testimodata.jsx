import React from "react";
import Testimonial from "./Testimonial";

function Testimodata() {
    return (
        <>
            <section className="textimonialWrapper">
                <div className="container">
                    <div className="tety-wrpper">
                        <Testimonial data="Erről a webhelyről vásároltam fitnesz felszerelést. Kiválónak találtam a szolgáltatást. A szállítás hűséges volt a weboldal szavával szemben." />
                        <Testimonial data="Jó szolgáltatás. Kiváló minőségű berendezés." />
                        <Testimonial data="Kiváló minőségű, megismételhető szolgáltatás. Könnyen navigálható az oldalon és gyors tranzakciós módszerek.Olyan szolgáltatás, amelyet határozottan ajánlottam munkatársaimnak és barátaimnak." />
                    </div>

                </div>
            </section>
        </>
    );
}
export default Testimodata;

