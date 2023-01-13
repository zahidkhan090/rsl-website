import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  address: "",
  driverLicenseIssueDate: "",
  rtaCardNumber: "",
  rtaCardExpiry: "",
  uploadResume: "",
};

const Form = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/driver`;
      const { firstname,
        lastname,
        email,
        number,
        address,
        driverLicenseIssueDate,
        rtaCardNumber,
        rtaCardExpiry,
        uploadResume } = contact;

      const payload = {
        firstname,
        lastname,
        email,
        number,
        address,
        driverLicenseIssueDate,
        rtaCardNumber,
        rtaCardExpiry,
        uploadResume
      };

      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          {/* <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>
              Contact us by filling out the form below. Feel free to give us a
              call as well. We are available to discuss with you in greater
              details to help find the best solution for your transportation
              needs.
            </p>
          </div> */}

          <div
            className="row h-100 justify-content-center align-items-center"
            id="locateus"
          >
            <div className="col-lg-6 col-md-12">
              <form onSubmit={handleSubmit} id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={contact.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={contact.lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        placeholder="Mobile Number"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Your email address"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter your address"
                        value={contact.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="addressCity"
                        className="form-control"
                        placeholder="Enter your City"
                        value={contact.addressCity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="driverLicenseIssueDate"
                        className="form-control"
                        placeholder="Enter your Driver License Issue Date"
                        value={contact.driverLicenseIssueDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="rtaCardExpiry"
                        className="form-control"
                        placeholder="Enter your RTA Card Expiry"
                        value={contact.rtaCardExpiry}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="rtaCardNumber"
                        className="form-control"
                        placeholder="Enter your RTA Card Number"
                        value={contact.rtaCardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                    <label for="formFileLg" class="form-label">Upload your resume</label>
                      <input
                        class="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                        name="resumeUpload"
                        className="form-control"
                        placeholder="Upload your resume"
                        value={contact.resumeUpload}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
