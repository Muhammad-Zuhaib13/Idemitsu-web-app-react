import './style.css';
import React from 'react'
import { Grid } from '@mui/material';
import Layout from '../../Layout/Layout';
import Lines from '../../images/lines3.png'
import HeroSection from './sections/index';
import WhereToBuy from './sections/store/index';

const Buy = () => {
  return (
    <Layout>
      <Grid container
        sx={{
          backgroundImage: `url(${Lines})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Grid item
          lg={12}
          md={12}
          xs={12}
          sm={12}
        >
          <HeroSection />
          <WhereToBuy />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Buy