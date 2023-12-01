import "./style.css";
import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  ThemeColors,
  ThemeFontsFamily,
  ThemeFontWeight,
  FontSize,
} from "../../../../utils/Theme";
import Lines from "../../../../images/lines3.png";
import ContactusCarImg from "../../../../images/contact-page-car-img.png";
import ContactusTruckImg from "../../../../images/contact-page-truck-img.png";
import ContactusBikeImg from "../../../../images/contact-page-bike-img.png";

const ServicesHero = () => {
  return (
    <div className="services-back" style={{ backgroundImage: `url(${Lines})` }}>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
          <div className="services-banner">
            <div className="services-banner-content">
              <div className="services-banner-heading-group">
                <Typography
                  color={ThemeColors.MainHeadings}
                  sx={{
                    fontFamily: ThemeFontsFamily.Volkhov,
                    fontWeight: ThemeFontWeight.Bold,
                    fontSize: FontSize.Headings,
                    letterSpacing: "1.5px",
                  }}
                  variant="h2"
                >
                  Lorem Ipsum Dolor
                </Typography>

                <Typography
                  color={ThemeColors.BlackHeading}
                  sx={{
                    fontFamily: ThemeFontsFamily.Volkhov,
                    fontWeight: ThemeFontWeight.Bold,
                    fontSize: FontSize.Headings,
                    letterSpacing: "1.5px",
                  }}
                  variant="h2"
                >
                  consectetur adipiscing elit.
                </Typography>
                <Typography
                  color={ThemeColors.MainHeadings}
                  sx={{
                    fontFamily: ThemeFontsFamily.Volkhov,
                    fontWeight: ThemeFontWeight.Bold,
                    fontSize: FontSize.Headings,
                    letterSpacing: "1.5px",
                  }}
                  variant="h1"
                >
                  sed do eiusmod
                </Typography>
              </div>
              <div className="services-banner-para-text">
                <Typography
                  color={ThemeColors.LightGrey}
                  sx={{
                    fontFamily: ThemeFontsFamily.Poppins,
                    fontWeight: ThemeFontWeight.Medium,
                    fontSize: FontSize.xlarge,
                    letterSpacing: "1.5px",
                  }}
                  variant="p"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut lab.
                </Typography>
              </div>
              <div className="services-vehicle-img-group">
                <div className="services-vehicle-img-card">
                  <div
                    className="services-vehicle-img"
                    style={{ backgroundImage: `url(${ContactusCarImg})` }}
                  >
                    <p className="services-vehicle-img-tag">Car</p>
                  </div>
                </div>
                <div className="services-vehicle-img-card">
                  <div
                    className="services-vehicle-img"
                    style={{ backgroundImage: `url(${ContactusTruckImg})` }}
                  >
                    <p className="services-vehicle-img-tag">Truck</p>
                  </div>
                </div>
                <div className="services-vehicle-img-card">
                  <div
                    className="services-vehicle-img"
                    style={{ backgroundImage: `url(${ContactusBikeImg})` }}
                  >
                    <p className="services-vehicle-img-tag">Bike</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesHero;
