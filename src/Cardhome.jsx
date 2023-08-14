import React from "react";


function Cardhome(props) {
    return (
        <>
            <div className="cartwrapper">
                <div className="imgbar">
                    <img src={props.imgsrc} alt="" className="" />
                </div>
                <div className="contentbar">
                    <p>{props.content}</p>
                    <a href="">Továbbiak</a>
                </div>
            </div>
        </>
    );
}
export default Cardhome;



