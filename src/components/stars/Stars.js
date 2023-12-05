// import './style.css'
import React from 'react'
import { Grid } from '@mui/material'
import Star from '../../images/stars.png'

const Stars = () => {
    return (
        <Grid container>
            <Grid item
            lg={12}
            md={12}
            xs={12}
            sm={12}
            >
                <div>
                    <img src={Star} alt="Star" />
                </div>
            </Grid>
        </Grid>
    )
}

export default Stars