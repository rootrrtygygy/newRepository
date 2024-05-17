import React from "react";
import "./Membershipbuy.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Membersow = () => {
  return (
    <div>
      <div className="container con12" style={{ marginTop: "100px" }}>
        <div className="centered-div">
          <h1
            style={{
              textAlign: "center",
              fontSize: "bold",
              color: "green",
              marginBottom: "50px",
            }}
          >
            Buy Membership Plan
          </h1>
          <div className="contact-form">
            <Row>
              <Col lg={6} md={12}>
                <label>
                  Payment mode<span style={{ color: "red" }}>*</span>
                </label>
                <div className="input-field">
                  <input type="text" name="first_name" />
                </div>

                <label>
                  Plan<span style={{ color: "red" }}>*</span>
                </label>
                <div className="input-field">
                  <input type="text" name="last_name" />
                </div>
              </Col>

              <Col lg={6} md={12}>
                <label>
                  Activation Date <span style={{ color: "red" }}>*</span>
                </label>
                <div className="input-field">
                  <input type="date" />
                </div>
                <label>
                  Bank Detail <span style={{ color: "red" }}>*</span>
                </label>
                <div class="input-field">
                  <input type="email" name="email" />
                </div>
              </Col>
            </Row>
            <button
              style={{
                marginLeft: "38%",
                marginTop: "30px",
                borderColor: "red",
              }}
              className="bounced"
            >
              By Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membersow;
