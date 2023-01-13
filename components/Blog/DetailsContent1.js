import React, { Component } from 'react';
import Services from '../datas/services.json';
import Link from 'next/link';

class DetailsContent extends Component {
  render() {
    return (
      <>
        <section className="blog-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-details">
                  {/* <div className="article-img">
                    <img src="/images/blog-details.jpg" alt="blog-details" />
                    <div className="date">
                      20 <br /> Jan
                    </div>
                  </div> */}

                  <div className="article-content">
                    <h3>{Services[parseInt(this.props.props.id) - 1].title}</h3>
                    {Services[parseInt(this.props.props.id) - 1].content.map(
                      (item) => (
                        // <p>{item.content1}</p>
                        <>
                          {item.content1.length === 1 ? (
                            <p>{item.content1}</p>
                          ) : (
                            item.content1.map((demo, index) => (
                              <ul>
                                <li>{index + 1 + '. ' + demo.list}</li>
                              </ul>
                            ))
                          )}
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ paddingBottom: '40px', paddingBottom: '20px' }}>
          <div className="container">
            <div className="row">
              {Services.map((item) =>
                item.id !== this.props.props.id ? (
                  <div
                    className="col-lg-3 col-md-6"
                    style={{ paddingBottom: '20px', cursor: 'pointer' }}
                  >
                    <Link href={`/blog-details1/?id=${item.id}`}>
                      <div className="single-work-process">
                        <div className="icon">
                          {/* <i className={item.icon}></i> */}
                          <img src={`/images/${item.icon}`} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description.substring(0, 100) + ' .....'}</p>
                      </div>
                    </Link>
                  </div>
                ) : (
                  ''
                )
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsContent;
