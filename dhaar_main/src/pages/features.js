import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import OurFeatures from "../components/Features/OurFeatures";
import SingleFeatures from "../components/Features/SingleFeatures";
import Partner from "../components/Common/Partner";

const Features = () => (
  <Layout>
    <SEO title="Features Page" />

    <Navbar />

    <PageBanner pageTitle="Features" />

    <OurFeatures />

    <SingleFeatures />
    <Partner />
    <Footer />
  </Layout>
);

export default Features;
