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

const EmbeddedSystemSoftware = () => (
  <Layout>
    <SEO title="Embedded Systems Training Page" />

    <Navbar />

    <PageBanner pageTitle="Embedded Systems Training" />

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
              <h3>Embedded System Training</h3>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Embedded SW Development and Product Development
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Complete Lab Access with hand holding and guidance
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Embedded C, C++, Python, CAPL
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Hands on with 5+ industry level Embedded projects
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    SW Development and Testing Tools
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Automation Testing
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Embedded SW Development process (V-Model, Waterfall, Mixed
                    model)
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Hands on with SDLC and STLC with proof document at each
                    stage.
                  </div>
                </div>
                <div className="col-sm-12" style={{ paddingLeft: "10%" }}>
                  <div className="box">
                    <Icon.ChevronRight />
                    Requirement Engineering
                  </div>
                </div>
                <div className="col-sm-12" style={{ paddingLeft: "10%" }}>
                  <div className="box">
                    <Icon.ChevronRight />
                    SW Test Plan development and Testing
                  </div>
                </div>
                <div className="col-sm-12" style={{ paddingLeft: "10%" }}>
                  <div className="box">
                    <Icon.ChevronRight />
                    Debugging/Bug Reporting /tracking and fixing
                  </div>
                </div>
              </div>
              {/* <ul className="features-details-list">
                <li>Embedded SW Development and Product Development</li>
                <li>Compleete Lab Access with hand holding and guidance</li>
                <li>Embedded C, C++, Python, CAPL</li>
                <li>Hands on with 5+ industry level Embedded projects</li>
                <li>SW Development and Testing Tools</li>
                <li>Atomation Testing</li>
                <li>
                  Embedded SW Development process (V-Model, Waterfall, Mixed
                  model)
                </li>
                <li>
                  Hands on with SDLC and STLC with proof document at each stage.
                  <ol>
                    <li>Requirement Engineering</li>
                    <li>SW Test Plan development and Testing</li>
                    <li>Debugging/Bug Reporting /tracking and fixing </li>
                  </ol>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="separate"></div>

        <div className="row align-items-center">
          <div className="col-lg-6 features-details">
            <div className="features-details-desc">
              {/* <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p> */}

              <div className="features-details-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Which material types can you work with?</span>
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
              alt="test"
            />
          </div>
        </div>
      </div>
    </div>
    <Partner />
    <Footer />
  </Layout>
);

export default EmbeddedSystemSoftware;
