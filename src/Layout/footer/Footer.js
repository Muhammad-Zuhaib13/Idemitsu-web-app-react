import "./style.css";
import React from "react";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // const navigator=()=>{
  //   window.location.href="http://www.facebook.com"
  // }
  return (
    <Grid container>
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <footer>
          <div className="footer-container">
            <div className="footer-nav-container">
              <div className="footer-logo-text">
                <div className="footer-logo">
                  <img src={Logo} alt="Idemitsu" />
                </div>
                <div className="footer-text">
                  <p>The Trusted Choice of Leading Automakers Worldwide</p>
                </div>
              </div>
              <div className="footer-company-social-contacts">
                <div className="footer-company-details">
                  <div className="footer-cd-heading">
                    <h3>Company</h3>
                  </div>
                  <ul className="footer-cd-ul">
                    <li>
                      <NavLink to={""}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={""}>Global Network</NavLink>
                    </li>
                    <li>
                      <NavLink to={""}>Privacy Policy</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="footer-company-contact">
                  <div className="footer-cc-heading">
                    <h3>Contact</h3>
                  </div>
                  <ul className="footer-cc-ul">
                    <li>
                      <NavLink to={""}>Careers</NavLink>
                    </li>
                    <li>
                      <NavLink to={""}>Help/FAQ</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-social-contacts">
                <ul className="footer-sc-ul">
                  <li>
                    <a href="http://www.facebook.com" target="blank">
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.twitter.com" target="blank">
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.instagram.com" target="blank">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copy-right-text">
              <p>
                Copyright &copy; Idemitsu Kosan Co., Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </Grid>
    </Grid>
  );
};

export default Footer;
