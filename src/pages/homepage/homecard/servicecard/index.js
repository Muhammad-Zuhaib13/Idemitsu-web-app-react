import React from "react";
import "./style.css";

const HomeServiceCard = (props) => {
    const {imgSrc, heading, para}=props;
    
  return (
    <>
      <div className="home-service-card">
        <div className="hs_card-body">
          <div className="hs_card-img">
            <img src={imgSrc} alt="" />
          </div>
          <div className="hs_card-heading">
            <h4>{heading}</h4>
          </div>
          <div className="hs_card-text">
            <p>{para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServiceCard;
