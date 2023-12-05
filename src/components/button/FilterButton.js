import { Button } from "@mui/material";
import React from "react";
import {
  ThemeColors,
  ThemeFontsFamily,
  ThemeFontWeight,
  FontSize,
} from "../../utils/Theme";

const FilterButton = (props) => {
  const { store } = props;
  return (
    <Button
      className="button"
      variant="contained"
      sx={{
        backgroundColor: "transparent",
        borderRadius: "30px",
        color: ThemeColors.FilterButtonColor,
        fontFamily: ThemeFontsFamily.Poppins,
        fontWeight: ThemeFontWeight.Regular,
        fontSize: FontSize.regular,
        textTransform: "none",
        border: "1px solid #7D7D7D",
        boxShadow: "none",
        padding: "9px 19px",
        "&.MuiButton-root:hover": {
          backgroundColor: ThemeColors.FilterButtonColor,
          color: ThemeColors.White,
        },
        "&.MuiButton-root:active": {
          backgroundColor: ThemeColors.FilterButtonColor,
          color: ThemeColors.White,
        },
      }}
    >
      {store}
    </Button>
  );
};

export default FilterButton;
