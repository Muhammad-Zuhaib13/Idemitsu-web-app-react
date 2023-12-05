import "./style.css";
import React from "react";
import { Grid } from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Heading from "../../../../components/headings/Heading";

const Map = () => {
  // const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  const marker = [
    {
      markerOffset: "-15",
      name: "Sau Paulo",
      coordinates: [-58.3816, -34, 6037],
    },
    {
      markerOffset: "-15",
      name: "Melbourne",
      coordinates: [144.963, -37.8136],
    },
    {
      markerOffset: "25",
      name: "Dhaka",
      coordinates: [90.4125, 23.8103],
    },
    {
      markerOffset: "25",
      name: "San Francisco",
      coordinates: [-122.4194, 37, 7749],
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className="about-map-headings">
            <Heading title="overview" desc="Idemitsu Global activity" />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <div className="about-map-container">
            <ComposableMap data-tip="">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              {marker.map(({ markerOffset, name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={10} fill="#f00" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fill: "#5D5A6D" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Map;
