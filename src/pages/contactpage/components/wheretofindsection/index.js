import { Grid, Typography } from "@mui/material";
import React from "react";
import Iframe from "react-iframe";
import "./style.css";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";
const WhereToFind = () => {
  return (
    <Grid container>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <div className="where-to-find-section">
        <div className="where-to-find">
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.xxxlarge,
              fontWeight: ThemeFontWeight.SemiBold,
              color: ThemeColors.ContactUsHeadingColor,
              marginLeft: "40px",
              marginBottom: "10px",
              marginTop: "20px",
              height:"auto"
            }}
            className="heading-h4"
          >
            WHERE TO FIND
          </Typography>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontFamily: ThemeFontsFamily.Volkhov,
              fontSize: FontSize.desc,
              fontWeight: ThemeFontWeight.Bold,
              color: ThemeColors.MainHeadings,
              marginLeft: "40px",
              marginBottom: "8px",
              height:"auto"
            }}
            className="heading-h2"
          >
            IDEMITSU OIL
          </Typography>
          <div className="search-map-section">
            <input
              type="text"
              className="input-search-map-section"
              placeholder="Search"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
            <button className="search-now-btn">Search Now</button>
          </div>
          <div className="google-map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <Iframe
                  id="gmap_canvas"
                  url="https://maps.google.com/maps?q=Karachi&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default WhereToFind;
