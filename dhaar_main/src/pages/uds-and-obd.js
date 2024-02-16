import React from "react";
import * as Icon from "react-feather";
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
import Partner from "../components/Common/Partner";

const UdsAndObd = () => (
  <Layout>
    <SEO title="UDS and OBD" />

    <Navbar />

    <PageBanner pageTitle="UDS and OBD" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Diagnostics Session Controle [0x10]
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Security Access [0x27]
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Rad DTC [0x19] and Freeze Frame Data
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    RDBI [0x22] and WDBI [0x2E]
                  </div>
                </div>
              </div>

              {/* <h3>Diagnostics Session Controle [0x10]</h3>
              <h3>Security Access [0x27]</h3>
              <h3>Rad DTC [0x19] and Freeze Frame Data</h3>
              <h3>RDBI [0x22] and WDBI [0x2E]</h3> */}
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServiceImage1}
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

export default UdsAndObd;
