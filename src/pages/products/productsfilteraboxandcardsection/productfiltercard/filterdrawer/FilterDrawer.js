import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import FilterOilCard from "../filteroilcard/FilterOilCard";

const FilterDrawer = ({updateCardsData, Data, setOilCardsData}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Drawer open={open} onClose={handleClose}>
        <List>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText>
               <FilterOilCard updateCardsData={updateCardsData} Data={Data} setOilCardsData={setOilCardsData}/>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          color: "#5F5B5B",
          fontSize: "16px",
          padding: "8px 26px",
        }}
        onClick={handleOpen}
      >
        <FilterAltTwoToneIcon /> Filter
      </IconButton>
    </>
  );
};

export default FilterDrawer;
