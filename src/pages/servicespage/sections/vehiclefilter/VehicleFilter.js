import "./style.css";
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import {
  ThemeColors,
  ThemeFontsFamily,
  ThemeFontWeight,
  FontSize,
} from "../../../../utils/Theme";
import Data from "./store_data.json";
import Img from "../../../../images/product-img-01.jpg";
import ImgOne from "../../../../images/engine-1.png";
import ImgTwo from "../../../../images/engine-2.png";
import ImgThree from "../../../../images/engine-oil-2.png";
import ServicesResultCard from "./resultcard";
import Buttons from "../../../../components/button/Buttons";
import SelectField from "../../../../components/reactselect";
const VehicleFilter = () => {
  const storeData = Data;
  const vehicleTypes = [
    ...new Set(storeData.map((item) => item[0].vehicle_type).sort()),
  ];
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMakers, setVehicleMakers] = useState([]);
  const [vehicleMaker, setVehicleMaker] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleModels, setVehicleModels] = useState([]);
  const [vehicleModif, setVehicleModif] = useState("");
  const [vehicleModifs, setVehicleModifs] = useState([]);
  const [vehicleOil, setVehicleOil] = useState([]);

  const getVehicleMakes = (data, { value: search }) => {
    const filteredData = data.filter((item) => item[0].vehicle_type === search);
    return [...new Set(filteredData.map((item) => item[0].vehicle_make))];
  };

  const getVehicleModels = (
    data,
    { value: vehicleType },
    { value: vehicleMaker }
  ) => {
    let filteredData = data.filter(
      (item) => item[0].vehicle_type === vehicleType
    );
    if (vehicleMaker !== "") {
      filteredData = filteredData.filter(
        (item) => item[0].vehicle_make === vehicleMaker
      );
    }
    return filteredData.map((item) => item[0].vehicle_model);
  };

  const getVehicleModifications = (
    data,
    { value: vehicleType },
    { value: vehicleMaker },
    { value: vehicleModel }
  ) => {
    var filteredData = data.filter(
      (item) => item[0].vehicle_type === vehicleType
    );
    if (vehicleMaker !== "") {
      filteredData = filteredData.filter(
        (item) => item[0].vehicle_make === vehicleMaker
      );
    }
    if (vehicleModel !== "") {
      filteredData = filteredData.filter(
        (item) => item[0].vehicle_model === vehicleModel
      );
    }
    return filteredData.flatMap((item) =>
      item[0].vehicle_modification.map((mod) => mod.vehicle_engine)
    );
  };

  useEffect(() => {
    setVehicleMakers(getVehicleMakes(storeData, vehicleType));
    setVehicleMaker("");
    setVehicleModels([]);
    setVehicleModel("");
  }, [storeData, vehicleType]);

  useEffect(() => {
    if (vehicleType && vehicleMaker) {
      setVehicleModels(getVehicleModels(storeData, vehicleType, vehicleMaker));
    } else {
      setVehicleModels([]);
    }
    setVehicleModel("");
  }, [storeData, vehicleType, vehicleMaker]);

  useEffect(() => {
    if (vehicleType && vehicleMaker && vehicleModel) {
      setVehicleModifs(
        getVehicleModifications(
          storeData,
          vehicleType,
          vehicleMaker,
          vehicleModel
        )
      );
    } else {
      setVehicleModifs([]);
    }
  }, [storeData, vehicleType, vehicleMaker, vehicleModel]);

  const getVehicleOil = (
    data,
    {value:vehicleType},
    {value:vehicleMaker},
    {value:vehicleModel},
    {value:vehicleModif}
  ) => {
    const filteredData = data.filter(
      (item) =>
        item[0].vehicle_type === vehicleType &&
        item[0].vehicle_make === vehicleMaker &&
        item[0].vehicle_model === vehicleModel
    );

    if (filteredData.length > 0) {
      const vehicleModifData = filteredData[0][0].vehicle_modification.find(
        (mod) => mod.vehicle_engine === vehicleModif
      );
      if (vehicleModifData) {
        setVehicleOil(vehicleModifData.vehicle_oil || []);
      } else {
        setVehicleOil([]);
      }
    } else {
      setVehicleOil([]);
    }
  };

  const handleVehicle = (selectedVehicle) => {
    setVehicleType(selectedVehicle);
    setVehicleModif("");
    setVehicleOil([]);
  };

  const handleMaker = (selectedMaker) => {
    setVehicleMaker(selectedMaker);
    setVehicleModif("");
    setVehicleOil([]);
  };

  const handleModel = (selectedModel) => {
    setVehicleModel(selectedModel);
    setVehicleModif("");
    setVehicleOil([]);
  };

  const handleModification = (selectedModif) => {
    setVehicleModif(selectedModif);
    setVehicleOil([]);
  };

  const handleGetVehicleOil = () => {
    getVehicleOil(
      storeData,
      vehicleType,
      vehicleMaker,
      vehicleModel,
      vehicleModif
    );
  };

  useEffect(() => {
    // console.log(vehicleOil);
  }, [vehicleOil]);
  // console.log(vehicleMakers);
  return (
    <Grid container>
      <Grid item lx={12} lg={12} md={12} xs={12} sm={12}>
        <div className="services-product-filter">
          <div className="services-filter-imgs">
            <div className="services-img-group">
              <div className="services-img">
                <img src={ImgOne} alt="VehicleImg" />
              </div>
            </div>
            <div className="services-img-group">
              <div className="services-img">
                <img src={ImgTwo} alt="VehicleImg" />
              </div>
              <div className="services-img">
                <img src={ImgThree} alt="VehicleImg" />
              </div>
            </div>
          </div>
          <div className="service-search-main">
            <div className="services-chose-oil-heading">
              <div>
                <Typography
                  mb={2}
                  color={ThemeColors.BlackHeading}
                  sx={{
                    fontFamily: ThemeFontsFamily.Volkhov,
                    fontWeight: ThemeFontWeight.Bold,
                    fontSize: FontSize.Headings,
                    letterSpacing: "1.5px",
                  }}
                  variant="h1"
                >
                  CHOSE THE OIL
                </Typography>
              </div>
              <div>
                <Typography
                  mb={3}
                  color={ThemeColors.MainHeadings}
                  sx={{
                    fontFamily: ThemeFontsFamily.Volkhov,
                    fontWeight: ThemeFontWeight.Bold,
                    fontSize: FontSize.desc,
                    letterSpacing: "1.5px",
                  }}
                  variant="h1"
                >
                  FOR YOUR VEHICLE
                </Typography>
              </div>
            </div>
            <div className="service-search">
              <div className="searching-section-services">
                <div className="filter-search-field">
                  <SelectField
                    placeholder={"Vehicle Type"}
                    handleChange={handleVehicle}
                    optionsList={vehicleTypes}
                    isDisabled={false}
                    bgColor={"#E7E7E7"}
                    value={vehicleType}
                  />
                </div>
                <div className="filter-search-field">
                  <SelectField
                    placeholder={"Vehicle Make"}
                    handleChange={handleMaker}
                    optionsList={vehicleMakers}
                    isDisabled={vehicleMakers.length === 0 ? true : false}
                    bgColor={"#E7E7E7"}
                    value={vehicleMaker}
                  />
                </div>
                <div className="filter-search-field">
                  <SelectField
                    placeholder={"Vehicle Model"}
                    handleChange={handleModel}
                    optionsList={vehicleModels}
                    isDisabled={vehicleModels.length === 0 ? true : false}
                    bgColor={"#E7E7E7"}
                    value={vehicleModel}
                  />
                </div>
                <div className="filter-search-field">
                  <SelectField
                    placeholder={"Vehicle Modification"}
                    handleChange={handleModification}
                    optionsList={vehicleModifs}
                    isDisabled={vehicleModifs.length === 0 ? true : false}
                    bgColor={"#E7E7E7"}
                    value={vehicleModif}
                  />
                </div>
                <div className="filter-search-btn">
                  <Buttons
                    buttonText={"Pick Up Oil"}
                    onClick={handleGetVehicleOil}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ServicesResultCard
          vehicleOil={vehicleOil}
          vehicleModif={vehicleModif.label}
          Img={Img}
        />
      </Grid>
    </Grid>
  );
};

export default VehicleFilter;
