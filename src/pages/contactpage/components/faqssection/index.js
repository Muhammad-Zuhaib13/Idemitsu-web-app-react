import React from "react";
import "./style.css";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";
import { Grid, Typography } from "@mui/material";
import FAQsImgOne from "../../../../images/contactus-faqs-img-1.svg";
import FAQsImgTwo from "../../../../images/contactus-faqs-img-2.svg";
import FAQsImgThree from "../../../../images/contactus-faqs-img-3.svg";
import FAQsAccordion from "./faqsaccordionsection/FAQsAccordion";
const FrequentAQs = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: ThemeColors.ContactUsLightBgColor }}
      mb={5}
      pb={5}
    >
      <Grid item container>
        <Grid item lg={12} md={12} sm={12}>
          <div className="faqs-headings">
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: ThemeFontsFamily.Poppins,
                fontSize: FontSize.xxxlarge,
                fontWeight: ThemeFontWeight.SemiBold,
                color: ThemeColors.ContactUsHeadingColor,
                lineHeight: "36px",
              }}
            >
              Frequently Asked
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
              }}
            >
              QUESTIONS
            </Typography>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <div className="faqs-left-section">
            <FAQsAccordion />
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <div className="faqs-right-section">
            <div className="faqs-img-group">
              <div className="faqs-img-col-one">
                <img src={FAQsImgOne} alt="FAQsImgOne" />
              </div>
              <div className="faqs-img-col-two">
                <img src={FAQsImgTwo} alt="FAQsImgOne" />
                <img src={FAQsImgThree} alt="FAQsImgOne" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FrequentAQs;
