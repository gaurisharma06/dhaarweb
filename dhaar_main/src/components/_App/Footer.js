import React from "react";
import { Link } from "gatsby";
import * as Icon from "react-feather";

import Logo from "../../assets/images/logo.png";
import MapImg from "../../assets/images/map.png";
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area bg-0a1828">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <p className="color-white">
                DHAAR Labs is a result oriented organisation with domain
                expertise of Automotive, IOT, Embedded.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3 className="color-white">Company</h3>
              <ul className="list">
                <li>
                  <Link to="/automotive">Automotive</Link>
                </li>
                <li>
                  <Link to="/iot">IoT</Link>
                </li>
                <li>
                  <Link to="/engineering-services">Engineering Services</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3 className="color-white">Quick Links</h3>
              <ul className="list">
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                {/* <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/term-condition">Terms & Condition</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3 className="color-white">Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  BTM 2nd Stage, <br />
                  Bangalore Karnataka 560076
                </li>
                <li>
                  <Icon.Mail />
                  Email:{" "}
                  <Link to="mailto:dhaar.hr@gmail.com">dhaar.hr@gmail.com</Link>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Phone: <Link to="tel:7827562201">7827562201</Link>
                </li>
              </ul>

              <ul className="social-links">
                {/* <li>
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer"><Icon.Facebook /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter" target="_blank" rel="noreferrer"><Icon.Twitter /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noreferrer"><Icon.Instagram /></a>
                                </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/hr-dhaar-labs-78b569199/"
                    className="linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p className="color-white">
                Copyright &copy; {currentYear} Dhaar Labs. All rights reserved
                by{" "}
                <a href="https://dhaarlabs.com/" target="_blank" rel="noreferrer">
                  Dhaar Labs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src={MapImg} className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </footer>
  );
};

export default Footer;
