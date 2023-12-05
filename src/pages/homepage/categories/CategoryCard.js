import "./style.css";
import React from "react";
import { Grid } from "@mui/material";

const CategoryCard = (props) => {
  const { title, desc, src } = props;
  return (
    <>
      <Grid>
        <div className="vehicle-card-content">
          <div className="vehicle-card">
            <div className="vehicle-card-img">
              <img src={src} alt="vehicleImg" />
            </div>
            <div className="vehicle-card-text">
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default CategoryCard;
