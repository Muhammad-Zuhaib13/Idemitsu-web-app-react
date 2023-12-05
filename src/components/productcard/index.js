import React from "react";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../utils/Theme";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./style.css"
const MainCard = (props) => {
    const {title, src, description, current_price, prev_price}=props;
  return (
    <>
      <Card
        sx={{ maxWidth: "240px", margin: "12px", maxHeight: "341px" }}
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
          image={src}
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
    </>
  );
};

export default MainCard;
