import "./style.css";
import React from "react";
import Layout from "../../Layout/Layout";
import { Grid } from "@mui/material";
import "./style.css";
import ContactUsBanner from "./components/contactusbannersection/index";
import WhereToFind from "./components/wheretofindsection/index";
import MoreDetails from "./components/moredetailssection/index";
import AskUsAt from "./components/askusatsection/index";
import FrequentAQs from "./components/faqssection/index";
import SubscribeEmail from "../../components/subscribeemail/index"
import { ThemeColors } from "../../utils/Theme";
const Contact = () => {
  return (
    <Layout>
      <Grid container className="contact-us-page-bg">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <ContactUsBanner />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <WhereToFind />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <MoreDetails />
        </Grid>
       <Grid item lg={12} md={12} sm={12} xs={12}>
          <AskUsAt />
        </Grid> 
        <Grid item lg={12} md={12} sm={12} sx={{backgroundColor:ThemeColors.White}}>
          <FrequentAQs/>
        </Grid> 
        <Grid item lg={12} md={12} sm={12}  sx={{backgroundColor:ThemeColors.White}} >
          <SubscribeEmail />
        </Grid> 
      </Grid>
    </Layout>
  );
};

export default Contact;
