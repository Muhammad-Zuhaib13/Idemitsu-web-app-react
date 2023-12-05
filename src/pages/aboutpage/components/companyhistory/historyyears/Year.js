import "../style.css";
import React from "react";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../../utils/Theme";
import { Grid } from "@mui/material";
import HeadOfficeImg from "../../../../../images/company-history-img.png";

const Year = (props) => {
  const { title, desc } = props;
  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
          <div className="company-history-details">
            <div className="company-year-container">
              <div className="year-content">
                <div className="company-history-tab-img">
                  <img
                    className="year-img"
                    src={HeadOfficeImg}
                    alt="HeadOfficeImg"
                  />
                </div>
                <div>
                  <div className="year-detail-list">
                    <div>
                      <div style={{ marginBottom: "10px" }}>
                        <span
                          style={{
                            color: ThemeColors.MainHeadings,
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.Bold,
                            fontSize: FontSize.Title,
                            marginTop: "10px",
                          }}
                        >
                          {title}
                        </span>
                      </div>
                      <div>
                        <p
                          style={{
                            color: ThemeColors.YearParagraphColor,
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.Regular,
                            fontSize: FontSize.large,
                            marginTop: "10px",
                          }}
                        >
                          {desc}
                        </p>
                      </div>
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

export default Year;
