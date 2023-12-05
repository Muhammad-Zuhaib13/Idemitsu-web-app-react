import "./style.css";
import React from "react";
import { Grid } from "@mui/material";
import Heading from "../../../../components/headings/Heading";
import CompanyDetails from "./sections/companysection";
import HeadOfficeDetails from "./sections/headofficesection";

const CompanyDetail = () => {
  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="company-details-headings">
            <Heading
              className="company-details-headings"
              title="Details"
              desc="IDEMITSU LUBE PAKISTAN(Pvt. ) Ltd."
            />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} mt={6} mb={6}>
          <CompanyDetails />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
         <HeadOfficeDetails />
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyDetail;
