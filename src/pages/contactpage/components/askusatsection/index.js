import React from "react";
import "./style.css";
import { Grid, Typography } from "@mui/material";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";

const AskUsAt = () => {
  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="ask-us-at-section">
          <div className="headings">
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: ThemeFontsFamily.Poppins,
                fontSize: FontSize.xxxlarge,
                fontWeight: ThemeFontWeight.SemiBold,
                color: ThemeColors.White,
                lineHeight: "36px",
                marginLeft: "30px",
                marginTop: "50px",
              }}
            >
              ASK US AT
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{
                fontFamily: ThemeFontsFamily.Volkhov,
                fontSize: FontSize.desc,
                fontWeight: ThemeFontWeight.Bold,
                color: ThemeColors.MainHeadings,
                lineHeight: "64.5px",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              IDEMITSU OIL
            </Typography>
          </div>
          <form action="">
            <div className="ask-form-section">
              <div className="ask-us-at-form-left-section">
                <textarea placeholder="Your Message"></textarea>
                <button className="form-submit-btn">Submit</button>
              </div>
              <div className="ask-us-at-form-right-section">
                <input type="text" placeholder="Enter Name" />
                <span className="border-bottom-img"></span>
                <input type="text" placeholder="Enter Email" />
                <span className="border-bottom-img"></span>
                <input type="text" placeholder="Enter Phone Number" />
                <span className="border-bottom-img"></span>
                <input type="text" placeholder="What Service You Want" />
                <span className="border-bottom-img"></span>
              </div>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default AskUsAt;
