import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import BlogContent from "../datas/blog.json";

class Blog extends React.Component {
  render() {
    return (
      <section className="blog-area ptb-100" id="news&blog">
        <div className="container">
          <div className="">
            <p>BLOG</p>
            <h2 className="py-1">NEWS</h2>
            {/* <div className="bar"></div> */}
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="blog-slides"
          >
            {BlogContent.map((item, index) => (
              <SwiperSlide>
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
                    <li style={{ textAlign: "center" }}>JAN 23</li>
                  </div>

                  <div className="blog-post-content">
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
                          marginBottom: '18px'
                        }}
                      >
                        SUV
                      </li>
                    </ul>
                    <p>{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
}

export default Blog;
