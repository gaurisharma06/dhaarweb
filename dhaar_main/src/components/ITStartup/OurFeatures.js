import React from "react";
import { Link } from "gatsby";
import * as Icon from "react-feather";

const OurFeatures = () => {
  return (
    <div className="features-area pt-80 pb-50 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>Our Expertise</h2>
          <div className="bar"></div>
          <p className="maxWidthPara">
            DHAARLABS, is geared up to be the top player in the field of
            Automotive Embedded Software Products and Services. We believe in
            our strong team with specialization in AUTOSAR, Automotive Systems,
            Embedded Software, ISO 26262 and In-Vehicle Networking.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="single-features">
              <div className="icon">
                <Icon.Settings />
              </div>
              <h3>
                <Link to="/autosar-classic">AUTOSAR (Classic Platform)</Link>
              </h3>
              <p>
                DHAARLABS with its vast experience, offers techinical experties
                and ECU SW development based on AUTOSAR Classic Platform.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-features">
              <div className="icon">
                <Icon.Mail />
              </div>
              <h3>
                <Link to="/functional-safety-fusa">
                  Functional Safety (FuSa:ISO26262)
                </Link>
              </h3>
              <p>
                To make the ECU development complience to ISO26262. We can help
                you in Safety Analysys, DFA, FMEA, HARA, HAOP.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-features">
              <div className="icon bg-c679e3">
                <Icon.Grid />
              </div>
              <h3>
                <Link to="/validation-and-verification">
                  Validation and Verification
                </Link>
              </h3>
              <p>
                DHAARLABS offers Support to complete lyfe cycle of SW
                Development and Testing
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-features">
              <div className="icon bg-c679e3">
                <Icon.Info />
              </div>
              <h3>
                <Link to="/timely-delivery-and-innovative-approach">
                  Timely delivery and Innovative approach
                </Link>
              </h3>
              <p>
                DHAARLABS brings you the experience of CMMI Level-5 and ASPICE
                process expertise. We understad the importance of process
                complience for SW projects.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-features">
              <div className="icon bg-eb6b3d">
                <Icon.Box />
              </div>
              <h3>
                <Link to="/embedded-system-training">
                  Embedded System Training
                </Link>
              </h3>
              {/* <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p> */}
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-features">
              <div className="icon bg-eb6b3d">
                <Icon.Bell />
              </div>
              <h3>
                <Link to="/automotive-system-software">
                  Automotive System Software
                </Link>
              </h3>
              {/* <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
