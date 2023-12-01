import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import {
  ThemeColors,
  ThemeFontsFamily,
  ThemeFontWeight,
  FontSize,
} from "../../../../../utils/Theme";
import "./style.css";
import Iframe from "react-iframe";
import Buttons from "../../../../../components/button/Buttons";
import SelectField from "../../../../../components/reactselect";
const RetailStore = (props) => {
  const { jsonData, storeType } = props;
  const storeData = jsonData;
  const [selectedCountry, setselectedCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedShops, setSelectedShops] = useState([]);
  const [selectedAreaMap, setSelectedAreaMap] = useState("");
  const uniqueCountries = [
    ...new Set(
      storeData
        .map((country) => {
          const store = country[0];
          return store.country;
        })
        .sort()
    ),
  ];

  const filterByCountry = (data, {value : countryName}) => {
    const filteredArray = data.filter(
      (item) => item[0].country === countryName
    );
    return filteredArray;
  };

  const handleCountry = (selectedCountry) => {
    setselectedCountry(selectedCountry);
    setSelectedCity("");
    setSelectedArea("");
    setSelectedShops([]);
    setSelectedAreaMap("");
  };
  const handleCity = (selectedCity) => {
    setSelectedCity(selectedCity);
    setSelectedArea("");
    setSelectedShops([]);
    setSelectedAreaMap("");
  };

  const handleArea = (selectedArea) => {
    setSelectedShops([]);
    setSelectedAreaMap("");
    setSelectedArea(selectedArea);
  };

  useEffect(() => {
    setFilterCountry(filterByCountry(storeData, selectedCountry));
  }, [storeData, selectedCountry]);

  useEffect(() => {
    const cities = filterCountry.map((countryData) => countryData[0].city_name);
    setSelectedCity("");
    setSelectedAreas([]);
    setSelectedAreaMap("");
    setSelectedCities(cities);
  }, [filterCountry]);

  useEffect(() => {
    if (selectedCity) {
      const cityData = filterCountry.find(
        (countryData) => countryData[0].city_name === selectedCity.value
      );

      if (cityData && cityData[0].areas) {
        const areasArray = cityData[0].areas.map(
          (areaObj) => areaObj.area_name
        );
        setSelectedAreas(areasArray);
      } else {
        setSelectedAreas([]);
        setSelectedAreaMap("");
      }
    }
  }, [selectedCity, filterCountry]);
  const handleSearchList = () => {
    
    if (selectedCountry.value && selectedCity.value && selectedArea.value) {
      const cityData = storeData.find(
        (countryData) => countryData[0].city_name === selectedCity.value
      );

      if (cityData && cityData[0].areas) {
        const selectedAreaData = cityData[0].areas.find(
          (area) => area.area_name === selectedArea.value
        );

        if (selectedAreaData && selectedAreaData.shops) {
          setSelectedShops(selectedAreaData.shops);
          setSelectedAreaMap(selectedAreaData.stores_google_map);
        } else {
          setSelectedShops([]);
          setSelectedAreaMap("");
        }
      } else {
        setSelectedShops([]);
        setSelectedAreaMap("");
      }
    } else {
      setSelectedShops([]);
      setSelectedAreaMap("");
    }
    //console.log(selectedCountry.value, " ", selectedCity.value, " ", selectedArea.value  )
  };
  const [selectedOption, setSelectedOption] = useState("listView");
  const handleOptionChangeView = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="main-search-container">
        <div className="searching-section-where">
          <div className="filter-search-field">
            <SelectField
              placeholder={"Country"}
              handleChange={handleCountry}
              optionsList={uniqueCountries}
              isDisabled={false}
            />
          </div>
          <div className="filter-search-field">
          <SelectField
              placeholder={"City"}
              handleChange={handleCity}
              optionsList={selectedCities}
              value={selectedCity}
              isDisabled={selectedCities.length === 0 ? true: false}
            />
            {/* {selectedCities.length === 0 ? (
              <SearchField
                selectName={"cities"}
                value={selectedCity}
                handleChange={handleCity}
                defaultOption={"City"}
                selectOptions={selectedCities}
                disabled={true}
                bgColor={"#f9f9f9"}
              />
            ) : (
              <SearchField
                selectName={"cities"}
                value={selectedCity}
                handleChange={handleCity}
                defaultOption={"City"}
                selectOptions={selectedCities}
                disabled={false}
                bgColor={"#f9f9f9"}
              />
            )} */}
          </div>
          <div className="filter-search-field">
          <SelectField
              placeholder={"Area/Town/District"}
              handleChange={handleArea}
              optionsList={selectedAreas}
              value={selectedArea}
              isDisabled={selectedAreas.length === 0 ? true: false}
              
            />
            {/* {selectedAreas.length === 0 ? (
              <SearchField
                selectName={"area"}
                value={selectedArea}
                handleChange={handleArea}
                defaultOption={"Area/Town/District"}
                selectOptions={selectedAreas}
                disabled={true}
                bgColor={"#f9f9f9"}
              />
            ) : (
              <SearchField
                selectName={"area"}
                value={selectedArea}
                handleChange={handleArea}
                defaultOption={"Area/Town/District"}
                selectOptions={selectedAreas}
                disabled={false}
                bgColor={"#f9f9f9"}
              />
            )} */}
          </div>
          <div className="filter-search-btn">
            <Buttons buttonText={"Search Now"} onClick={handleSearchList} />
          </div>
        </div>
        <div className="search-results">
          <div className="store-details">
            <div className="store-result-hr">
              <Typography
                mt={2}
                // className='title'
                color={ThemeColors.BlackHeading}
                sx={{
                  fontFamily: ThemeFontsFamily.Volkhov,
                  fontWeight: ThemeFontWeight.SemiBold,
                  fontSize: FontSize.xxxlarge,
                  marginLeft: "12px",
                }}
                component="div"
                variant="h5"
              >
                IDEMITSU {storeType}
              </Typography>
              <div className="change-view-radio-btn">
                <label>
                  <input
                    type="radio"
                    value="listView"
                    checked={selectedOption === "listView"}
                    onChange={handleOptionChangeView}
                  />
                  <span className="list-label">List View</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="mapView"
                    checked={selectedOption === "mapView"}
                    onChange={handleOptionChangeView}
                  />
                  <span className="map-label">Map View</span>
                </label>
              </div>
            </div>
            {selectedOption === "listView" ? (
              selectedShops.map((shop, index) => {
                return (
                  <div className="store-details-list" key={index}>
                    <div>
                      <div>
                        <Typography
                          mt={1}
                          // className='title'
                          color={ThemeColors.ShopName}
                          sx={{
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.SemiBold,
                            fontSize: FontSize.xlarge,
                          }}
                          variant="h5"
                        >
                          {shop.shop_name}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          mt={1}
                          // className='title'
                          color={ThemeColors.ShopName}
                          sx={{
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.Medium,
                            fontSize: FontSize.regular,
                          }}
                          variant="h5"
                        >
                          {shop.shop_location}
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Typography
                          mt={1}
                          // className='title'
                          color={ThemeColors.ShopName}
                          sx={{
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.Medium,
                            fontSize: FontSize.regular,
                          }}
                          variant="h5"
                        >
                          {selectedCity.label}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          mt={1}
                          // className='title'
                          color={ThemeColors.ShopName}
                          sx={{
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.Medium,
                            fontSize: FontSize.regular,
                          }}
                          variant="h5"
                        >
                          {selectedCountry.label}
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Button
                          className="button"
                          variant="contained"
                          sx={{
                            backgroundColor: ThemeColors.GreenButtonColor,
                            borderRadius: "30px",
                            padding: "10px 15px",
                            color: ThemeColors.White,
                            fontFamily: ThemeFontsFamily.Poppins,
                            fontWeight: ThemeFontWeight.Regular,
                            fontSize: FontSize.regular,
                            textTransform: "none",
                            "&.MuiButton-root:hover": {
                              backgroundColor: ThemeColors.GreenButtonColor,
                            },
                          }}
                        >
                          Get Direction
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="google-map">
                {selectedAreaMap ? (
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <Iframe
                        id="gmap_canvas"
                        url={selectedAreaMap}
                        frameborder="0"
                        scrolling="no"
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RetailStore;
