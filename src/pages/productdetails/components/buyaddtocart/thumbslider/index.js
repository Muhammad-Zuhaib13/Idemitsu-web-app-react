import React, { useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Img from "../../../../../images/oil-bottle-img.png";

const ProductImgsThumbSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="product-imgs-thumb-slider">
        <div className="pits-single-slider">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop={true}
            speed={1050}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="pits-single-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pits-single-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pits-single-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pits-single-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="pits-thumbs-slider">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            speed={1050}
            watchSlidesProgress={true}
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="pits-thumb-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pits-thumb-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pits-thumb-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="pits-thumb-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductImgsThumbSlider;
