import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import {
  ThemeColors,
  ThemeFontWeight,
  ThemeFontsFamily,
  FontSize,
} from "../../../../../utils/Theme";
import "./style.css";

const FilterOilCard = ({ updateCardsData, Data, setOilCardsData }) => {
  const headingStyling = {
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: "8px 0",
    marginTop: "4px",
    fontSize: FontSize.medium,
    fontFamily: ThemeFontsFamily.Poppins,
    fontWeight: ThemeFontWeight.Bold,
    color: ThemeColors.ProductFilterCardTextColor,
  };
  const labelDivStyling = {
    fontSize: FontSize.medium,
    fontFamily: ThemeFontsFamily.Poppins,
    color: ThemeColors.ProductFilterCardTextColor,
    fontWeight: ThemeFontWeight.Medium,
    padding: "8px 0",
  };
  const viscosities = ["0W-20W","0W-30W","05W-20W","05W-30W","10W-30W","10W-40W","10W-50W"];
  const [vehicleValue, setVehicleValue] = useState([]);
  const [engineleValue, setEngineValue] = useState([]);
  const [viscosityValue, setViscosityValue] = useState([]);

  const handleCheckedVehicle = (e) => {
    var { value, checked } = e.target;
    e.stopPropagation();
    var updatedList = [...vehicleValue];
    if (checked) {
      updatedList = [...vehicleValue, value];
    } else {
      updatedList.splice(engineleValue.indexOf(value), 1);
    }
    setVehicleValue(updatedList);
  };

  const handleCheckedEngine = (e) => {
    const { value, checked } = e.target;
    e.stopPropagation();
    var updatedList = [...engineleValue];
    if (checked) {
      updatedList = [...engineleValue, value];
    } else {
      updatedList.splice(engineleValue.indexOf(value), 1);
    }
    setEngineValue(updatedList);
  };

  const handleCheckedViscosity = (e) => {
    const { value, checked } = e.target;
    e.stopPropagation();
    var updatedList = [...viscosityValue];
    if (checked) {
      updatedList = [...viscosityValue, value];
    } else {
      updatedList.splice(viscosityValue.indexOf(value), 1);
    }
    setViscosityValue(updatedList);
  };

  const clearCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    //console.log("unchecked");
    setVehicleValue([]);
    setEngineValue([]);
    setViscosityValue([]);
    setOilCardsData(Data);
  };
  const handleForm = (e) => {
    e.preventDefault();
    //console.log(vehicleValue, " ", engineleValue, " ", viscosityValue);
  };
  return (
    <>
      <div className="filter-oil-card-section">
        <form onSubmit={handleForm}>
          <Card className="filter-checkbox">
            <CardContent>
              <div className="vehicle-selection">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    borderBottom: "1px solid #ccc",
                    padding: "8px 0",
                    marginTop: "4px",
                    fontSize: FontSize.medium,
                    fontFamily: ThemeFontsFamily.Poppins,
                    fontWeight: ThemeFontWeight.Bold,
                    color: ThemeColors.ProductFilterCardTextColor,
                  }}
                >
                  Vehicle Type
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  sx={labelDivStyling}
                >
                  <label className="container-label">
                    Car
                    <input
                      type="checkbox"
                      value="car"
                      onChange={handleCheckedVehicle}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Typography>
                <Typography component="div" sx={labelDivStyling}>
                  <label className="container-label">
                    Truck
                    <input
                      type="checkbox"
                      value="truck"
                      onChange={handleCheckedVehicle}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  sx={labelDivStyling}
                >
                  <label className="container-label">
                    Motor Bike
                    <input
                      type="checkbox"
                      value="bike"
                      onChange={handleCheckedVehicle}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Typography>
              </div>
              <div className="engine-selection">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={headingStyling}
                >
                  Engine Type
                </Typography>
                <Typography component="div" sx={labelDivStyling}>
                  <label className="container-label">
                    Petrol
                    <input
                      type="checkbox"
                      value="petrol"
                      onChange={handleCheckedEngine}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Typography>
                <Typography component="div" sx={labelDivStyling}>
                  <label className="container-label">
                    Diesel
                    <input
                      type="checkbox"
                      value="diesel"
                      onChange={handleCheckedEngine}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Typography>
              </div>
              <div className="viscosity-selection">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={headingStyling}
                >
                  Viscosity
                </Typography>
                {viscosities.map((value, index) => {
                  return (
                    <div key={index}>
                      <Typography component="div" sx={labelDivStyling}>
                        <label className="container-label">
                          {value}
                          <input
                            type="checkbox"
                            value={value}
                            onChange={handleCheckedViscosity}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "column" }}>
              <button
                className="btn-go"
                onClick={() => {
                  updateCardsData(vehicleValue, engineleValue, viscosityValue);
                }}
              >
                GO
              </button>
              <button className="btn-clear-filter" onClick={clearCheckboxes}>
                Clear Filters
              </button>
            </CardActions>
          </Card>
        </form>
      </div>
    </>
  );
};

export default FilterOilCard;
