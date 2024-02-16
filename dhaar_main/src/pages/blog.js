import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Link } from "gatsby";
import axios from "axios";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from "../components/Common/PageBanner";

// Blog Images
// import BlogImg1 from "../assets/images/blog-image/blog1.jpg";
// import BlogImg2 from "../assets/images/blog-image/blog2.jpg";
// import BlogImg3 from "../assets/images/blog-image/blog3.jpg";
// import BlogImg4 from "../assets/images/blog-image/blog4.jpg";
// import BlogImg5 from "../assets/images/blog-image/blog5.jpg";
// import BlogImg6 from "../assets/images/blog-image/blog6.jpg";

// Shape Images
import Shape2 from "../assets/images/shape2.svg";
import Shape3 from "../assets/images/shape3.svg";
import Shape4 from "../assets/images/shape4.svg";

const Blog5 = () => {
  const [page, setPage] = useState(1);
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dhaarlabs"
      )
      .then((res) => {
        setAllBlogs(res.data.items);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, []);

  useEffect(() => {
    if (allBlogs.length) {
      const startIndex = (page - 1) * 6;
      const endIndex = page * 6 > allBlogs.length ? allBlogs.length : page * 6;
      const displayBlogs = allBlogs.slice(startIndex, endIndex);
      setBlogs(displayBlogs);
    }
  }, [page, allBlogs]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const blogDate = new Date(date);
    // console.log(blogDate);
    return blogDate.toLocaleDateString(blogDate, options);
  };

  const handlePageClick = (e) => {
    setPage(parseInt(e.target.innerText));
  };

  const handlePrevClick = () => {
    if ((page - 3) * 6 > 0) {
      setPage((prevPage) => prevPage - 3);
    } else if ((page - 2) * 6 > 0) {
      setPage((prevPage) => prevPage - 2);
    } else if ((page - 1) * 6 > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if ((page + 2) * 6 <= allBlogs.length) {
      setPage((prevPage) => prevPage + 3);
    } else if ((page + 1) * 6 <= allBlogs.length) {
      setPage((prevPage) => prevPage + 2);
    } else if (page * 6 <= allBlogs.length) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Layout>
      <SEO title="Blog" />

      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row">
            {blogs.length &&
              blogs.map((blog, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="single-blog-post-item">
                    <div className="post-image">
                      <Link to={blog.link}>
                        <img src={blog.thumbnail} alt={blog.title} />
                      </Link>
                    </div>

                    <div className="post-content">
                      <ul className="post-meta">
                        <li>
                          <Link
                            to="https://medium.com/@dhaarlabs"
                            target="_blank"
                          >
                            {blog.author}
                          </Link>
                        </li>
                        <li>{formatDate(blog.pubDate)}</li>
                      </ul>
                      <h3>
                        <Link to={blog.link} target="_blank">
                          {blog.title}
                        </Link>
                      </h3>

                      <Link
                        to={blog.link}
                        target="_blank"
                        className="read-more-btn"
                      >
                        Read More <Icon.PlusCircle />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src={BlogImg2} alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2021</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src={BlogImg3} alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2021</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src={BlogImg4} alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2021</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      The security risks of changing package owners
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src={BlogImg5} alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2021</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link to="/blog-details">
                    <img src={BlogImg6} alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link to="/author">Admin</Link>
                    </li>
                    <li>August 15, 2021</li>
                  </ul>
                  <h3>
                    <Link to="/blog-details">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div> */}

            {/* Pagination */}
            {allBlogs.length && (
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <button className="page-link" onClick={handlePrevClick}>
                          Prev
                        </button>
                      </li>

                      <li className="page-item active">
                        <button
                          id={page}
                          className="page-link"
                          onClick={handlePageClick}
                        >
                          {page}
                        </button>
                      </li>

                      {allBlogs.length > page * 6 ? (
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={handlePageClick}
                          >
                            {page + 1}
                          </button>
                        </li>
                      ) : null}

                      {allBlogs.length > (page + 1) * 6 ? (
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={handlePageClick}
                          >
                            {page + 2}
                          </button>
                        </li>
                      ) : null}

                      <li className="page-item">
                        <button className="page-link" onClick={handleNextClick}>
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Shape Images */}
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

export default Blog5;
