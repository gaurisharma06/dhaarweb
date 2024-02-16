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

import FeatureImg1 from "../assets/images/features-details-image/feature1.png";
// import FeatureImg2 from "../assets/images/features-details-image/feature2.png";
import Partner from "../components/Common/Partner";

const TimelyDeliveryAndInnovativeApproach = () => (
  <Layout>
    <SEO title="Timely Delivery and Innovative Approach Page" />

    <Navbar />

    <PageBanner pageTitle="Timely Delivery and Innovative Approach" />

    <div className="features-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 features-details-image">
            <img
              src={FeatureImg1}
              className="animate__animated animate__fadeInUp"
              alt="test"
            />
          </div>

          <div className="col-lg-6 features-details">
            <div className="features-details-desc">
              <h3>Information Retrieval</h3>
              <p>
                Build integration aute irure design in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat design proident.
              </p>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Life time supports
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Exclusive design
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Solve your problem with us
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    We Provide Awesome Services
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Your business deserves best Software
                  </div>
                </div>
              </div>
              {/* <ul className="features-details-list">
                <li>Life time supports</li>
                <li>Exclusive design</li>
                <li>Solve your problem with us</li>
                <li>We Provide Awesome Services</li>
                <li>Your business deserves best Software</li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="separate"></div>

        {/* <div className="row align-items-center">
          <div className="col-lg-6 features-details">
            <div className="features-details-desc">
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>

              <div className="features-details-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Which material types can you work with?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Is Smart Lock required for instant apps?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>
                          Can I have multiple activities in a single feature?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="col-lg-6 features-details-image">
            <img
              src={FeatureImg2}
              className="animate__animated animate__fadeInUp"
              alt="test"
            />
          </div>
        </div> */}
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default TimelyDeliveryAndInnovativeApproach;
