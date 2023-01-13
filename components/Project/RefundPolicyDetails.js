import React, { Component } from 'react';
import Link from 'next/link';

class DetailsContent extends Component {
  render() {
    return (
      <>
        <section className="project-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="project-details-desc">
                  <h3>REFUND POLICY FROM ROYAL SMART LIMOUSINE</h3>
                  <ul>
                    <li>
                      Cancellation should be made within 5 minutes from the time
                      of booking to avoid cancellation fee.
                    </li>
                    <li>
                      Please email us at info@royalsmartlimousine.com with the
                      subject: Cancellation or call 600530005
                    </li>
                    <li>
                      Refunds will be done only through the Original Mode of
                      Payment, refunds will be made back to the payment solution
                      used initially by the customer.
                    </li>
                    <li>
                      Please allow for up to 45days for the refund transfer to
                      be completed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsContent;
