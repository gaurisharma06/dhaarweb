import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";
import * as Icon from "react-feather";
import { Link } from "gatsby";
// import BlogSidebar from '../components/Blog/BlogSidebar';

import BlogDetailsImg from "../assets/images/blog-image/blog-details.jpg";
import BlogImg2 from "../assets/images/blog-image/blog2.jpg";
import BlogImg3 from "../assets/images/blog-image/blog3.jpg";
import BlogImg7 from "../assets/images/blog-image/blog7.jpg";
import BlogImg8 from "../assets/images/blog-image/blog8.jpg";
import BlogImg9 from "../assets/images/blog-image/blog9.jpg";

import ClientImg1 from "../assets/images/client-image/client1.jpg";
import ClientImg2 from "../assets/images/client-image/client2.jpg";
import ClientImg3 from "../assets/images/client-image/client3.jpg";
import ClientImg4 from "../assets/images/client-image/client4.jpg";
import ClientImg5 from "../assets/images/client-image/client5.jpg";
import Partner from "../components/Common/Partner";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dhaarlabs"
      )
      .then((res) => {
        console.log(res.data);
        setBlog(res.data.items[0].content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout>
      <SEO title="Blog Details" />

      <Navbar />

      <PageBanner pageTitle="Blog Details" />

      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            {blog && <div dangerouslySetInnerHTML={{ __html: blog }} />}

            {/* <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div> */}
          </div>
        </div>
      </div>
      <Partner />
      <Footer />
    </Layout>
  );
};

export default BlogDetails;
