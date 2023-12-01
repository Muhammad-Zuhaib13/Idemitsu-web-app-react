import './style.css'
import { Grid } from '@mui/material'
import React from 'react'
import ProductBannerImg from '../../../images/productbannerimg.svg'

const ProductBanner = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="product-banner-section" style={{backgroundImage:`url(${ProductBannerImg})`}}>
        </div>
      </Grid>
    </Grid>
  )
}

export default ProductBanner
