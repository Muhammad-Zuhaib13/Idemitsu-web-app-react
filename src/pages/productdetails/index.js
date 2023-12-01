import React from "react";
import "./style.css";
import Layout from "../../Layout/Layout";
import { Grid } from "@mui/material";
import BuyAddtoCart from "./components/buyaddtocart";
import ProductInfo from "./components/productinfo";
import SimilarProducts from "./components/similarproducts";
const ProductDetails = () => {
  return <Layout>
    <Grid container className="products-details-page-bg">
        <Grid item xl={12} lg={12} md={12} xs={12}>
            <BuyAddtoCart />
        </Grid>
        <Grid item xl={12} lg={12} md={12} xs={12}>
            <ProductInfo />
        </Grid>
        <Grid item xl={12} lg={12} md={12} xs={12}>
            <SimilarProducts />
        </Grid>
    </Grid>
  </Layout>;
};

export default ProductDetails;
