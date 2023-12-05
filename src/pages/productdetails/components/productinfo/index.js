import React from "react";
import "./style.css";
const ProductInfo = () => {
  return (
    <>
      <div className="product-details-table-section-two">
        <h2 className="product-details-table-heading">
          <span className="pdt-child">Physical</span>
          <span className="pdt-child"> &</span>
          <span className="pdt-child"> Chemical</span>
          <span className="pdt-child"> Industrial</span>
        </h2>
        <div className="product-details-table">
          <table className="pd-table-section">
            <thead>
              <tr colSpan="3">
                <th>Parameter</th>
                <th></th>
                <th></th>
                <th colSpan="3">Test Method</th>
                <th>Typical Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Viscosity Grade</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey"></td>
                <td colSpan="3">SAE</td>
                <td>0W-20</td>
              </tr>
              <tr>
                <td>ASTM Color</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey"></td>
                <td colSpan="3">D-1500</td>
                <td>Yellow Brown</td>
              </tr>
              <tr>
                <td>Density ( a 15’ C )</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey">g /cm3</td>
                <td colSpan="3">D-4052-96</td>
                <td>0.8460</td>
              </tr>
              <tr>
                <td>flash point (cOC)</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey">‘C</td>
                <td colSpan="3">D-92</td>
                <td>224</td>
              </tr>
              <tr>
                <td rowSpan="2">Viscosity</td>
                <td className="text-color-dark_grey">At 40’ C</td>
                <td className="text-color-dark_grey">mm2 / s</td>
                <td colSpan="3">d-445</td>
                <td>33.46</td>
              </tr>
              <tr>
                <td className="text-color-dark_grey">At 100’ C</td>
                <td className="text-color-dark_grey">mm2 / s</td>
                <td colSpan="3">d-445</td>
                <td>8.186</td>
              </tr>
              <tr>
                <td>Pour Point</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey">‘ C</td>
                <td colSpan="3">d-97</td>
                <td>-50</td>
              </tr>
              <tr>
                <td>Viscosity Index</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey"></td>
                <td colSpan="3">d-2270</td>
                <td>234</td>
              </tr>
              <tr>
                <td>Viscosity Index</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey"></td>
                <td colSpan="3">d-2270</td>
                <td>234</td>
              </tr>
              <tr>
                <td>Total base number, tBN</td>
                <td className="text-color-dark_grey"></td>
                <td className="text-color-dark_grey">MgKOH /G</td>
                <td colSpan="3">D-2896-96</td>
                <td>9.59</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
