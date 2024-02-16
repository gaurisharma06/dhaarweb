import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>Mail Here</h3>
                            <p><a href="mailto:dhaar.hr@gmail.com">dhaar.hr@gmail.com</a></p>
                            {/* <p><a href="mailto:info@spet.com">info@spet.com</a></p> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Visit Here</h3>
                            <p>BTM 2nd Stage, Bangalore Karnataka 560076</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p><a href="tel:7827562201">7827562201</a></p>
                            {/* <p><a href="tel:+2414524526">+241 452 4526</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  
