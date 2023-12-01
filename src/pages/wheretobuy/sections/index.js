import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { ThemeColors, ThemeFontsFamily, ThemeFontWeight, FontSize } from '../../../utils/Theme'
import CanImg from '../../../images/oilcans.png'
import "./style.css"
const HeroSection = () => {
    return (
        <Grid container bgcolor='#414141' className="where-to-buy-banner">
            <Grid item
                display='flex'
                alignItems='center'
                lg={6}
                md={6}
                xs={12}
                sm={12}
                className="where-to-buy-banner"
            >
                <Box>
                    <div className="where-to-buy-banner-headings">
                        <div>
                            <Typography
                                mb={2}
                                color={ThemeColors.White}
                                sx={{ fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.SemiBold, fontSize: FontSize.Title, letterSpacing: '1.5px' }}
                                variant="h1"
                            >
                                WHERE TO BUY
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                color={ThemeColors.MainHeadings}
                                sx={{ fontFamily: ThemeFontsFamily.Volkhov, fontWeight: ThemeFontWeight.Bold, fontSize: FontSize.desc, letterSpacing: '1.5px' }}
                                variant="h1"
                            >
                                IDEMITSU OIL
                            </Typography>
                        </div>
                    </div>
                </Box>
            </Grid>
            <Grid item
                display='flex'
                justifyContent='center'
                lg={6}
                md={6}
                xs={12}
                sm={12}
            >
                <div className="where-to-buy-banner-img">
                    <img src={CanImg} alt="CanImg" />
                </div>
            </Grid>
        </Grid>
    )
}

export default HeroSection