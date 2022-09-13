import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/client1.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        avatar: AVTR1,
        name: "Johnny Walker",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit provident non culpa. Officia vero modi rem sed.",
    },
    {
        avatar: AVTR1,
        name: "Johnny Walker",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit provident non culpa. Officia vero modi rem sed.",
    },
    {
        avatar: AVTR1,
        name: "Johnny Walker",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit provident non culpa. Officia vero modi rem sed.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {data.map(({ avatar, name, review }, index) => (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client__avatar">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
