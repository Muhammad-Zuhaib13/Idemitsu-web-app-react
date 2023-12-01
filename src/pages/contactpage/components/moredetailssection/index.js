import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";
import HelpandSupport from "./helpandsupport/HelpandSupport";
import SalesInformation from "./salesinfromation/SalesInformation";
import "./style.css";
const MoreDetails = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12}>
        <div className="heading">
          <Typography
            variant="h2"
            sx={{
              fontFamily: ThemeFontsFamily.Volkhov,
              fontSize: FontSize.desc,
              fontWeight: ThemeFontWeight.Bold,
              color: ThemeColors.ContactUsDarkHeadingColor,
              textAlign: "center",
              padding: "40px 0",
            }}
          >
            MORE DETAILS
          </Typography>
        </div>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <div className="sales-info-section">
          <SalesInformation />
        </div>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <div className="help-and-support-section">
          <HelpandSupport />
        </div>
      </Grid>
    </Grid>
  );
};

export default MoreDetails;
