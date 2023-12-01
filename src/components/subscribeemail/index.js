import React from 'react'
import "./style.css";
import { Box, Grid } from "@mui/material";
const SubscribeEmail = () => {
  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box component="form">
          <div className="subscribe-section">
            <h2 className="subscribe-h2 circle-img-before" >
              Subscribe to get information, latest news and other<br /> interesting
              offers at Idemitsu
            </h2>
            <div className="subscribe-input-and-button">
              <div className="subscriber-email-input">
              <input
                type="email"
                placeholder="Your Email"
              />
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SubscribeEmail
