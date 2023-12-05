import React from 'react'
import Layout from '../../Layout/Layout'
import { Grid } from '@mui/material';
import AboutHero from './components/aboutherosection/AboutHero';
import CompanyDetail from './components/companydetail/CompanyDetail';
import CompanyHistory from './components/companyhistory/CompanyHistory';
import OverviewCard from './components/overviewcards/OverviewCard';
import Map from './components/companymap/Map';

const About = () => {
    return (
        <Layout>
          <Grid container>
            <Grid item
             lg={12}
             md={12}
             xs={12}
             sm={12}
            >
              <AboutHero/>
              <CompanyDetail/>
              <CompanyHistory/>
              <Map/>
              <OverviewCard/>
            </Grid>
          </Grid>
        </Layout>
      )
}

export default About