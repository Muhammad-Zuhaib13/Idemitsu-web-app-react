import "./style.css";
import React, { useState } from "react";
import { Grid } from "@mui/material";

const StoreLocator = () => {
  const [storeSearch, setStoreSearch] = useState("");
  const [productSearch, setProductSearch]=useState("")
  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    if(name==="store_search"){
      setStoreSearch(value)
    }
    else if(name==="product_search"){
      setProductSearch(value)
    }
  }
  const handleValue = (query)=>{
    console.log(query)
  } 
  return (
    <Grid container> 
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="store-product-search">
          <div className="store-product-search-heading">
            <h2>how we can help you?</h2>
          </div>
          <div className="store-product-search-inputs">
            <div className="store-locator">
              <input type="text" name="store_search" value={storeSearch} onChange={handleInputChange} id="" placeholder="Store Locator" />
              <button className="store-locator-btn" onClick={()=>{handleValue(storeSearch)}}>
              <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
            <p>or</p>
            <div className="product-search">
              <input type="text" name="product_search" id="" value={productSearch} onChange={handleInputChange} placeholder="Product Search" />
              <button className="product-search-btn" onClick={()=>{handleValue(productSearch)}}>
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default StoreLocator;
