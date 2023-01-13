import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import CarModel from "../datas/fleet.json";

class ShopVOne extends Component {
  handleAddToCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let { products } = this.props;
    return (
      <section className="product-area ptb-100">
        <div className="container">
          <div className="row">
            {CarModel.map((item, index) => (
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-product"
                  style={{
                    textAlign: "center",
                    border: "1px solid #807f7f",
                  }}
                >
                  <div
                    className="product-img"
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "14px",
                      height: '200px'
                    }}
                  >
                    <img src={item.image} alt="item" />
                  </div>

                  <div className="product-content" style={{backgroundColor: "#12282B"}}>
                    <section className="project-details-area">
                      <div className="container">
                        <div className="row ">
                          <div className="col">
                            <div className="project-details-desc">
                              <div className="project-details-information">
                                <h3
                                  style={{
                                    textAlign: "left",
                                    margin: "0px 0px 22px 0px",
                                  }}
                                >
                                  <a style={{ color: "#ffffff" }}>
                                    {item.title}
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col">
                            <div className="project-details-desc">
                              <div className="project-details-information">
                                <div className="single-info-box1-fleet">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/images/${item.icon1}`}
                                      style={{
                                        width: "7%",
                                        marginRight: "6px",
                                      }}
                                    />
                                    <h6
                                      style={{
                                        color: "#ffffff",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      PASSENGERS
                                    </h6>
                                  </div>
                                  <h6
                                    style={{
                                      color: "#ffffff",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    {item.passengers}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr
                          style={{
                            border: "2px solid",
                            borderStyle: "none none solid",
                            color: "#aeaeae",
                          }}
                        />
                        <div className="row">
                          <div className="col">
                            <div className="project-details-desc">
                              <div className="project-details-information">
                                <div className="single-info-box1-fleet">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={`/images/${item.icon2}`}
                                      style={{
                                        width: "7%",
                                        marginRight: "6px",
                                      }}
                                    />
                                    <h6
                                      style={{
                                        color: "#ffffff",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      BAGGAGE
                                    </h6>
                                  </div>
                                  <h6
                                    style={{
                                      color: "#ffffff",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    {item.baggage}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopVOne);
