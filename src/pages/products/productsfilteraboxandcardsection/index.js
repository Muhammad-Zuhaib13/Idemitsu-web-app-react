import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductsFilterSection from "./productfiltercard/index";
import ProductCard from "./productscard/index";
import Data from "./test_data.json";

const ProductsSection = () => {
  const [oilCardsData, setOilCardsData] = useState(Data);
  const filterArrayOfObjects = (arrOfObjects, searchStrings) => {
    const filteredArray = [];
    const lowercaseSearchStrings = searchStrings.map((str) =>
      str.toLowerCase()
    );
    for (const obj of arrOfObjects) {
      const matched = lowercaseSearchStrings.some((searchStr) => {
        for (const prop in obj) {
          if (obj[prop].toString().toLowerCase()===searchStr) {
            return true;
          }
        }
        return false;
      });

      if (matched) {
        filteredArray.push(obj);
      }
    }

    return filteredArray;
  };
  const updateCardsData = (vehicleType, engineType, viscosityType) => {
    if (
      vehicleType.length === 0 &&
      engineType.length === 0 &&
      viscosityType.length === 0
    ) {
      return setOilCardsData(Data);
    } else if (
      vehicleType.length !== 0 &&
      engineType.length !== 0 &&
      viscosityType.length === 0
    ) {
      const searchVehicle = filterArrayOfObjects(Data, vehicleType);
      const firstSearch = [...searchVehicle];

      const searchEngine = filterArrayOfObjects(firstSearch, engineType);
      const secondSearch = [...searchEngine];
      setOilCardsData(secondSearch);
    } else if (
      vehicleType.length === 0 &&
      engineType.length !== 0 &&
      viscosityType.length !== 0
    ) {
      const searchEngine = filterArrayOfObjects(Data, engineType);
      const firstSearch = [...searchEngine];

      const searchViscosity = filterArrayOfObjects(firstSearch, viscosityType);
      const secondSearch = [...searchViscosity];
      setOilCardsData(secondSearch);
    } else if (
      vehicleType.length !== 0 &&
      engineType.length === 0 &&
      viscosityType.length !== 0
    ) {
      const searchVehicle = filterArrayOfObjects(Data, vehicleType);
      const firstSearch = [...searchVehicle];

      const searchViscosity = filterArrayOfObjects(firstSearch, viscosityType);
      const secondSearch = [...searchViscosity];
      setOilCardsData(secondSearch);
    } else if (
      vehicleType.length !== 0 &&
      engineType.length === 0 &&
      viscosityType.length === 0
    ) {
      const searchVehicle = filterArrayOfObjects(Data, vehicleType);
      const firstSearch = [...searchVehicle];
      setOilCardsData(firstSearch);
    } else if (
      vehicleType.length !== 0 &&
      engineType.length === 0 &&
      viscosityType.length === 0
    ) {
      const searchVehicle = filterArrayOfObjects(Data, vehicleType);
      const firstSearch = [...searchVehicle];
      setOilCardsData(firstSearch);
    } else if (
      vehicleType.length === 0 &&
      engineType.length !== 0 &&
      viscosityType.length === 0
    ) {
      const searchEngine = filterArrayOfObjects(Data, engineType);
      const firstSearch = [...searchEngine];
      setOilCardsData(firstSearch);
    }
    else if (
      vehicleType.length === 0 &&
      engineType.length === 0 &&
      viscosityType.length !== 0
    ) {
      const searchViscosity = filterArrayOfObjects(Data, viscosityType);
      const firstSearch = [...searchViscosity];
      setOilCardsData(firstSearch);
    }

    else {
      const searchVehicle = filterArrayOfObjects(Data, vehicleType);
      const firstSearch = [...searchVehicle];

      const searchEngine = filterArrayOfObjects(firstSearch, engineType);
      const secondSearch = [...searchEngine];

      const result = filterArrayOfObjects(secondSearch, viscosityType);
      setOilCardsData(result);
    }
  };

  useEffect(() => {
  }, [oilCardsData]);

  return (
    <Grid container py={4}>
      <Grid item lg={3} md={4} sm={4} xs={12}>
        <ProductsFilterSection
          updateCardsData={updateCardsData}
          Data={Data}
          setOilCardsData={setOilCardsData}
        />
      </Grid>
      <Grid item lg={9} md={8} sm={8} xs={12}>
        <ProductCard oilCardsData={oilCardsData} />
      </Grid>
    </Grid>
  );
};

export default ProductsSection;
