import { Grid } from '@mui/material';
import Layout from '../../Layout/Layout';
import React from 'react'
import ServicesHero from './sections/serviceshero/ServicesHero';
import VehicleFilter from './sections/vehiclefilter/VehicleFilter';
import WhereToBuy from '../wheretobuy/sections/store';


const Services = () => {
  return (
    <Layout className="App">
      <Grid container>
        <Grid item
          lg={12}
          md={12}
          xs={12}
          sm={12}
        >
          <ServicesHero />
          <VehicleFilter/>
          <WhereToBuy subtitle='Where To Buy' title='IDEMITSU OIL' />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Services