import React from "react";
import "./style.css"
const ContactCard = ({
  fontawesomeicon = "fa-sharp fa-solid fa-phone",
  title = "Contact Us On",
  text = "911-987654321",
}) => {
  return (
    <>
      <div className="contact-card">
        <div className="contact-card-icon-img">
          <i className={fontawesomeicon}></i>
        </div>
        <div className="contact-card-text-body">
          <h4>{title}:</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
