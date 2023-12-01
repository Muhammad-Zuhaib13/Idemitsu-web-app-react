import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RetailStore from "../storesearch";
import "./style.css";
import Data from "../../json/data.json";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="search-main-container">
      <div className="where-to-buy-search-headings">
        <h4>WHERE TO BUY</h4>
        <h2>IDEMITSU OIL</h2>
      </div>
      <div className="search-fields-type">
        <Tabs
          indicatorColor="transparent"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          id="buttons-tab"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap:"10px"
          }}
        >
          <Tab label="Retail Stores" {...a11yProps(0)} />
          <Tab label="Distributors" {...a11yProps(1)} />
          <Tab label="Oil Change Shop" {...a11yProps(2)} />
        </Tabs>
      </div>
      <div className="search-results-panels">
        <CustomTabPanel value={value} index={0}>
          <RetailStore jsonData={Data} storeType={"Retail Stores"} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <RetailStore jsonData={Data} storeType={"Distributor Stores"} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <RetailStore jsonData={Data} storeType={"Oil Change Shops"} />
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default BasicTabs;
