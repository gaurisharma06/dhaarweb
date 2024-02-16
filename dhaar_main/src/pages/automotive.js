import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import { Link } from "gatsby";

// Service Images
// import ServiceImage1 from "../assets/images/services-image/service-image1.png";
// import ServiceImage2 from "../assets/images/services-image/service-image2.png";
// import ServiceImage3 from "../assets/images/services-image/service-image3.png";
import ServiceImage4 from "../assets/images/services-image/service-image4.png";
import ServiceImage5 from "../assets/images/services-image/service-image5.png";
import ServiceImage6 from "../assets/images/services-image/service-image6.png";

// Shape Images
import Shape1 from "../assets/images/shape1.png";
import Shape2 from "../assets/images/shape2.svg";
import Shape3 from "../assets/images/shape3.svg";
import Shape4 from "../assets/images/shape4.svg";

// Automotive Images
import AutomotiveImage1 from "../assets/images/services-image/automotive-1.jpg";
import AutomotiveImage2 from "../assets/images/services-image/automotive-2.jpg";
import AutomotiveImage3 from "../assets/images/services-image/automotive-3.jpg";
import Partner from "../components/Common/Partner";

const Automotive = () => (
  <Layout>
    <SEO title="Automotive Embedded Software Services" />

    <Navbar />

    <PageBanner pageTitle="Automotive Embedded Software Services" />

    <div className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          {/* <span className="sub-title">Our Solutions</span> */}
          <h2>Our Expertise</h2>
          <div className="bar"></div>
          <p>
          We believe in learning. That is what make us outstanding. our domain expertise are result of decade of hardwork, learnings, practicing and delivering best results. 
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={AutomotiveImage1} alt="ADAS" />
              </div>
              <h3>
                <Link to="/adas">ADAS</Link>
              </h3>
              {/* <p>
              Advanced Driver-Assistance System (ADAS) is continuously developing technology with increase interest in Autonomus Driving. 
We brings our experties of multiple ADAS feature like Alcohol ignition interlock devices, Driver monitoring system, Driver drowsiness detection, ALDW, ABS, ACC, and many more witch are relies on multiple data sources, including automotive imaging, LiDAR, radar, image processing, computer vision, and in-car networking.
              </p> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={AutomotiveImage2} alt="Functional Safety" />
              </div>
              <h3>
                <Link to="/functional-safety">
                  Functional Safety (FuSa:ISO26262)
                </Link>
              </h3>
              {/* <p>
              We can rake care of End-To-End complience of Automotive Software, With strong process undertanding of HARA, HAZOP, DFA, SA, ASIL clasification, 
              </p> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={AutomotiveImage3} alt="AUTOSAR" />
              </div>
              <h3>
                <Link to="/autosar">AUTOSAR</Link>
              </h3>
              {/* <p>
                  Basic Overview
                  <ul>
                    <li>BSW – MCAL, ECAL,Service Layer.</li>
                    <li>RTE – Virtual Function Bus</li>
                    <li>ASW – Sender/Receiver, Ports, Client/Server Ports, Runnable.</li>
                    <li>AutoSar OS Task , Scheduling Configuration, Multicore OS Concept.</li>
                    <li>DEM, DCM, CDD(Tel-Tel Lemp, Chime, etc), </li>
                    <li>Complete COM STACK Configuration for LIN, CAN, Fr, ETH.</li>
                    <li>Complience to Autosar specification and ECU development based on Customer requirement.</li>
                  </ul>
              </p> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage4} alt="Communication Protocols" />
              </div>
              <h3>
                <Link to="/communication-protocols">
                  Communication Protocols
                </Link>
              </h3>
              {/* <p>
                <ul>
                  <li>>Driver Development for CAN, LIN, FlexRay, SPI, MOST, I2C, </li>
•        COM Stack develoment as per Autosar specification for various protocols
•        Validation and Varification of COM modules.
•        Tx and Rx Frame
                </ul>
              </p> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage5} alt="Automation and Validation" />
              </div>
              <h3>
                <Link to="/automation-and-validation">
                  Automation and Validation
                </Link>
              </h3>
              {/* <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p> */}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage6} alt="UDS and OBD" />
              </div>
              <h3>
                <Link to="/uds-and-obd">UDS and OBD</Link>
              </h3>
              {/* <p>
                Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
      <div className="shape3">
        <img src={Shape3} alt="shape" />
      </div>
      <div className="shape4">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape7">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default Automotive;
