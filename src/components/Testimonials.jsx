import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaLayerGroup, FaCubes, FaBook, FaCapsules } from "react-icons/fa"; 
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "./../styles/Testimonials.css";

const testimonials = [
  {
    company: "Layers",
    icon: <FaLayerGroup />,
    quote: "GCC Cars has saved us thousands of hours of work. We’re able to spin up projects faster.",
    link: "#",
    color: "#0d5c63",
  },
  {
    company: "Sisyphus",
    icon: <FaCubes />,
    quote: "We’ve been using GCC Cars to kick start every new project and can’t work without it.",
    link: "#",
    color: "#0c8a4b",
  },
  {
    company: "Catalog",
    icon: <FaBook />,
    quote: "GCC Cars has saved us thousands of hours of work. We’re able to spin up projects faster.",
    link: "#",
    color: "#3854e0",
  },
  {
    company: "Capsule",
    icon: <FaCapsules />,
    quote: "Love the simplicity of the service and the prompt customer support.",
    link: "#",
    color: "#5a1f75",
  },
  {
    company: "Layers",
    icon: <FaLayerGroup />,
    quote: "GCC Cars has saved us thousands of hours of work. We’re able to spin up projects faster.",
    link: "#",
    color: "#0d5c63",
  },
  {
    company: "Sisyphus",
    icon: <FaCubes />,
    quote: "We’ve been using GCC Cars to kick start every new project and can’t work without it.",
    link: "#",
    color: "#0c8a4b",
  },
  {
    company: "Catalog",
    icon: <FaBook />,
    quote: "GCC Cars has saved us thousands of hours of work. We’re able to spin up projects faster.",
    link: "#",
    color: "#3854e0",
  },
  
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <div className="header-text">
          <h2>We’ve helped hundreds of global companies</h2>
          <p>Case studies from some of our amazing customers who are building faster.</p>
        </div>
        <div className="header-buttons">
          <button className="outline-btn">Our customers</button>
          <button className="solid-btn">Create account</button>
        </div>
      </div>

<Swiper
  modules={[Navigation]}
 navigation={{
  nextEl: ".custom-prev",  
  prevEl: ".custom-next", 
}}

  spaceBetween={0}
  slidesPerView="auto" 
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  }}
>
  {testimonials.map((item, index) => (
    <SwiperSlide key={index}>
      <div
        className="testimonial-card"
        style={{ backgroundColor: item.color }}
      >
        
        <div className="card-logo">
          <span className="icon">{item.icon}</span>
          <h3>{item.company}</h3>
        </div>

       
        <div className="card-inner">
          <h4>{item.company}</h4>
          <p>"{item.quote}"</p>
          <a href={item.link} className="read-link">
            Read case study <ArrowUpRight className="link-arrow" />                      </a>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="arrows">
  <button className="custom-prev">←</button> 
  <button className="custom-next">→
    </button> 
</div>



    </section>
  );
}

export default Testimonials;
