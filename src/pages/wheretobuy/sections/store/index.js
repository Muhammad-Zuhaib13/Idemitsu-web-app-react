import "./style.css";
import React from "react";
import { Grid} from "@mui/material";
import StoreSearchTab from "./tabs";

const WhereToBuy = () => {
  return (
    <Grid container mt={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
          <StoreSearchTab/>
      </Grid>
    </Grid>
  );
};

export default WhereToBuy;
