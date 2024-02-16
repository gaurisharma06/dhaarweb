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

import ServicesDetails1 from "../assets/images/services-details-image/services-details1.png";
import ServicesDetails2 from "../assets/images/services-details-image/services-details2.png";
import Partner from "../components/Common/Partner";

const FunctionalSafety = () => (
  <Layout>
    <SEO title="Service Details" />

    <Navbar />

    <PageBanner pageTitle="Functional Safety (FuSa:ISO26262)" />

    <div className="services-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <h3>Functional Safety (FuSa:ISO26262)</h3>
              <p>
              We can rake care of End-To-End complience of Automotive Software, With strong process undertanding of HARA, HAZOP, DFA, SA, ASIL clasification, 
              </p>
            </div>
          </div>

          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails1}
              className="animate__animated animate__fadeInUp"
              alt="image"
            />
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 services-details-image">
            <img
              src={ServicesDetails2}
              className="animate__animated animate__fadeInUp"
              alt="image"
            />
          </div>

          <div className="col-lg-6 services-details">
            <div className="services-details-desc">
              <p>
              ISO26262 PART-6
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

export default FunctionalSafety;
