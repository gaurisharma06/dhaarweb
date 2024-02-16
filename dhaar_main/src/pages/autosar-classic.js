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

const AutosarClassic = () => (
  <Layout>
    <SEO title="AUTOSAR Classic Page" />

    <Navbar />

    <PageBanner pageTitle="AUTOSAR Classic" />

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
              <h3>AUTOSAR Classic</h3>
              <p>
                DHAARLABS with its vast experience, offers techinical experties
                and ECU SW development based on AUTOSAR Classic Platform. We
                also provide training in two categories namely:
              </p>
              <div className="services-content">
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Basic Classic Autosar Platform Training
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="box">
                    <Icon.Code />
                    Advanced Classic Autosar Training
                  </div>
                </div>
                {/* <div className="col-sm-12">
                  <div className="single-box bg-f78acb">
                    <h3>Basic Classic Autosar Platform Training</h3>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="single-box bg-f78acb">
                    <h3>Advanced Classic Autosar Training</h3>
                  </div>
                </div> */}
                {/* <ol>
                  <li>Basic Classic Autosar Platform Training</li>
                  <li>Advanced Classic Autosar Training</li>
                </ol> */}
              </div>
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

export default AutosarClassic;
