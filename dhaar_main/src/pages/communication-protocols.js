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

import ServicesDetails1 from "../assets/images/services-details-image/services-details1.png";
// import ServicesDetails2 from "../assets/images/services-details-image/services-details2.png";
import Partner from "../components/Common/Partner";

const CommunicationProtocols = () => (
  <Layout>
    <SEO title="Communication Protocols" />

    <Navbar />

    <PageBanner pageTitle="Communication Protocols" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>Communication Protocols:</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    CSMA-CD/NDBA
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    BUS Arbitration
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Frame Format
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Tx and Rx Frame
                  </div>
                </div>
              </div>
              {/* <p>CSMA-CD/NDBA</p> */}
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer.
              </p> */}

              {/* <p>BUS Arbitration</p> */}
              {/* <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p> */}
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails1}
              className="animate__animated animate__fadeInUp"
              alt="Communication Protocols details"
            />
          </div>
        </div>

        <div className="separate"></div>

        {/* <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails2}
              className="animate__animated animate__fadeInUp"
              alt="Communication Protocols fold 2"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <p>Frame Format</p>
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>

              <p>Tx and Rx Frame</p>
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default CommunicationProtocols;
