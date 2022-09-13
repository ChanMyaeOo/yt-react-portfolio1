import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xzv6czw",
                "template_sxqrjch",
                form.current,
                "FooVXWXtLK3DdVFWl"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5 className="email-text">
                            chanmyaeoo1221gg@gmail.com
                        </h5>
                        <a
                            href="mailto:chanmyaeoo1221gg@gmail.com"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Chan Myae Oo</h5>
                        <a href="https://m.me/chanmyaeoo" target="_blank">
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+959976742687</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=+95997674287"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button className="btn btn-primary" type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
