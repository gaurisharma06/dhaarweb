import React from 'react';
import { Link } from "gatsby";

// Banner Images
import Man from "../../assets/images/banner-image/man.png";
import Code from "../../assets/images/banner-image/code.png";
import Carpet from "../../assets/images/banner-image/carpet.png";
import Bin from "../../assets/images/banner-image/bin.png";
import Book from "../../assets/images/banner-image/book.png";
import Dekstop from "../../assets/images/banner-image/dekstop.png";
import Dot from "../../assets/images/banner-image/dot.png";
import FlowerTopBig from "../../assets/images/banner-image/flower-top-big.png";
import FlowerTop from "../../assets/images/banner-image/flower-top.png";
import Keyboard from "../../assets/images/banner-image/keyboard.png";
import Pen from "../../assets/images/banner-image/pen.png";
import Table from "../../assets/images/banner-image/table.png";
import TeaCup from "../../assets/images/banner-image/tea-cup.png";
import HeadPhone from "../../assets/images/banner-image/headphone.png";
import MainPic from "../../assets/images/banner-image/main-pic.png";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";
import Shape5 from "../../assets/images/shape5.png";

const MainBanner = () => {
    return (
		<div className="main-banner">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1>Secure IT Solutions For a More Secure Environment</h1>
									<p>DHAAR Labs is a result oriented organisation with domain expertise of Automotive, IOT, Embedded. We build up the telent with our cutting edge technical training with hands on ...</p>
									
									<Link to="/about" className="btn btn-primary">
										Read more
									</Link>
								</div>
							</div>

							<div className="col-lg-6 offset-lg-1">
								<div className="banner-image">
                                    <img 
                                        src={Man} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="man" 
                                    />
                        
                                    <img 
                                        src={Code} 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="code"
                                    />
                                
                                    <img 
                                        src={Carpet} 
                                        className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                        alt="carpet"
                                    />
                            
                                    <img 
                                        src={Bin} 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="bin"
                                    />
                        
                                    <img 
                                        src={Book} 
                                        className="animate__animated animate__bounceIn animate__delay-0.1s" 
                                        alt="book"
                                    />
                        
                                    <img 
                                        src={Dekstop} 
                                        className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                        alt="dekstop"
                                    />
                    
                                    <img 
                                        src={Dot} 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="dot"
                                    />
                        
                                    <img 
                                        src={FlowerTopBig} 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="flower-top-big"
                                    />
                        
                                    <img 
                                        src={FlowerTop} 
                                        className="animate__animated animate__rotateIn animate__delay-0.1s" 
                                        alt="flower-top"
                                    />
                    
                                    <img 
                                        src={Keyboard} 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                        alt="keyboard"
                                    />
                            
                                    <img 
                                        src={Pen} 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="pen"
                                    />
                                
                                    <img 
                                        src={Table} 
                                        className="animate__animated animate__zoomIn animate__delay-0.1s" 
                                        alt="table"
                                    />
                    
                                    <img 
                                        src={TeaCup} 
                                        className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                        alt="tea-cup"
                                    />
                        
                                    <img 
                                        src={HeadPhone} 
                                        className="animate__animated animate__rollIn animate__delay-0.1" 
                                        alt="headphone"
                                    />
                            
                                    <img 
                                        src={MainPic} 
                                        className="animate__animated animate__fadeInUp animate__delay-0.1" 
                                        alt="main-pic"
                                    />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			<div className="shape1">
				<img src={Shape1} alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src={Shape2} alt="shape"/>
			</div>
			<div className="shape3">
				<img src={Shape3} alt="shape"/>
			</div>
			<div className="shape4">
				<img src={Shape4} alt="shape"/>
			</div>
			<div className="shape5">
				<img src={Shape5} alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src={Shape4} alt="shape"/>
			</div>
			<div className="shape7">
				<img src={Shape4} alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src={Shape2} alt="shape"/>
			</div>
		</div>
    )
}

export default MainBanner