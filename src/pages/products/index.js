import React from 'react'
import Layout from '../../Layout/Layout'
import { Grid } from '@mui/material'
import ProductBanner from './bannersection'
import ProductRangeText from './productrangetextsection'
import ProductsSection from './productsfilteraboxandcardsection'
import './style.css'
const Products = () => {
  return (
    <Layout>
      <Grid container className='products-page'>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <ProductBanner/>
        </Grid>
        <Grid item lg={12}  md={12} sm={12} xs={12}>
          <ProductRangeText/>
        </Grid>
        <Grid item lg={12}  md={12} sm={12} xs={12}>
          <ProductsSection/>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Products