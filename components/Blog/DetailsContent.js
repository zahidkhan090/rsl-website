import React, { Component } from 'react';
import BlogContent from '../datas/blog.json';
import Link from 'next/link';

class DetailsContent extends Component {
  render() {
    return (
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="article-img">
                  <img src="/images/blog-details.jpg" alt="blog-details" />
                  <div className="date">
                    20 <br /> Jan
                  </div>
                </div>

                <div className="article-content">
                  <h3>{BlogContent[this.props.props.id].title}</h3>
                  {BlogContent[this.props.props.id].content.map((item) => (
                    <p>{item.content1}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-area pl-15">
                <div className="widget widget_post_categories">
                  <h3 className="widget-title">Post Categories</h3>
                  <div className="bar"></div>

                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> Art
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> Book
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> Watch
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> TV
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> Gifts
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> Design
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-bubble-right"></i> Smart TV
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget_recent_posts">
                  <h3 className="widget-title">Recent Post</h3>
                  <div className="bar"></div>

                  <ul>
                    {BlogContent.map((demo, index) => (
                      <li>
                        <div className="recent-post-thumb">
                          <a href="#">
                            <img
                              src={demo.image}
                              alt="blog-image"
                              style={{ width: '100px', height: '56px' }}
                            />
                          </a>
                        </div>

                        <div className="recent-post-content">
                          <h3>
                            <Link href={`blog-details/?id=${index}`}>
                              {demo.title.substring(0, 20) + '.....'}
                            </Link>
                          </h3>
                          <span className="date">23 January 2019</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget widget_tag_cloud">
                  <h3 className="widget-title">Popular Tags</h3>
                  <div className="bar"></div>

                  <div className="tagcloud">
                    <a href="#">Art</a>
                    <a href="#">Book</a>
                    <a href="#">Watch</a>
                    <a href="#">TV</a>
                    <a href="#">Gifts</a>
                    <a href="#">Smart TV</a>
                    <a href="#">Design</a>
                  </div>
                </div>

                <div className="widget widget_text">
                  <h3 className="widget-title">Instagram</h3>
                  <div className="bar"></div>

                  <ul>
                    <li>
                      <a href="#">
                        <img src="/images/work-img1.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/images/work-img2.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/images/work-img3.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/images/work-img4.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/images/work-img5.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <img src="/images/work-img6.jpg" alt="image" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailsContent;
