import React, { Component } from "react";
import Link from "next/link";

class ComingSoon extends Component {
  state = {
    comingDrawer: false,
  };

  closeComingDrawer = () => {
    this.props.onClick(this.state.comingDrawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className="modal fade show"
          style={{
            display: "block",
            // paddingRight: "16px",
          }}
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeComingDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    padding: '32px'
                  }}
                >
                  <i
                    class="icofont-car"
                    style={{
                      fontSize: "64px",
                      color: "#6cc8bf",
                    }}
                  ></i>
                  <h3>Coming soon</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
