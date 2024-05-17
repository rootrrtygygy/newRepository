import React, { useEffect, useState } from "react";
import "./Membership.css";
import Images from "../Images/coin-removebg-preview.png";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth_User from "../../authentication/Auth_User";

const MemberShip = () => {
  const { token, http } = Auth_User();
  const [member, setMember] = useState([]);
  // const [isShow, setcolor] = useState(false)

  const image = {
    backgroundImage: `url(https://th.bing.com/th/id/R.c3f03a512c48e509e8bea8634cf6378e?rik=5SyLGh%2bYkbfKHw&riu=http%3a%2f%2fwww.grandweddings.co.in%2fwp-content%2fuploads%2f2020%2f01%2fWedding-Event-1170x780.jpg&ehk=Q%2bODPGjrb3Y9kY17BmoH9EzCBXg1xBwXBsmAgIrtfmY%3d&risl=&pid=ImgRaw&r=0)`, // Use the imported image as the background
    backgroundSize: "100% 100%", // Make the background image cover the container
    backgroundRepeat: "no-repeat",
    width: "100% auto",
    height: "500px",
    marginTop: "100px", // Set the desi#DC height (adjust as needed)
  };
  const membership = () => {
    http.get(`/membership_plan/view`).then((res) => {
      setMember(res.data.data);
    });
  };

  useEffect(() => {
    membership();
  }, [token]);
  return (
    <>
      <div className="container-fluid" style={image}>
        <div className="carousel ">
          <div class="center clearfix">
            <div class="col-sm-7 center_left clearfix">
              <div class="center_left_inner clearfix">
                <h1 style={{ marginTop: "200px" }}>Membership</h1>
                <h3></h3>
                <h5>
                  <a href="/ " style={{ color: "white" }}>
                    Home
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2
        className="text-center"
        style={{
          fontWeight: "bolder",
          fontSize: "32px",
          marginTop: "20px",
          color: "#DC",
        }}
      >
        Membership Plan
      </h2>
      <p
        className="text-center"
        style={{ fontSize: "20px", marginTop: "15px" }}
      >
        {" "}
        Select from our multiple membership plan and find your best life partner
        with <br /> membership benefits..
      </p>

      <section
        id="center_7"
        className="clearfix"
        style={{ backgroundColor: "var(--white-color)" }}
      >
        <div className="container">
          <div className="row">
            <div className="center_7 clearfix">
              <div className="center_7_middle clearfix">
                {member.map((ele) => (
                  <div className="col-sm-6 col-md-4 center_6_middle_left clearfix">
                    <div className="center_7_middle_left_inner clearfix">
                      <Card
                        style={{
                          width: "30rem",
                          boxShadow: "0 0 40px 12px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <div className="custom-img-container">
                            <Card.Img
                              className="about_btn"
                              variant="top"
                              src={Images}
                            />
                            <div className="overlay"></div>
                          </div>
                        </div>

                        <ListGroup
                          className="list-group-flush text-center"
                          style={{ width: "100%" }}
                        >
                          <h4 style={{ color: "black" }}>Plan Name:</h4>
                          <p
                            style={{
                              fontSize: "20px",
                              fontWeight: "bolder",
                              marginTop: "15px",
                              color: "black",
                            }}
                          >
                            {ele.plan_name}
                          </p>
                          <hr className="hr "></hr>
                          <h4 style={{ color: "black" }}>Plan Amount:</h4>
                          <h4 style={{ color: "#DC3545", marginTop: "15px" }}>
                            {ele.paymat_amount}
                          </h4>
                          <hr className="hr "></hr>
                          <h4 style={{ color: "black" }}>Plan Duration</h4>
                          <h4 style={{ color: "#DC3545", marginTop: "15px" }}>
                            {ele.plan_duration}
                          </h4>
                          <hr className="hr "></hr>
                          <h4 style={{ color: "black" }}>Profile Views</h4>
                          <h4 style={{ color: "#DC3545", marginTop: "15px" }}>
                            {ele.allow_profile}
                          </h4>
                          <hr className="hr "></hr>

                          {token ? (
                            <button
                              className="btn btn-info "
                              style={{
                                backgroundColor: "green",
                                height: "40px",
                                marginBottom: "20px",
                              }}
                            >
                              {" "}
                              <Link to="/buymember">Buy Now</Link>{" "}
                            </button>
                          ) : (
                            <Link to={"/login"}>
                              <button
                                className="btn btn-info "
                                style={{
                                  backgroundColor: "green",
                                  height: "40px",
                                  marginBottom: "20px",
                                }}
                              >
                                {" "}
                                View Profile
                              </button>
                            </Link>
                          )}
                        </ListGroup>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberShip;
