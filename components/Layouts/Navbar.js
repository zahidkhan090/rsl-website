import React from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";
import ComingSoon from "./ComingSoon";

class Navbar extends React.Component {
  _isMounted = false;

  state = {
    drawer: false,
    comingDrawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  handleComingDrawer = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        comingDrawer: !prevState.comingDrawer,
      };
    });
  };

  handleComingDrawerClose = () => {
    this.setState((prevState) => {
      return {
        comingDrawer: !prevState.comingDrawer,
      };
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;

    let layOutCls = "";
    let logo = "/images/Vector.png";
    let logoText = "/images/Group.png";
    if (pathname == "/digital-marketing") {
      layOutCls = "marketing-navbar";
      logo = "";
    }

    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <header id="header">
          <div id="navbar" className={`crake-nav ${layOutCls}`}>
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <div>
                  <Link href="/">
                    <a className="navbar-brand">
                      <img src={logo} alt="logo" width="70" height="50" />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="navbar-brand">
                      <img src={logoText} alt="logo" width="100" height="50" />
                    </a>
                  </Link>
                </div>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav nav ms-auto nav-custom">
                    <li className="nav-item">
                      <Link activeClassName="active" href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/about">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/services">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/fleets">
                        <a className="nav-link">Fleet</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="/blog-one">
                        <a className="nav-link">News & Events</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="/#partner">
                        <a className="nav-link">Be a Partner</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="/contact">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="">
                        {/* <a
                        href="https://booking.royalsmartlimousine.com/"
                        target="_blank"
                      > */}
                        <button
                          onClick={this.handleComingDrawer}
                          className="btn btn-primary"
                          type="button"
                        >
                          Book online
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ""}
        {this.state.searchForm ? (
          <SearchForm onClick={this.handleSearchForm} />
        ) : (
          ""
        )}
        {this.state.comingDrawer ? (
          <ComingSoon onClick={this.handleComingDrawerClose} />
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
