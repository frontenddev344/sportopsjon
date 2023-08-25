import React from "react";
import './App.css';


function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="inner-header">
                        <div className="logo">
                            <img src='img/logooo.png' alt="logo-img" />
                        </div>
                        <div className="navigation-head">
                            <ul>
                                <li>
                                    ITTHON
                                </li>
                                <li>
                                    MÉRLEG
                                </li>
                                <li>
                                    FITNESS
                                </li>
                                <li>
                                    TOP ELADÓK
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;


