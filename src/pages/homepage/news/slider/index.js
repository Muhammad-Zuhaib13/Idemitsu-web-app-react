import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import { ImageMainSlider, ImagesThumbSlider } from "./images";
import Img1 from "../../../../images/card-ul-img-1.png";
import Img2 from "../../../../images/card-img-slider-1.png";
import "./style.css";

// import required modules
import { Thumbs } from "swiper";
import { FreeMode } from "swiper";
import { Navigation } from "swiper";
import NewsJson from "./news_updates.json";
const NewsSlider = () => {
  const newsUpdatesData = NewsJson;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="main-slider-container">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          direction={"vertical"}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={false}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            nextEl: ".fa-arrow-right",
            prevEl: ".fa-arrow-left",
          }}
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 8 },
            992: { slidesPerView: 5, spaceBetween: 8 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 5 },
            480: { slidesPerView: 1, spaceBetween: 5 },
            320: { slidesPerView: 1, spaceBetween: 5 },
          }}
          className="swiper news-updates-slider-left-div"
          id="leftSlider"
        >
          <div className="swiper-wrapper">
            {newsUpdatesData.map((item) => {
              const { id, title, description } = item;
              return (
                <SwiperSlide
                  key={id}
                  virtualIndex={id}
                  className="swiper-slide"
                >
                  <div className="news-updates-left-card">
                    <div className="card-img">
                      <img src={Img1} alt="" />
                    </div>
                    <div className="card-text-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    <div className="card-button">
                      <button>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          {/* <div className="buttons-container">
            <div className="next-btn">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="prev-btn">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div> */}
        </Swiper>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            nextEl: ".fa-arrow-right",
            prevEl: ".fa-arrow-left",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="swiper news-updates-slider-right-div"
          id="rightSlider"
        >
          <div className="swiper-wrapper">
            {newsUpdatesData.map((item, index) => {
              const {
                id,
                title,
                description,
                details_para_one,
                details_para_two,
              } = item;
              return (
                <SwiperSlide className="swiper-slide" key={id}>
                  <div className="right-card-body">
                    <h3 className="right-card-heading">{title}</h3>
                    <p className="right-card-para-1">{description}</p>
                    <p className="right-card-para-2">{details_para_one}</p>
                    <div className="right-card-img">
                      <img src={Img2} alt="" />
                    </div>
                    <p className="right-card-para-3">{details_para_two}</p>
                  </div>
                  <div className="slide-page-number">
                    <h4>{item.id}</h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          <div className="right-sliderbtn-container">
            <button id="nextButton" className="next-btn">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button id="prevButton" className="prev-btn">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default NewsSlider;
