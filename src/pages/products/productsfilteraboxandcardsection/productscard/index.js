import "./style.css";
import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../utils/Theme";
import { Image } from "./Data";

const ProductCard = ({ oilCardsData }) => {
  const cardData = oilCardsData;
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="main-products-card-section">
          {cardData.length !== 0 ? (
            cardData.map((product, index) => {
              const {
                id,
                title,
                description,
                current_price,
                prev_price,
                vehicle_type,
                engine_type,
              } = product;
              return (
                <div key={id}>
                  <Card
                    sx={{ maxWidth: "240px", margin: "12px" }}
                    className="product-card"
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "40px",
                        margin: "0 auto",
                      }}
                      image={Image[index]}
                      alt={title}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                          fontFamily: ThemeFontsFamily.Poppins,
                          fontSize: FontSize.medium,
                          fontWeight: ThemeFontWeight.SemiBold,
                          color: ThemeColors.ProductCardTitleColor,
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        component="h6"
                        sx={{
                          fontFamily: ThemeFontsFamily.Poppins,
                          fontSize: FontSize.small,
                          fontWeight: ThemeFontWeight.Regular,
                          color: ThemeColors.ProductCardDescColor,
                        }}
                      >
                        {description}
                        <span
                          style={{
                            background: "rgb(0 0 0 / 6%)",
                            borderRadius: "4px",
                            padding: "0 2px",
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          {vehicle_type} | {engine_type}
                        </span>
                      </Typography>
                      <Typography
                        component="h5"
                        sx={{
                          fontFamily: ThemeFontsFamily.Poppins,
                          fontSize: "17px",
                          fontWeight: ThemeFontWeight.Bold,
                          color: ThemeColors.ProductCardCurrentPriceColor,
                        }}
                      >
                        {current_price}
                        <Typography
                          component="s"
                          sx={{
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontSize: "10px",
                            fontWeight: ThemeFontWeight.Bold,
                            color: ThemeColors.ProductCardPrevPriceColor,
                            marginLeft: "6px",
                          }}
                        >
                          {prev_price}
                        </Typography>
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })
          ) : (
            <>
              <p className="product-not-found-text">
                Thank you for your search. We do not have any products that
                match this vehicle at this time.
              </p>
              <p className="product-not-found-text">
                Idemitsu is always developing new products to meet evolving
                customer needs. Please check back again in the future and always
                see your owner’s manual to ensure that you are using the proper
                fluids for your vehicle.
              </p>
            </>
          )}
        </div>
      </Grid>
    </Grid>
  );
};
export default ProductCard;
