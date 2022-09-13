import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "JJ UK Accountancy Website",
        github: "https://www.google.com",
        demo: "https://www.google.com",
    },
    {
        id: 2,
        image: IMG1,
        title: "JJ UK Accountancy Website",
        github: "https://www.google.com",
        demo: "https://www.google.com",
    },
    {
        id: 3,
        image: IMG1,
        title: "JJ UK Accountancy Website",
        github: "https://www.google.com",
        demo: "https://www.google.com",
    },
    {
        id: 4,
        image: IMG1,
        title: "JJ UK Accountancy Website",
        github: "https://www.google.com",
        demo: "https://www.google.com",
    },
    {
        id: 5,
        image: IMG1,
        title: "JJ UK Accountancy Website",
        github: "https://www.google.com",
        demo: "https://www.google.com",
    },
    {
        id: 6,
        image: IMG1,
        title: "JJ UK Accountancy Website",
        github: "https://www.google.com",
        demo: "https://www.google.com",
    },
];

const Portfolio = () => {
    return (
        <section>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, title, image, github, demo }) => (
                    <article className="portfolio__item" key={id}>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className="btn" target="_blank">
                                Github
                            </a>
                            <a
                                href={demo}
                                className="btn btn-primary"
                                target="_blank"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
