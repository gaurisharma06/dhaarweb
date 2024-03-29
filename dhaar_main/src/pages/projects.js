import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import { Link } from "gatsby";

// Service Images
import ServiceImage1 from "../assets/images/services-image/service-image1.png";
import ServiceImage2 from "../assets/images/services-image/service-image2.png";
import ServiceImage3 from "../assets/images/services-image/service-image3.png";
import ServiceImage4 from "../assets/images/services-image/service-image4.png";
import ServiceImage5 from "../assets/images/services-image/service-image5.png";
import ServiceImage6 from "../assets/images/services-image/service-image6.png";

// Shape Images
import Shape1 from "../assets/images/shape1.png";
import Shape2 from "../assets/images/shape2.svg";
import Shape3 from "../assets/images/shape3.svg";
import Shape4 from "../assets/images/shape4.svg";

const Projects = () => {
  const preventLinkRedirection = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <SEO title="Projects" />

      <Navbar />

      <PageBanner pageTitle="Projects" />

      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            {/* <span className="sub-title">Our Solutions</span> */}
            <h2>Project Domain</h2>
            <div className="bar"></div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage1} alt="IT Professionals" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    IT Professionals
                  </Link>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage2} alt="Software Engineers" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Software Engineers
                  </Link>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage3} alt="Health & Manufacturing" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Health & Manufacturing
                  </Link>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage4} alt="Security & Surveillance" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Security & Surveillance
                  </Link>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage5} alt="Automatic Optimization" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Automatic Optimization
                  </Link>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-ml-services-box">
                <div className="image">
                  <img src={ServiceImage6} alt="Data Analysts" />
                </div>
                <h3>
                  <Link to="/service-details" onClick={preventLinkRedirection}>
                    Data Analysts
                  </Link>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna aliqua.
                </p> */}
              </div>
            </div>
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
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Projects;
