import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Img1 from "../../../../images/card-ul-img-1.png";
import Img2 from "../../../../images/card-img-slider-1.png";
import "./style.css";
import { Thumbs } from "swiper";
import { FreeMode } from "swiper";
import { Navigation } from "swiper";
import NewsJson from "./news_updates.json";

const NewsSliderEx = () => {
  const newsUpdatesData = NewsJson;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="main-slider-container">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        direction={"vertical"}
        slidesPerView={5}
        freeMode={false}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        watchOverflow={true}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: ".fa-arrow-right",
          prevEl: ".fa-arrow-left",
        }}
        className="swiper news-updates-slider-left-div"
        id="leftSlider"
      >
        {newsUpdatesData.map((item) => (
          <SwiperSlide key={item.id} virtualIndex={item.id} className="swiper-slide">
            <div className="news-updates-left-card">
              <div className="card-img">
                <img src={Img1} alt="" />
              </div>
              <div className="card-text-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="card-button">
                <button>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".fa-arrow-right",
          prevEl: ".fa-arrow-left",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper news-updates-slider-right-div"
        id="rightSlider"
      >
        {newsUpdatesData.map((item) => (
          <SwiperSlide className="swiper-slide" key={item.id}>
            <div className="right-card-body">
              <h3 className="right-card-heading">{item.title}</h3>
              <p className="right-card-para-1">{item.description}</p>
              <p className="right-card-para-2">{item.details_para_one}</p>
              <div className="right-card-img">
                <img src={Img2} alt="" />
              </div>
              <p className="right-card-para-3">{item.details_para_two}</p>
            </div>
            <div className="slide-page-number">
              <h4>{item.id}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSliderEx;
