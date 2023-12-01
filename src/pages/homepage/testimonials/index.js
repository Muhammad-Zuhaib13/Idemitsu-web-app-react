import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./style.css";
import Img from "../../../images/mike-taylor.png";
import TesimonialsData from "./testimonials.json";
import { useTheme, useMediaQuery } from "@mui/material";

const TestimonialSlider = () => {
  const [prevBtn, setPrevBtn] =useState(null);
  const buttonPressed = (e) => {
    const button = e.target.closest('.slider-btn-container div');
    if (button) {
      button.classList.add('ts_btn-active');
      if (prevBtn !== null && prevBtn !== button) {
        prevBtn.classList.remove('ts_btn-active');
      }
      setPrevBtn(button);
    }
  };
  const slides=TesimonialsData;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div className="testimonials-section">
        <div className="ts_headings">
          <div className="testimonials-heading-text">
            <h3>testimonials</h3>
            <h2>What people say about Us.</h2>
          </div>
        </div>
        <div className="testimonials-slider-container">
          <Swiper
            id="testimonials"
            className="swiper-container"
            modules={[Navigation, A11y]}
            spaceBetween={1}
            slidesPerView={2}
            loop={true}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            direction={"vertical"}
            centeredSlides={true}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
          >
            <div className="swiper-wrapper">
              {slides.map((item, index) => {
                const { id, comment, author_name, position } = item;
                return (
                  <SwiperSlide className="swiper-slide" key={id} virtualIndex={index}>
                    <div className="card" >
                      <div className="card-img">
                        <img src={Img} alt="" />
                      </div>
                      <div className="card-body">
                        <blockquote className="card-text">
                          "{comment}"
                        </blockquote>
                        <div className="card-name">
                          <h4>{author_name}</h4>
                          <p>{position}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

          {isMatch ? (
            <div className="slider-btn-container" onClick={buttonPressed}>
              <div className="btn-prev">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="btn-next">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          ) : (
            <div className="slider-btn-container" onClick={buttonPressed}>
              <div className="btn-prev">
                <i className="fa-solid fa-chevron-right fa-rotate-270"></i>
              </div>
              <div className="btn-next">
                <i className="fa-solid fa-chevron-right fa-rotate-90"></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
