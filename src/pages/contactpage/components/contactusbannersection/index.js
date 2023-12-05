import { Grid, Typography } from "@mui/material";
import "./style.css";
import React from "react";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";
import ContactCard from "../contactcard/ContactCard";

const ContactUsBanner = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="contact-us-banner-section">
          <div className="side-contact-banner-section">
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontFamily: ThemeFontsFamily.Volkhov,
                fontSize: FontSize.desc,
                fontWeight: ThemeFontWeight.Bold,
                color: ThemeColors.White,
                overflow: "hidden",
              }}
            >
              Contact Us
            </Typography>
            <div className="contact-us-details">
              <ContactCard
                fontawesomeicon="fa-sharp fa-solid fa-phone"
                title="Contact Us On"
                text="911-987654321"
              />
              <ContactCard
                fontawesomeicon="fa-solid fa-envelope"
                title="Email Us On"
                text="info@idemistu.pk"
              />
              <ContactCard
                fontawesomeicon="fa-solid fa-location-dot"
                title="Main Office"
                text="Emerald Tower, 11th Floor, Office #1103,Block 
            5 Clifton, Karachi, Karachi City, Sindh 74000"
              />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactUsBanner;
