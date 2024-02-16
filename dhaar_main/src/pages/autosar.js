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
import ServiceImage4 from "../assets/images/services-image/service-image4.png";
import ServiceImage5 from "../assets/images/services-image/service-image5.png";
import Partner from "../components/Common/Partner";

const Autosar = () => (
  <Layout>
    <SEO title="AUTOSAR" />

    <Navbar />

    <PageBanner pageTitle="AUTOSAR" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>Basic Overview</h3>
              <h3>BSW:</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    MCAL
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    ECAL
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Service Layer
                  </div>
                </div>
              </div>
              {/* <ul
                className="features-details-list"
                style={{ marginBottom: "20px" }}
              >
                <li>MCAL</li>
                <li>ECAL</li>
                <li>Service Layer</li>
              </ul> */}

              <h3 style={{ marginTop: "20px" }}>RTE:</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Virtual Function Bus
                  </div>
                </div>
              </div>
              {/* <ul
                className="features-details-list"
                style={{ marginBottom: "20px" }}
              >
                <li>Virtual Function Bus</li>
              </ul> */}
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServiceImage4}
              className="animate__animated animate__fadeInUp"
              alt="autosar details"
            />
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <img
              src={ServiceImage5}
              className="animate__animated animate__fadeInUp"
              alt="autosar fold 2"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>ASW</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Sender/Receiver
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Ports
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Client/Server Ports
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Runnable
                  </div>
                </div>
              </div>
              {/* <ul
                className="features-details-list"
                style={{ marginBottom: "20px" }}
              >
                <li>Sender/Receiver</li>
                <li>Ports</li>
                <li>Client/Server Ports</li>
                <li>Runnable</li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>AutoSar Services</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    AutoSar OS Task , Scheduling Configuration, Multicore OS Concept.
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    DEM, DCM, CDD(Tel-Tel Lemp, Chime, etc), 
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Complete COM STACK Configuration for LIN, CAN, Fr, ETH.
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Complience to Autosar specification and ECU development based on Customer requirement.
                  </div>
                </div>
              </div>
              {/* <ul
                className="features-details-list"
                style={{ marginBottom: "20px" }}
              >
                <li>Sender/Receiver</li>
                <li>Ports</li>
                <li>Client/Server Ports</li>
                <li>Runnable</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default Autosar;
