import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Joh Snow
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experienct">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="#">
                    <FiFacebook />
                </a>
                <a href="#">
                    <AiOutlineInstagram />
                </a>
                <a href="#">
                    <FiTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy;2022 Jon Snow. All right reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
