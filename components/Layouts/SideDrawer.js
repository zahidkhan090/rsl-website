import React, { Component } from 'react';
import Link from 'next/link';

class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className="modal right fade show"
          style={{
            display: 'block',
            paddingRight: '16px',
          }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2 className="modal-title" id="myModalLabel2">
                  <Link href="/main">
                    <a>
                      <img src="/images/logorsl1.png" alt="logo" />
                    </a>
                  </Link>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      {/* <Link href="/login"> */}
                      <Link href="#">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      {/* <Link href="/signup"> */}
                      <Link href="#">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      {/* <Link href="/faq"> */}
                      <Link href="#">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        P O Box: 91001,<br></br> Al Khawaneej 2, Dubai, UAE
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>info@royalsmartlimousine.com</span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>+971 4 3977746</span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
                    <li>
                      <Link href="https://www.facebook.com/royalsmartlimo">
                        <a target="_blank">
                          <i className="icofont-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/royalsmartlimo">
                        <a target="_blank">
                          <i className="icofont-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/royalsmartlimousine/">
                        <a target="_blank">
                          <i className="icofont-instagram"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEIyn9ense08wAAAYT3BilYSHYInXR_qRdGmkBpbsf4BUkkJXD559eRf0jkIbPZDq6eR-vrIxFvFgspeS_OjtxIUu0UunpK4vGV4qECXWVl7ffMWozkwqe4IxQm79M_ulwWLRc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Froyal-smart-limousine-llc">
                        <a target="_blank">
                          <i className="icofont-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
