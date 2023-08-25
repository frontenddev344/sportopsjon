import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-main">
                        <div className="logo">
                            <img src='img/wt-logo.png' alt="logo-img" />
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
                        <div className="social-icon">
                            <p>Társadalmi jelek:</p>
                            <ul>
                                <li>
                                    <a href="">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
export default Footer;