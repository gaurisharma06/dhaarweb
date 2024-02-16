import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemPanel,
//   AccordionItemButton,
// } from "react-accessible-accordion";

// import ServicesDetails1 from "../assets/images/services-details-image/services-details1.png";
// import ServicesDetails2 from "../assets/images/services-details-image/services-details2.png";
import ServiceImage1 from "../assets/images/services-image/service-image1.png";
import ServiceImage2 from "../assets/images/services-image/service-image2.png";
import Partner from "../components/Common/Partner";

const ADAS = () => (
  <Layout>
    <SEO title="ADAS" />

    <Navbar />

    <PageBanner pageTitle="ADAS" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>ADAS</h3>
              <p>
              Advanced Driver-Assistance System (ADAS) is continuously developing technology with increase interest in Autonomus Driving. 
              </p>
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServiceImage1}
              className="animate__animated animate__fadeInUp"
              alt="image"
            />
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <img
              src={ServiceImage2}
              className="animate__animated animate__fadeInUp"
              alt="image"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
            <p>
              We brings our experties of multiple ADAS feature like Alcohol ignition interlock devices, Driver monitoring system, Driver drowsiness detection, ALDW, ABS, ACC, and many more witch are relies on multiple data sources, including automotive imaging, LiDAR, radar, image processing, computer vision, and in-car networking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default ADAS;
