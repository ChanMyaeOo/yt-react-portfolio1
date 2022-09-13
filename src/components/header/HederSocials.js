import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HederSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com" target="_blank">
                <BsGithub />
            </a>
            <a href="https://github.com" target="_blank">
                <BsDribbble />
            </a>
        </div>
    );
};

export default HederSocials;
