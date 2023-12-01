import React from "react";
import { Grid, Typography } from "@mui/material";
import "./style.css";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../../utils/Theme";
import ProductImg from "../../../../../images/product-img-04.jpg";
import ContactCard from "../../contactcard/ContactCard";
const SalesInformation = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="sale-info-card">
          <Typography
            variant="h2"
            component="div"
            className="red-border-img"
            sx={{
                fontFamily: ThemeFontsFamily.Volkhov,
                fontSize: FontSize.Title,
                fontWeight: ThemeFontWeight.Bold,
                color: ThemeColors.BlackHeading,
                position: "relative",
                overflow:"initial"
              }}
          >
            SALES INFORMATION
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.large,
              fontWeight: ThemeFontWeight.Regular,
              color: ThemeColors.ParagraphColor,
              margin: "50px 0",
              overflow:"initial"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, Donec vel egestas dolor, nec dignissim metus. Donec
            augue elit, rhoncus ac sodale
          </Typography>
          <div className="products-imgs-group">
            <div className="product-img">
              <img src={ProductImg} alt="" />
            </div>
            <div className="product-img">
              <img src={ProductImg} alt="" />
            </div>
            <div className="product-img">
              <img src={ProductImg} alt="" />
            </div>
          </div>
          <div className="contactus-info-group-bg">
            <ContactCard />
            <ContactCard
              fontawesomeicon="fa-solid fa-envelope"
              title="Email Us"
              text="info@idemistu.pk"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SalesInformation;
