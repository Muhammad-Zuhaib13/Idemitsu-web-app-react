import React from "react";
import HomeServiceCard from "./servicecard";
import Img1 from "../../../images/service-free-shipping.png";
import Img2 from "../../../images/service-organic.png";
import Img3 from "../../../images/service-environment.png";
import Img4 from "../../../images/service-no-side-effect.png";
import { Grid } from "@mui/material";
import Heading from "../../../components/headings/Heading";
import "./style.css";
const Card = () => {
  const homeServicesCards = [
    {
      src: Img1,
      heading: "Free Delivery",
      text: "The chairs have a knitted backrest that conforms.",
    },
    {
      src: Img2,
      heading: "100% Organic",
      text: "Never at water me might.On formed merits hunted.",
    },
    {
      src: Img3,
      heading: "Natural Ingredients",
      text: "Much like that of Nike’s Flynit technology.",
    },
    {
      src: Img4,
      heading: "No Side Effect",
      text: "Compliment Interested Discretion estimating.",
    },
  ];

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="home-services-card-heading">
          <div className="item-div">
            <Heading title="CATEGORY" desc="We Offer Best Services" />
          </div>
        </div>
        <div className="home-services-card-container">
          {homeServicesCards.map((item, index) => {
            const { src, heading, text } = item;
            return (
              <div key={index}>
                <HomeServiceCard imgSrc={src} heading={heading} para={text} />
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Card;
