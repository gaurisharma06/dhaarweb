import React from 'react'
import { Link } from "gatsby";

// import PartnerImg2 from '../../assets/images/partner-img/partner-2.png'
// import PartnerHoverImg2 from '../../assets/images/partner-img/partner-hover2.png'
// import PartnerImg3 from '../../assets/images/partner-img/partner-3.png'
// import PartnerHoverImg3 from '../../assets/images/partner-img/partner-hover3.png'
// import PartnerImg4 from '../../assets/images/partner-img/partner-4.png'
// import PartnerHoverImg4 from '../../assets/images/partner-img/partner-hover4.png'
// import PartnerImg5 from '../../assets/images/partner-img/partner-5.png'
// import PartnerHoverImg5 from '../../assets/images/partner-img/partner-hover5.png'
// import PartnerImg6 from '../../assets/images/partner-img/partner-6.png'
// import PartnerHoverImg6 from '../../assets/images/partner-img/partner-hover6.png'
// import PartnerImg7 from '../../assets/images/partner-img/partner-7.png'
// import PartnerHoverImg7 from '../../assets/images/partner-img/partner-hover7.png'

const Partner = () => {
    return (
        <>
            <div className="ready-to-talk">
                <div className="container">
                    <h3>Ready to talk?</h3>
                    <Link to="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    )
 
}

export default Partner;  