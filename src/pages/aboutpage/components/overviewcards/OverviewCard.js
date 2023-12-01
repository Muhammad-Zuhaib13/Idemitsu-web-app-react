import "./style.css";
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";

const OverviewCard = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className="overview-cards">
            <div className="overview-card-content">
              <Card
                sx={{
                  maxWidth: 265,
                  backgroundColor: "none",
                  borderRadius: "36px",
                  height: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow:"none"
                }}
                className="about-overview-card"
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    color={ThemeColors.MainHeadings}
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: FontSize.Title,
                      fontFamily: ThemeFontsFamily.Poppins,
                      fontWeight: ThemeFontWeight.Bold,
                    }}
                  >
                    1911
                  </Typography>
                  <Typography
                    color={ThemeColors.TitleColor}
                    variant="body2"
                    sx={{
                      fontSize: FontSize.medium,
                      fontFamily: ThemeFontsFamily.Poppins,
                      fontWeight: ThemeFontWeight.Medium,
                      maxWidth: "200px",
                    }}
                  >
                    The chairs have a knitted backrest that conforms.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="overview-card-content1">
              <div className="overview-item-grid">
                <Card
                  sx={{
                    maxWidth: 265,
                    backgroundColor: "none",
                    borderRadius: "36px",
                    height: "260px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    boxShadow:"none"
                  }}
                  className="about-overview-card"
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      color={ThemeColors.MainHeadings}
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: FontSize.Title,
                        fontFamily: ThemeFontsFamily.Poppins,
                        fontWeight: ThemeFontWeight.Bold,
                      }}
                    >
                      61
                    </Typography>
                    <Typography
                      color={ThemeColors.TitleColor}
                      variant="body2"
                      sx={{
                        fontSize: FontSize.medium,
                        fontFamily: ThemeFontsFamily.Poppins,
                        fontWeight: ThemeFontWeight.Medium,
                        maxWidth: "200px",
                      }}
                    >
                      The chairs have a knitted backrest that conforms.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="overview-card-content">
              <Card
                sx={{
                  maxWidth: 265,
                  backgroundColor: "none",
                  borderRadius: "36px",
                  height: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow:"none"
                }}
                className="about-overview-card"
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    color={ThemeColors.MainHeadings}
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: FontSize.Title,
                      fontFamily: ThemeFontsFamily.Poppins,
                      fontWeight: ThemeFontWeight.Bold,
                    }}
                  >
                    08
                  </Typography>
                  <Typography
                    color={ThemeColors.TitleColor}
                    variant="body2"
                    sx={{
                      fontSize: FontSize.medium,
                      fontFamily: ThemeFontsFamily.Poppins,
                      fontWeight: ThemeFontWeight.Medium,
                      maxWidth: "200px",
                    }}
                  >
                    The chairs have a knitted backrest that conforms.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="overview-card-content">
              <Card
                sx={{
                  maxWidth: 265,
                  backgroundColor: "none",
                  borderRadius: "36px",
                  height: "260px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow:"none"
                }}
                className="about-overview-card"
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    color={ThemeColors.MainHeadings}
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: FontSize.Title,
                      fontFamily: ThemeFontsFamily.Poppins,
                      fontWeight: ThemeFontWeight.Bold,
                    }}
                  >
                    13000
                  </Typography>
                  <Typography
                    color={ThemeColors.TitleColor}
                    variant="body2"
                    sx={{
                      fontSize: FontSize.medium,
                      fontFamily: ThemeFontsFamily.Poppins,
                      fontWeight: ThemeFontWeight.Medium,
                      maxWidth: "200px",
                    }}
                  >
                    The chairs have a knitted backrest that conforms.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <div className="overview-detail-container">
            <div className="overview-detail-content">
              <div>
                <div className="overview-detial-list">
                  <div>
                    <div className="overview-item-grid">
                      <p
                        style={{
                          color: ThemeColors.ParagraphColor,
                          fontFamily: ThemeFontsFamily.Poppins,
                          fontWeight: ThemeFontWeight.Regular,
                          fontSize: FontSize.large,
                          marginTop: "10px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel egestas dolor, nec dignissim metus. Donec
                        augue elit, rhoncus ac sodales id, Donec vel egestas
                        dolor, nec dignissim metus. Donec augue elit, rhoncus ac
                        sodales id,<br/><br/> porttitor vitae est. Donec laoreet rutrum
                        libero sed pharetr Donec vel egestas dolor, nec
                        dignissim metus. Donec augue elit, rhoncus ac sodales
                        id, porttitor vitae est. Donec laoreet rutrum libero sed
                        pharetr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default OverviewCard;
