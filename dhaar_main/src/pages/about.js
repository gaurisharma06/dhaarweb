import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Team from "../components/Common/Team";
import FunFactsArea from "../components/Common/FunFactsArea";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import FeedbackStyleFour from "../components/Common/FeedbackStyleFour";
// import Partner from "../components/MachineLearning/Partner";

import AboutImg from "../assets/images/about4.png";

const About = () => (
  <Layout>
    <SEO title="About Us" />

    <Navbar />

    <PageBanner pageTitle="About Us" />

    <div className="about-area ptb-80">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ml-about-img">
              <img src={AboutImg} alt="About Us" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="ml-about-content">
              <span className="sub-title">About Us</span>
              <h2>Engaging New Audiences Through Smart Approach</h2>
              <div className="bar"></div>

              <p>
                DHAAR Labs is a result oriented organisation with domain
                expertise of Automotive, IOT, Embedded. We build up the talent
                with our cutting edge technical training with hands on project
                development.
              </p>

              <p>
                We provide the resourcing support and provide best fit
                engineering talent to Automotive Embedded companies. DHAAR Labs
                Automotive training programs covers most of technologies used in
                Automotive industry and also provide development process
                understanding. Our focus is to reduce recruitment and skill
                development efforts of our partner companies. Our engineering
                lab program transforms an aspiring engineer to an automotive
                embedded engineer with hands on experience on real time POC
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our History</h3>
                <p>
                  We are currently writing it. In the fast changing tech world
                  we are a team of professional and tech savy engineers. We are
                  bringing a fresh energy and attitude to delicer best product
                  and services.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  To become advanced technology and solution provider. Keep our
                  technology expertiese most demanding.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Vision</h3>
                <p>
                  We are focused on quality and commitment for out tech
                  services. Aspire to practice integrity and keep the grit
                  alive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Team />

    <FeedbackStyleFour />

    <FunFactsArea />

    {/* <div className="pb-80">
      <Partner />
    </div> */}

    <Footer />
  </Layout>
);

export default About;
