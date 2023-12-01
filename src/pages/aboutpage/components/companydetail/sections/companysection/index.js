import React from "react";
import "./style.css";
const CompanyDetails = () => {
  return (
    <>
      <div className="company-details-container">
        <div className="company-details">
          <div className="company-details-left-card">
            <div className="cd-left-card-heading">
              <h4>Company Details</h4>
            </div>
            <div className="cd-left-card-ul">
              <ul>
                <li>
                  <div className="cd-left-card-details">
                    <h5>Company CEO :</h5>
                    <p>Katherine Coleman</p>
                  </div>
                </li>
                <li>
                  <div className="cd-left-card-details">
                    <h5>Address :</h5>
                    <p>New York United States</p>
                  </div>
                </li>
                <li>
                  <div className="cd-left-card-details">
                    <h5>Established :</h5>
                    <p>15 September ,2023</p>
                  </div>
                </li>
                <li>
                  <div className="cd-left-card-details">
                    <h5>Websites :</h5>
                    <p><a href="http://whitecollar.com">http://whitecollar.com</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="company-details-right-card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
              sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
              pharetra.
              <br />
              <br /> Donec vel egestas dolor, nec dignissim metus. Donec augue
              elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet
              rutrum libero sed pharetra. Duis a arcu convallis, gravida purus
              eget, mollis diam.
            </p>
            <ul>
              <li>Lorem Ipsum has been the industry's standard</li>
              <li>Lorem Ipsum has been the industry's standard</li>
              <li>Lorem Ipsum has been the industry's standard</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
