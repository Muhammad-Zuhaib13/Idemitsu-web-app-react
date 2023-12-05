import React from "react";
import { Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";
import Heading from "../../../components/headings/Heading";
import CarImg from "../../../images/car_home.png";
import TruckImg from "../../../images/truck_home.png";
import BikeImg from "../../../images/bike_home.png";
const Categories = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className="home-categories-heading">
            <Heading title="Lorem Ipsum" desc="Our Top Categories" />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="home-vehicle-card-container">
            <CategoryCard
              title="Cars"
              src={CarImg}
              desc="On the other hand, we denounce with righteous indignation and dislike men whi are so beguiled and demoralized by the charms of pleasure "
            />

            <CategoryCard
              title="Trucks"
              src={TruckImg}
              desc="On the other hand, we denounce with righteous indignation and dislike men whi are so beguiled and demoralized by the charms of pleasure "
            />

            <CategoryCard
              title="Motor Cycles"
              src={BikeImg}
              desc="On the other hand, we denounce with righteous indignation and dislike men whi are so beguiled and demoralized by the charms of pleasure "
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Categories;
