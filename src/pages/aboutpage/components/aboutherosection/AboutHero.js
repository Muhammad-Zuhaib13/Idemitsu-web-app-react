import './style.css'
import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { ThemeColors, ThemeFontWeight, ThemeFontsFamily, FontSize } from '../../../../utils/Theme'
import BannerImg from '../../../../images/aboutbanner.png'

const AboutHero = () => {
    return (
        <Grid container> 
            <Grid item
                lg={12}
                md={12}
                xs={12}
                sm={12}
            >
                <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}>
                    <Box sx={{ paddingTop: '50px', paddingBottom: '140px' }}>
                        <div className='about-banner-content'>
                            <div>
                                <Typography
                                    mb={3}
                                    color={ThemeColors.MainHeadings}
                                    sx={{ fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.Bold, fontSize: FontSize.xlarge, letterSpacing:'1.5px' }}
                                    variant="h1"
                                >
                                    The Trusted Choice of Leading Automakers Worldwide
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    mb={3}
                                    color={ThemeColors.White}
                                    sx={{ fontFamily: ThemeFontsFamily.Volkhov, fontWeight: ThemeFontWeight.Bold, fontSize: FontSize.desc , letterSpacing:'1.5px'}}
                                    variant="h1"
                                >
                                    About Us
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    className='about-banner-para'
                                    mb={3}
                                    color={ThemeColors.White}
                                    sx={{ fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.Medium, fontSize: FontSize.medium, lineHeight:'30px', letterSpacing:'1.5px' }}
                                    variant="h1"
                                >
                                    .adipiscing elit. Aenean ultricies metus nec est porttitor suscipit. Duis tortor felis, Lorem ipsum dolor sit amet,  consectetur .adipiscing elit. Aenean ultricies metus nec est porttitor suscipit. Duis tortor felis, Lorem ipsum dolor sit amet,  consectetur .adipiscing elit. Aenean ultricies metus nec est porttitor suscipit. Duis tortor felis, Lorem ipsum dolor sit amet,  consectetur
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </div>
            </Grid>
        </Grid>
    )
}

export default AboutHero