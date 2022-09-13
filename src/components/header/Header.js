import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/me.png";
import HederSocials from "./HederSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jon Snow</h1>
                <h5>Fullstack Developer</h5>
                <CTA />

                <HederSocials />

                <div className="me">
                    <img src={Me} alt="me" className="profile" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
