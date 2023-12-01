import "./style.css";
import { Grid } from "@mui/material";
import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "./style.css";
import FilterDrawer from "./filterdrawer/FilterDrawer";
import FilterOilCard from "./filteroilcard/FilterOilCard";
const ProductsFilterSection = ({ updateCardsData, Data, setOilCardsData }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        {isMatch ? (
          <FilterDrawer
            updateCardsData={updateCardsData}
            Data={Data}
            setOilCardsData={setOilCardsData}
          />
        ) : (
          <FilterOilCard
            updateCardsData={updateCardsData}
            Data={Data}
            setOilCardsData={setOilCardsData}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ProductsFilterSection;
