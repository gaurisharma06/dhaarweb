import React from "react";
import * as Icon from "react-feather";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";

// import ServicesDetails1 from "../assets/images/services-details-image/services-details1.png";
// import ServicesDetails2 from "../assets/images/services-details-image/services-details2.png";
// import ServiceImage1 from "../assets/images/services-image/service-image1.png";
// import ServiceImage2 from "../assets/images/services-image/service-image2.png";
// import ServiceImage3 from "../assets/images/services-image/service-image3.png";
import ServiceImage6 from "../assets/images/services-image/service-image6.png";
import Partner from "../components/Common/Partner";

const AutomationAndValidation = () => (
  <Layout>
    <SEO title="Automation and Validation" />

    <Navbar />

    <PageBanner pageTitle="Automation and Validation" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>Tools:</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    CANoe/CANalyzer
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    VehicleSpy
                  </div>
                </div>
              </div>
              {/* <ol
                className="features-details-list"
                style={{ marginBottom: "20px" }}
              >
                <li>CANoe/CANalyzer</li>
                <li>VehicleSpy</li>
              </ol> */}
              <h3 style={{ marginTop: "20px" }}>Scripts</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    CAPL
                  </div>
                </div>
              </div>
              {/* <ol
                className="features-details-list"
                style={{ marginBottom: "20px" }}
              >
                <li>CAPL</li>
              </ol> */}
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServiceImage6}
              className="animate__animated animate__fadeInUp"
              alt="UDS and OBD details"
            />
          </div>
        </div>

        <div className="separate"></div>

        {/* <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails2}
              className="animate__animated animate__fadeInUp"
              alt="UDS and OBD fold 2"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc"></div>
          </div>
        </div> */}
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default AutomationAndValidation;
