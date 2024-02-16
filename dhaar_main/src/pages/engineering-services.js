import React from "react";
import * as Icon from "react-feather";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import FeatureImg1 from "../assets/images/features-details-image/feature1.png";
import FeatureImg2 from "../assets/images/features-details-image/feature2.png";
import Partner from "../components/Common/Partner";

const EngineeringServices = () => (
  <Layout>
    <SEO title="Engineering Services" />

    <Navbar />

    <PageBanner pageTitle="Engineering Services" />

    <div className="features-details-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 features-details-image">
            <img
              src={FeatureImg1}
              className="animate__animated animate__fadeInUp"
              alt="image"
            />
          </div>

          <div className="col-lg-6 features-details">
            <div
              className="features-details-desc"
              style={{ paddingBottom: "20px" }}
            >
              <h3>AUTOSAR based SW Development</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    BSW Software Development
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    MCAL Software Development
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Application SWC Development
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Migration of Architecture and ECU Integrations
                  </div>
                </div>
              </div>
              {/* <ul className="features-details-list">
                <li>BSW Software Development</li>
                <li>MCAL Software Development</li>
                <li>Application SWC Development</li>
                <li>Migration of Architecture and ECU Integrations</li>
              </ul> */}
            </div>
            <div
              className="features-details-desc"
              style={{ paddingBottom: "20px" }}
            >
              <h3>System Development</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Passive Safety
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Active Safety
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Electronic Power Steering
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    ADAS
                  </div>
                </div>
              </div>
              {/* <ul className="features-details-list">
                <li>Passive Safety</li>
                <li>Active Safety</li>
                <li>Electronic Power Steering</li>
                <li>ADAS</li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 features-details">
            <div
              className="features-details-desc"
              style={{ paddingBottom: "20px" }}
            >
              <h3>Processes Compliance</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    ASPICE
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    ISO26262
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Agile
                  </div>
                </div>
              </div>
              {/* <ul className="features-details-list">
                <li>ASPICE</li>
                <li>ISO26262</li>
                <li>Agile</li>
              </ul> */}
            </div>
            <div
              className="features-details-desc"
              style={{ paddingBottom: "20px" }}
            >
              <h3>Automotive SW Testing</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Test Lifecycle Management
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    SIL and HIL Testing
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    System Level Testing
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Test Automation
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Continuous Integration and Testing (CI/CD)
                  </div>
                </div>
              </div>
              {/* <ul className="features-details-list">
                <li>Test Lifecycle Management</li>
                <li>SIL and HIL Testing</li>
                <li>System Level Testing</li>
                <li>Test Automation</li>
                <li>Continuous Integration and Testing (CI/CD)</li>
              </ul> */}
            </div>
            <div className="features-details-desc">
              <div className="features-details-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What working models we follow?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p> */}
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Is Smart Lock required for instant apps?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p> */}
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
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p> */}
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
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default EngineeringServices;
