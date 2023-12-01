import React, { useState } from "react";
import "./style.css";
import SelectField from "../../../../components/reactselect";
import ProductImgsThumbSlider from "./thumbslider";
const BuyAddtoCart = () => {
  const [dataliter, setDataLiter] = useState("");
  const optionsLiter = ["2 Liter", "3 Liter", "4 Liter"];
  const handleLiter = (selectedLiter) => {
    setDataLiter(selectedLiter);
  };
  return (
    <>
      <div className="product-add-to-cart-section-one">
        <div className="product-add-to-cart-container">
          <div className="product-add-to-cart-top">
            <div className="product-add-to-cart-imgs-slider">
              <ProductImgsThumbSlider />
            </div>
            <div className="product-add-to-cart-details">
              <div className="cart-product-heading">
                <h2>IDEMITSU 5W-30W</h2>
                <h4>
                  <span>In-Stock</span>
                </h4>
              </div>
              <div className="cart-product-price">
                <p>
                  <span className="cp-heading">price: </span>
                  <span className="cp-total">XX.XX</span>
                </p>
              </div>
              <div className="cart-product-qty">
                <div className="cp-qty-counter">
                  <p>Quantity:</p>
                  <div className="cp-qty-counter-group">
                    <button className="cp-qty-counter-dec">-</button>
                    <input
                      className="cp-qty-counter-input"
                      type="text"
                      readOnly
                      value="02"
                    />
                    <button className="cp-qty-counter-inc">+</button>
                  </div>
                </div>
                <div className="cp-qty-liter">
                  <p>Liter:</p>
                  <SelectField
                    placeholder={"2 Liter"}
                    handleChange={handleLiter}
                    optionsList={optionsLiter}
                    isDisabled={false}
                    value={dataliter}
                    border={"1px solid #D0D0D0"}
                    height={"48px"}
                    bgColor={"#fff"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="product-add-to-cart-bottom">
            <h2>Product Description</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyAddtoCart;
