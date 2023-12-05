import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderImg from "../../../images/sliderimg.png";
import SliderImg1 from "../../../images/sliderimg1.jpg";
import { Grid } from "@mui/material";
import "./style.css";
const Slider = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          className="home-banner-slider"
        >
          <SwiperSlide>
            <div className="home-banner-slider-img">
              <img src={SliderImg} alt="SliderImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-banner-slider-img">
              <img src={SliderImg1} alt="SliderImg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default Slider;
