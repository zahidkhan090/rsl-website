import React, { Component } from "react";
import BlogContent from "../datas/blog.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";

class BlogOne extends Component {
  render() {
    return (
      <section className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="row">
            {BlogContent.map((item, index) => (
              <div
                className="col-sm-12 col-md-4"
                style={{ marginBottom: "120px" }}
              >
                <div className="single-blog-post-custom">
                  <Link href={`/blog-details/?id=${item.id}`}>
                    <a className="post-image">
                      <img
                        src={item.image}
                        alt="blog-image"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Link>
                  <div className="blog-post-content-month">
                    <p style={{ textAlign: "center", color: "#ffffff" }}>
                      JAN 23
                    </p>
                  </div>

                  <div
                    className="blog-post-content"
                    style={{
                      boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.05)",
                      
                    }}
                  >
                    <ul>
                      <li
                        style={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "15px",
                          lineHeight: "26px",
                          alignItems: "center",
                          letterSpacing: "6px",
                          textTransform: "uppercase",
                          color: "#6cc8bf",
                          marginBottom: "18px",
                        }}
                      >
                        SUV
                      </li>
                    </ul>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}

            {/* {BlogContent.map((item, index) => (
              <div className="col-sm-12 col-md-4">
                <div className="single-blog-post" style={{ height: "501px" }}>
                  <Link href={`/blog-details/?id=${index}`}>
                    <a className="post-image">
                      <img
                        src={item.image}
                        alt="blog-image"
                        style={{ width: "412px", height: "232px" }}
                      />
                    </a>
                  </Link>

                  <div className="blog-post-content">
                    <ul>
                      <li>
                        <i className="icofont-user-male"></i>{" "}
                        <Link href="#">
                          <a>Admin</a>
                        </Link>
                      </li>
                      <li>
                        <i className="icofont-wall-clock"></i> January 23, 2019
                      </li>
                    </ul>
                    <h3>{item.title}</h3>

                    <p>{item.content[0].content1.substring(0, 50) + "....."}</p>

                    <Link href={`/blog-details/?id=${index}`}>
                      <a className="read-more-btn">
                        Read More{" "}
                        <i className="icofont-rounded-double-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))} */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <a href="/blog-details" className="post-image">
                  <img src="/images/blog-img1.jpg" alt="blog-image" />
                </a>

                <div className="blog-post-content">
                  <ul>
                    <li>
                      <i className="icofont-user-male"></i>{" "}
                      <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="icofont-wall-clock"></i> January 23, 2019
                    </li>
                  </ul>
                  <h3>
                    <a href="/blog-details">
                      The Most Popular New Business Apps
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi turpis massa, dapibus nec libero vitae.
                  </p>
                  <a href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-rounded-double-right"></i>
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="icofont-double-left"></i>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="icofont-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default BlogOne;
