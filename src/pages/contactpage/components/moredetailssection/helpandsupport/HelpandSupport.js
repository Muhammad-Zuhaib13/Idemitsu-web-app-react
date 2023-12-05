import React from 'react'
import { Grid, Typography} from "@mui/material";
import "./style.css";
import {
    ThemeColors,
    ThemeFontWeight,
    ThemeFontsFamily,
    FontSize,
  } from "../../../../../utils/Theme";
import ContactCard from "../../contactcard/ContactCard";
import ContactusCarImg from "../../../../../images/contact-page-car-img.png";
import ContactusTruckImg from "../../../../../images/contact-page-truck-img.png";
import ContactusBikeImg from "../../../../../images/contact-page-bike-img.png";
const HelpandSupport = () => {
  return (
    <Grid container >
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <div className="help-and-support-card">
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
          HELP & SUPPORT
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
        <div className="contactus-info-group">
          <ContactCard />
          <ContactCard
            fontawesomeicon="fa-solid fa-envelope"
            title="Email Us"
            text="info@idemistu.pk"
          />
        </div>
        <div className="vehicle-img-group">
          <div
            className="vehicle-img"
            style={{ backgroundImage: `url(${ContactusCarImg})` }}
          >
            <p className="vehicle-img-tag">Car</p>
          </div>
          <div
            className="vehicle-img"
            style={{ backgroundImage: `url(${ContactusTruckImg})` }}
          >
            <p className="vehicle-img-tag">Truck</p>
          </div>
          <div
            className="vehicle-img"
            style={{ backgroundImage: `url(${ContactusBikeImg})` }}
          >
            <p className="vehicle-img-tag">Bike</p>
          </div>
        </div>
      </div>
    </Grid>
</Grid>
  )
}

export default HelpandSupport
