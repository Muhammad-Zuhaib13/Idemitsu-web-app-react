import React, {useState} from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Data from "./data/card_data.json";
import MainCard from "../../../../components/productcard";
import Image from "./data/images_data";
const SimilarProducts = () => {
  const cardData = Data;
  const [prevBtn, setPrevBtn] = useState(null);
  const buttonPressed = (e) => {
    const button = e.target.closest(".similar-pds-btn-container div");
    if (button) {
      button.classList.add("spds_btn-active");
      if (prevBtn !== null && prevBtn !== button) {
        prevBtn.classList.remove("spds_btn-active");
      }
      setPrevBtn(button);
    }
  };
  return (
    <>
      <div className="product-details-slider-section-three">
        <div className="pds-heading">
          <h4>idemitsu</h4>
          <h2>similar items</h2>
        </div>
        <div className="similar-pds-slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            modules={[Navigation, A11y]}
            loop={false}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            speed={1000}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              {cardData.map((item, index) => {
                const { id, title, description, current_price, prev_price } =
                  item;
                return (
                  <SwiperSlide
                    className="swiper-slide"
                    key={id}
                    virtualIndex={index}
                  >
                    <MainCard
                      title={title}
                      src={Image[index]}
                      description={description}
                      current_price={current_price}
                      prev_price={prev_price}
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="similar-pds-btn-container" onClick={buttonPressed}>
              <div className="btn-prev">
                <i className="fa-solid fa-arrow-left-long"></i>
              </div>
              <div className="btn-next">
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SimilarProducts;
