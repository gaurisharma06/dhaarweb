import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/ITStartup/MainBanner";
import Features from "../components/ITStartup/Features";
import ServicesArea from "../components/ITStartup/ServicesArea";
import OurFeatures from "../components/ITStartup/OurFeatures";
import Team from "../components/Common/Team";
import FunFactsArea from "../components/Common/FunFactsArea";
import RecentWorks from "../components/Common/RecentWorks";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import BlogPost from "../components/Common/BlogPost";
import Footer from "../components/_App/Footer";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Navbar />
        <MainBanner />
        <Features />
        <ServicesArea />
        <OurFeatures />
        <Team />
        {/* <FunFactsArea /> */}
        {/* <RecentWorks /> */}
        {/* <Feedback /> */}
        {/* <BlogPost /> */}
        <Partner />
        <Footer />
    </Layout>
)

export default IndexPage;
