import React from 'react';
import { Button } from '@mui/material';
import {
  FontSize,
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
} from '../../utils/Theme';

const Buttons = (props) => {
  const {
    buttonText,
    onClick,
    btnBg = '#E11737',
    width = '184px',
    height = '54px',
  } = props;
  return (
    <Button
      onClick={onClick}
      className="button"
      variant="contained"
      sx={{
        backgroundColor: btnBg,
        padding: '10px 35px',
        width: width,
        height: height,
        borderRadius: '100px',
        color: ThemeColors.White,
        fontFamily: ThemeFontsFamily.Poppins,
        fontWeight: ThemeFontWeight.Medium,
        fontSize: FontSize.large,
        textTransform: 'capitalize',
        '&.MuiButton-root:hover': {
          backgroundColor: ThemeColors.MainHeadings,
        },
      }}
    >
      {buttonText}
    </Button>
  );
};

export default Buttons;
