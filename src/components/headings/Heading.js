import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../utils/Theme";

const Heading = (props) => {
  const { title, desc } = props;
  return (
    <Grid container>
      <Grid item
        lg={12}
        md={12}
        xs={12}
        sm={12}
      >
        <Typography
          textAlign="center"
          className="title"
          color={ThemeColors.TitleColor}
          sx={{
            fontFamily: ThemeFontsFamily.Poppins,
            fontWeight: ThemeFontWeight.SemiBold,
            fontSize: FontSize.large,
          }}
          mt={9}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          mt={2}
          textAlign="center"
          className="desc"
          color={ThemeColors.BlackHeading}
          sx={{
            fontFamily: ThemeFontsFamily.Volkhov,
            fontWeight: ThemeFontWeight.Bold,
            fontSize: FontSize.desc,
          }}
          variant="h5"
        >
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Heading;
