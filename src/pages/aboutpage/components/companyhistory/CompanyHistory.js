import './style.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Tabs, Tab, Typography } from '@mui/material';
import Year from './historyyears/Year';
import {
  FontSize,
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
} from '../../../../utils/Theme';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const CompanyHistory = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <div className="menu-tabs">
            <Box>
              <Tabs
                indicatorColor="tannsparent"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="company-history-tabs"
              >
                <Tab
                  sx={{
                    '&.Mui-selected': {
                      color: ThemeColors.MainHeadings,
                      '&.MuiTab-root': {
                        fontSize: FontSize.xxxlarge,
                        fontWeight: ThemeFontWeight.Bold,
                        fontFamily: ThemeFontsFamily.Poppins,
                      },
                    },
                  }}
                  label="1981"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    '&.Mui-selected': {
                      color: ThemeColors.MainHeadings,
                      '&.MuiTab-root': {
                        fontSize: FontSize.xxxlarge,
                        fontWeight: ThemeFontWeight.Bold,
                        fontFamily: ThemeFontsFamily.Poppins,
                      },
                    },
                  }}
                  label="1985"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    '&.Mui-selected': {
                      color: ThemeColors.MainHeadings,
                      '&.MuiTab-root': {
                        fontSize: FontSize.xxxlarge,
                        fontWeight: ThemeFontWeight.Bold,
                        fontFamily: ThemeFontsFamily.Poppins,
                      },
                    },
                  }}
                  label="1988"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{
                    '&.Mui-selected': {
                      color: ThemeColors.MainHeadings,
                      '&.MuiTab-root': {
                        fontSize: FontSize.xxxlarge,
                        fontWeight: ThemeFontWeight.Bold,
                        fontFamily: ThemeFontsFamily.Poppins,
                      },
                    },
                  }}
                  label="1990"
                  {...a11yProps(3)}
                />
                <Tab
                  sx={{
                    '&.Mui-selected': {
                      color: ThemeColors.MainHeadings,
                      '&.MuiTab-root': {
                        fontSize: FontSize.xxxlarge,
                        fontWeight: ThemeFontWeight.Bold,
                        fontFamily: ThemeFontsFamily.Poppins,
                      },
                    },
                  }}
                  label="1993"
                  {...a11yProps(4)}
                />
                <Tab
                  sx={{
                    '&.Mui-selected': {
                      color: ThemeColors.MainHeadings,
                      '&.MuiTab-root': {
                        fontSize: FontSize.xxxlarge,
                        fontWeight: ThemeFontWeight.Bold,
                        fontFamily: ThemeFontsFamily.Poppins,
                      },
                    },
                  }}
                  label="1996"
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>
            <div>
              <TabPanel value={value} index={0}>
                <div>
                  <Year
                    title="In 1981, Idemitsu..."
                    desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <Year
                    title="In 1985, Idemitsu..."
                    desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div>
                  <Year
                    title="In 1988, Idemitsu..."
                    desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div>
                  <Year
                    title="In 1990, Idemitsu..."
                    desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <div>
                  <Year
                    title="In 1993, Idemitsu..."
                    desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <div>
                  <Year
                    title="In 1996, Idemitsu..."
                    desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                  />
                </div>
              </TabPanel>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyHistory;
