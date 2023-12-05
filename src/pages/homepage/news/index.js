import React from "react";
// import NewsSlider from "./slider";
import { Grid } from "@mui/material";
import "./style.css";
import NewsSlider from "./slider";

const NewsUpdates = () => {
  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} sm={12} xs={12}>
          <div className="news-updates-heading">
            <h2>news & updates</h2>
          </div>
        </Grid>
        <Grid item xl={12} lg={12} sm={12} xs={12}>
          <div className="home-page-news-slider">
            <NewsSlider />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default NewsUpdates;
