import "./style.css";
import { Grid } from "@mui/material";
import React from "react";

const ProductRangeText = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="products-page-headings">
          <h5 className="product-page-heading-h5">IDEMISTU</h5>
          <h2 className="product-page-heading-h2">PRODUCTS RANGE</h2>
        </div>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <p className="products-page-para">
          Idemitsu is a leader in high-quality fully synthetic oils which are
          engineered for maximum performance and exceed the latest API SP /
          ILSAC GF-6 standards. We also formulated the first OW-20 viscosity and
          now have a new ultra-low OW-16 viscosity available. Our technicians
          have worked closely with engineers from original equipment
          manufacturers (OEMs) such as Honda, Mazda, Nissan, Toyota, GM and FCA
          to meet the most stringent performance and protection requirements.
        </p>
      </Grid>
    </Grid>
  );
};

export default ProductRangeText;
