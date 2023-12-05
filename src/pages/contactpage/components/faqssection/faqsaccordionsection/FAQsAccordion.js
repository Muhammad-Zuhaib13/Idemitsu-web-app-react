import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./style.css";

import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../../utils/Theme";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid transparent`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "#F9F9F9",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowRightAltIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "0",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid #E11737",
  borderBottom: "1px solid #E11737",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="accordion-heading">
            <p>Lorem ipsum dolor sit amet, adipiscing ? </p>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </div>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.xxxlarge,
              fontWeight: ThemeFontWeight.SemiBold,
              color: ThemeColors.MainHeadings,
              padding: "10px 0",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet, adipiscing ?
          </Typography>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.large,
              fontWeight: ThemeFontWeight.Regular,
              color: ThemeColors.ParagraphColor,
              padding: "10px 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, Donec vel egestas dolor, nec dignissim metus. Donec
            augue elit, rhoncus ac sodale
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="accordion-heading">
            <p>Lorem ipsum dolor sit amet, adipiscing ? </p>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </div>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.xxxlarge,
              fontWeight: ThemeFontWeight.SemiBold,
              color: ThemeColors.MainHeadings,
              padding: "10px 0",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet, adipiscing ?
          </Typography>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.large,
              fontWeight: ThemeFontWeight.Regular,
              color: ThemeColors.ParagraphColor,
              padding: "10px 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, Donec vel egestas dolor, nec dignissim metus. Donec
            augue elit, rhoncus ac sodale
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="accordion-heading">
            <p>Lorem ipsum dolor sit amet, adipiscing ? </p>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </div>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.xxxlarge,
              fontWeight: ThemeFontWeight.SemiBold,
              color: ThemeColors.MainHeadings,
              padding: "10px 0",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet, adipiscing ?
          </Typography>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.large,
              fontWeight: ThemeFontWeight.Regular,
              color: ThemeColors.ParagraphColor,
              padding: "10px 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, Donec vel egestas dolor, nec dignissim metus. Donec
            augue elit, rhoncus ac sodale
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="accordion-heading">
            <p>Lorem ipsum dolor sit amet, adipiscing ? </p>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </div>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.xxxlarge,
              fontWeight: ThemeFontWeight.SemiBold,
              color: ThemeColors.MainHeadings,
              padding: "10px 0",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet, adipiscing ?
          </Typography>
          <Typography
            sx={{
              fontFamily: ThemeFontsFamily.Poppins,
              fontSize: FontSize.large,
              fontWeight: ThemeFontWeight.Regular,
              color: ThemeColors.ParagraphColor,
              padding: "10px 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, Donec vel egestas dolor, nec dignissim metus. Donec
            augue elit, rhoncus ac sodale
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
