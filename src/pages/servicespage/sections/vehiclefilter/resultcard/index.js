import React from "react";
import "./style.css";
const ServicesResultCard = ({ vehicleOil, vehicleModif, Img }) => {
  return (
    <>
      <div className="services-search-result-oil">
        {vehicleOil.map((item, index) => {
          return (
            <div className="services-product-search-container" key={index}>
              <div className="services-search-heading">
                <h2>Search Result for {vehicleModif}</h2>
              </div>
              <div className="services-search-card">
                <div className="services-search-card-img">
                  <img src={Img} alt="" />
                </div>
                <div className="services-search-card-text">
                  <h3><span>{item.oil_category}</span></h3>
                  <h3>{item.product_title}</h3>
                  <p>{item.product_des}</p>
                  <h4>
                    <i className="fa fa-tint" aria-hidden="true"></i>
                    {item.fluid_capacity}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesResultCard;
