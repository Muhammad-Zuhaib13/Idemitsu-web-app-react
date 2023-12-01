import './style.css';
import React from 'react';
import Layout from '../../Layout/Layout';
import Slider from './slider/Slider';
import Card from './homecard/index';
import { Grid } from '@mui/material';
import Categories from './categories/Categories';
import StoreLocator from './storelocator/StoreLocator';
import SubscribeEmail from '../../components/subscribeemail';
import TestimonialSlider from './testimonials';
import NewsUpdates from './news';

const Homepage = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
          <Slider />
          <Card />
          <Categories />
          <TestimonialSlider />
          <NewsUpdates />
          <StoreLocator />
          <SubscribeEmail />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Homepage;
