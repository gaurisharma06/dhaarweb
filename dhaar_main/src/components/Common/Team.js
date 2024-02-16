import React from "react";
import * as Icon from "react-feather";

// import Team1 from '../../assets/images/team-image/team1.jpg'
// import Team2 from "../../assets/images/team-image/team2.jpg";
// import Team3 from "../../assets/images/team-image/team3.jpg";
// import Team4 from "../../assets/images/team-image/team4.jpg";
// import Team5 from '../../assets/images/team-image/team5.jpg'
import Team6 from "../../assets/images/team-image/group-team.png";
import Team7 from "../../assets/images/team-image/biswajeet.jpg";
import Team8 from "../../assets/images/team-image/dharmendra.png";

// import Loadable from '@loadable/component'
// const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

// const options = {
//     items: 5,
//     loop: true,
//     nav: false,
//     dots: true,
//     margin: 30,
//     autoplay: false,
//     smartSpeed: 1000,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         900: {
//             items: 3
//         },
//         1200: {
//             items: 4
//         },
//         1500: {
//             items: 5
//         }
//     }
// }

const Team = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="team-area ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>Our Awesome Team</h2>
          <div className="bar"></div>
        </div>
      </div>

      {display ? (
        <div className="row container" style={{ maxWidth: "100%" }}>
          {/* <div className="single-team">
                    <div className="team-image">
                        <img src={Team1} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Josh Buttler</h3>
                            <span>CEO & Founder</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                    </div>
                </div> */}

          <div className="col-md-4">
            <div className="single-team">
              <div className="team-image">
                <img src={Team7} alt="Biswajeet" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Hardware Design Engineer</h3>
                  <span>Embedded SW Responsible</span>
                </div>

                <ul>
                  {/* <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li> */}
                </ul>

                <p>
                  Hardware Guy is an engineer by heart and mind. He has very uniqe
                  and diverse industry experience.
                  {/* Most of his work experience is providing solution for complex Embedded System challenges
                  and end to end product develop. He brings a strong R&D approch
                  and work experience of 5 years in the field of Embedded
                  System, Hardware development, IOT, cloud application and
                  Automotive. */}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-team">
              <div className="team-image">
                <img src={Team8} alt="Dharmendra" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>CEO</h3>
                  <span>Automotive SW Responsible</span>
                </div>

                <ul>
                  {/* <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li> */}
                </ul>

                <p>
                  CEO brings more than a decade of Automotive industry
                  experience.
                  {/* He keen about Automotive industry and knows its
                  challenges in and out. Most of his work experience is
                  providing solution for Automotive projects,Automotive
                  functional safrty, Many POC's and end to end project
                  management. He brings more than 10 years of strong R&D approch
                  and work experience in the field of Automotive engineering,
                  Embedded System, IOT and Projects management. Some of his
                  expertise form Embedded Software development in Automotive
                  domain are Airbag System, ADAS, CHASSIS, OBD Products, Vehicle
                  Network Communication, Functional Safety (ISO26262)
                  implementation. Successful project management and service
                  delivery using different methodologies like V-Model, Scrum and
                  Agile. */}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-team">
              <div className="team-image">
                <img src={Team6} alt="Team" />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>The Team of Engineers</h3>
                  <span>Engineers</span>
                </div>

                <ul>
                  {/* <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Gitlab />
                    </a>
                  </li> */}
                </ul>

                <p>
                  The team deliver innovative solutions and never leaves any chance to surprise customers.
                 {" "}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="single-team">
                    <div className="team-image">
                        <img src={Team5} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Corey Anderson</h3>
                            <span>Project Manager</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>
                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Team;
