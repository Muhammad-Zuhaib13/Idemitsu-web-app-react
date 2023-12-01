import './style.css'
import React from 'react'
import { Grid, Card, CardContent, Typography, Avatar, CardHeader } from '@mui/material'
import { ThemeColors, ThemeFontWeight, ThemeFontsFamily, FontSize } from '../../../utils/Theme'
import Leaf from '../../../images/leaf.png'
import Heading from '../../../components/headings/Heading'

const HomeCard = () => {
    return (
        <Grid container>
            <Grid item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                mt={12}
            >
                <div className='home-card-item-heading'>
                    <div className='item-div'>
                        <Heading title='CATEGORY' desc='We Offer Best Services' />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card-content'>
                        <Card sx={{ maxWidth: 265, backgroundColor: 'none', borderRadius: '36px', height: '314px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{}}>
                                        R
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography gutterBottom color={ThemeColors.CardTtileColor} variant="h5" component="div" sx={{ fontSize: FontSize.xlarge, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.SemiBold }}>
                                    Free Delivery
                                </Typography>
                                <Typography color={ThemeColors.TitleColor} variant="body2" sx={{ fontSize: FontSize.medium, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.Medium, maxWidth: '200px' }}>
                                    The chairs have a knitted backrest that conforms.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='card-content1'>
                        <div className='item-grid'>
                            <img src={Leaf} alt="Leaf" />
                        </div>
                        <div className='item-grid'>
                            <Card sx={{ maxWidth: 265, backgroundColor: 'none', borderRadius: '36px', height: '314px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{}}>
                                            R
                                        </Avatar>
                                    }
                                />
                                <CardContent>
                                    <Typography gutterBottom color={ThemeColors.CardTtileColor} variant="h5" component="div" sx={{ fontSize: FontSize.xlarge, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.SemiBold }}>
                                        Free Delivery
                                    </Typography>
                                    <Typography color={ThemeColors.TitleColor} variant="body2" sx={{ fontSize: FontSize.medium, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.Medium, maxWidth: '200px' }}>
                                        The chairs have a knitted backrest that conforms.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                    <div className='card-content'>
                        <Card sx={{ maxWidth: 265, backgroundColor: 'none', borderRadius: '36px', height: '314px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{}}>
                                        R
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography gutterBottom color={ThemeColors.CardTtileColor} variant="h5" component="div" sx={{ fontSize: FontSize.xlarge, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.SemiBold }}>
                                    Free Delivery
                                </Typography>
                                <Typography color={ThemeColors.TitleColor} variant="body2" sx={{ fontSize: FontSize.medium, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.Medium, maxWidth: '200px' }}>
                                    The chairs have a knitted backrest that conforms.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='card-content'>
                        <Card sx={{ maxWidth: 265, backgroundColor: 'none', borderRadius: '36px', height: '314px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{}}>
                                        R
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography gutterBottom color={ThemeColors.CardTtileColor} variant="h5" component="div" sx={{ fontSize: FontSize.xlarge, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.SemiBold }}>
                                    Free Delivery
                                </Typography>
                                <Typography color={ThemeColors.TitleColor} variant="body2" sx={{ fontSize: FontSize.medium, fontFamily: ThemeFontsFamily.Poppins, fontWeight: ThemeFontWeight.Medium, maxWidth: '200px' }}>
                                    The chairs have a knitted backrest that conforms.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </Grid>
        </Grid>
    )
}

export default HomeCard