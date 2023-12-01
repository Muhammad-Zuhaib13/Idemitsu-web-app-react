import "./style.css";
import React from "react";
import { Grid } from "@mui/material";

import { ProductsData, Image } from "./Data";
import MainCard from "../../../../components/productcard";
const ProductCard = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="main-products-card-section">
          {ProductsData.map((product, index) => {
            const { id, title, description, current_price, prev_price } =
              product;
            return (
              <div key={id}>
                <MainCard
                  title={title}
                  image = {Image[index]}
                  description={description}
                  current_price={current_price}
                  prev_price={prev_price}
                />
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};
export default ProductCard;
