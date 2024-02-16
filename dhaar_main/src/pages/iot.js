import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import { Link } from "gatsby";
import * as Icon from "react-feather";

// Service Images
import Icon4 from "../assets/images/icon4.png";
import Icon5 from "../assets/images/icon5.png";
import Icon6 from "../assets/images/icon6.png";
import Icon7 from "../assets/images/icon7.png";

// Shape Images
import Shape1 from "../assets/images/shape1.png";
import Shape2 from "../assets/images/shape2.svg";
import Shape3 from "../assets/images/shape3.svg";
import Shape4 from "../assets/images/shape4.svg";
import Partner from "../components/Common/Partner";

const IOT = () => {
  const preventLinkRedirection = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <SEO title="IOT" />

      <Navbar />

      <PageBanner pageTitle="IOT" />

      <div className="solutions-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon4} alt="Infra Automation System" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Medical Oxygen supply monitoring
                  </Link>
                </h3>
                <p>
                Sensor fusion based tech for monitoring O2.
                </p>

                <Link
                  to="/service-details"
                  className="learn-more-btn"
                  onClick={preventLinkRedirection}
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon5} alt="Supply chain management" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    GSM Gateway
                  </Link>
                </h3>
                <p>
                  Bulk Messaging Services
                </p>

                <Link
                  to="/service-details"
                  className="learn-more-btn"
                  onClick={preventLinkRedirection}
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon6} alt="Agricultural Application" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Agricultural Application
                  </Link>
                </h3>
                <p>
                  IoT Based Agricultural Application
                </p>

                <Link
                  to="/service-details"
                  className="learn-more-btn"
                  onClick={preventLinkRedirection}
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Prototype Development" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Prototype Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  to="/service-details"
                  onClick={preventLinkRedirection}
                  className="learn-more-btn"
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon6} alt="Security & Surveillance" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Security & Surveillance
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  to="/service-details"
                  className="learn-more-btn"
                  onClick={preventLinkRedirection}
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <img src={Icon7} alt="Robotic Automation" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Robotic Automation
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p>

                <Link
                  to="/service-details"
                  className="learn-more-btn"
                  onClick={preventLinkRedirection}
                >
                  <Icon.PlusCircle /> Learn More
                </Link>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src={Icon5} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Prototype Development
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src={Icon4} alt="image" />
                            </div> 
                            <h3>
                                <Link to="/service-details">
                                    Software Engineers
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            
                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div> */}
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src={Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>
      <Partner />
      <Footer />
    </Layout>
  );
};

export default IOT;
