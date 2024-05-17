import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Contact1.css";
import bannerImage from "../Images/banner.jpg";
import { Modal } from "bootstrap";
import { Button } from "bootstrap";
const Contact = () => {
  const [Cdata, setCdata] = useState({
    first_name: "",
    email: "",
    last_name: "",
    mobile_no: "",
    massage: "",
  });
  const { first_name, email, last_name, mobile_no, massage } = Cdata;

  function getChange(val) {
    console.log(val.target.value);
    setCdata({ ...Cdata, [val.target.name]: val.target.value });
  }
  function onSubmit(el) {
    // el.preventDefault();
    fetch("http://marriagebureau.ajspire.com/api/store_contact", {
      method: "POST",
      body: JSON.stringify(Cdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
        console.log(resp);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleButtonClick = () => {
    onSubmit();
    handleShow();
  };
  const image = {
    backgroundImage: `url(https://image.wedmegood.com/resized/800X/uploads/vendor_cover_pic/2201/e9db43d4-75a3-46a9-8a86-8a5b6d7a899f.png)`, // Use the imported image as the background
    backgroundSize: "100% 100%", // Make the background image cover the container
    backgroundRepeat: "no-repeat",
    width: "100% auto",
    height: "500px",
    marginTop: "100px", // Set the desired height (adjust as needed)
  };

  const h2Style = {
    fontWeight: "bolder",
    fontSize: "32px",
    marginTop: "30px",
    color: "red",
    textAlign: "center",
  };

  const pStyle = {
    fontSize: "20px",
    marginTop: "15px",
    textAlign: "center",
  };
  return (
    <div>
      <div className="container-fluid" style={image}>
        <div className="carousel ">
          <div class="center clearfix">
            <div class="col-sm-7 center_left clearfix">
              <div class="center_left_inner clearfix">
                <h1 style={{ marginTop: "200px" }}>Contact Us</h1>
                <h3></h3>
                <h5>
                  <a href="/" style={{ color: "white" }}>
                    Home
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <h2 style={h2Style}>Get In Touch</h2>
      <p style={pStyle}>
        Have a question for us or feedback? Please click on the most appropriate
        <br />
        category and fill out the form to reach us.
      </p>

      <div className="outer-div">
        <Container style={{ marginTop: "10px", marginBottom: "20px" }}>
          <Row className="justify-content-center">
            {/* Add justify-content-center class here */}
            <Col lg={6} md={12}>
              <div className="contact-container-custom ">
                <div style={{ padding: "20px" }}>
                  <h1
                    className="contacth1 bounced"
                    style={{ fontSize: "25px" }}
                  >
                    Contact Us
                  </h1>
                  <hr
                    style={{ width: "20%", height: "2px", marginLeft: "40%" }}
                  ></hr>

                  <p
                    style={{
                      marginBottom: "30px",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    Feel free to reach out to us with any questions or comments.
                  </p>

                  <div className="contact-form">
                    <Row>
                      <Col lg={6} md={12}>
                        <label>
                          First Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-field">
                          <input
                            type="text"
                            placeholder="Your First  Name"
                            onChange={getChange}
                            name="first_name"
                            value={first_name}
                          />
                        </div>
                        <label>
                          Email<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-field">
                          <input
                            type="email"
                            placeholder="Your Email"
                            onChange={getChange}
                            name="email"
                            value={email}
                          />
                        </div>
                      </Col>

                      <Col lg={6} md={12}>
                        <label>
                          Last Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-field">
                          <input
                            type="text"
                            placeholder="Your  Last Name"
                            onChange={getChange}
                            name="last_name"
                            value={last_name}
                          />
                        </div>
                        <label>
                          Phone<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="input-field">
                          <input
                            type="email"
                            placeholder="Your Phone"
                            onChange={getChange}
                            name="mobile_no"
                            value={mobile_no}
                          />
                        </div>
                      </Col>
                    </Row>
                    <label style={{ marginLeft: "5%", marginTop: "3%" }}>
                      Write Your Message<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="input-field">
                      <i
                        className="fa fa-comment"
                        style={{ color: "white" }}
                      ></i>
                      <textarea
                        placeholder="Your Message"
                        rows="3"
                        onChange={getChange}
                        name="massage"
                        value={massage}
                      ></textarea>
                    </div>

                    <button
                      style={{ marginLeft: "5%", borderColor: "red" }}
                      className="bounced"
                      onClick={(el) => onSubmit(el)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12} style={{ marginTop: "150px" }}>
              <div className=" contact-container-custom2">
                <div
                  className="contact-form"
                  style={{ height: "100%", marginLeft: "7%" }}
                >
                  <h1
                    style={{
                      fontWeight: "bold",
                      paddingBottom: "15px",
                      color: "white",
                    }}
                  >
                    Request a call back
                  </h1>
                  <h2 className="data" style={{ marginBottom: "5px" }}>
                    {" "}
                    Contact Us
                  </h2>
                  <div className="input-field">
                    <i
                      className="fa fa-phone bounced "
                      style={{ fontSize: "20px", color: "white" }}
                    ></i>
                    <p style={{ color: "white" }}>
                      {" "}
                      Change the design through a range<br></br>
                      <span className="link">7020403671</span>
                    </p>
                  </div>
                  <h2 className="data" style={{ marginBottom: "7px" }}>
                    {" "}
                    Email Address
                  </h2>
                  <div className="input-field">
                    <i
                      className="fa fa-envelope bounced"
                      style={{ color: "white" }}
                    ></i>
                    <p className="link">md.royalmarriagebureau@gmail.com</p>
                  </div>
                  <h2 className="data" style={{ marginBottom: "7px" }}>
                    Office Location
                  </h2>
                  <div className="input-field">
                    <i
                      className="fa-solid fa-house-user bounced"
                      style={{ color: "white" }}
                    ></i>
                    <p style={{ color: "white" }}>Rui pati, MIDC, Baramati.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section style={{ marginTop: "50px" }}>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.6535913770426!2d74.61586297927474!3d18.179864885291924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3753f00168c1f%3A0x67d1e4ff7044dfbf!2sRui!5e0!3m2!1sen!2sin!4v1695031967321!5m2!1sen!2sin"
            width="100%"
            height="400px"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
