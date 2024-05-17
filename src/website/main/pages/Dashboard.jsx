import React from "react";
import banner from "../Images/Images/indian-wedding-background-af1hetugsl7pkndq.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Auth_User from "../../authentication/Auth_User";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Dashboard.css";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const notify = (M) => toast.error(M);
  const { http, user, token, logout } = Auth_User();
  const [pmatch, setPmatch] = useState([]);
  const [mypmatch, setMyPmatch] = useState([]);

  const [Cast, SetCast] = useState([]);
  const banner1 = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "500px",
    marginTop: "-120px",
  };

  const myprofmatches = () => {
    http.get(`/show_profile_match_record/${user.id}`).then((res) => {
      setMyPmatch(res.data.data);
      // console.log(res.data.data);
    });
  };

  const pmatchpro = () => {
    http.get(`/recently_join/${user.id}`).then((res) => {
      setPmatch(res.data.data);
      // console.log(res.data.data);
    });
  };
  const addtoshortlist = (id) => {
    http.get(`/shortlisted/profile/${user.id}/${id}`).then((res) => {
      console.log("short", res);
      notify(res.data.message);
    });
  };

  useEffect(() => {
    http.get(`/member/imformation/for_fillter`).then((res) => {
      SetCast(res.data.cast);
    });
    pmatchpro();
    myprofmatches();
  }, []);

  return (
    <>
      <div className="body1">
        <section id="" class="clearfix" style={{ marginTop: "00px" }}>
          <div class="dashboard_main clearfix">
            <div class="container" style={banner1}>
              <div class="row">
                <div class="dashboard clearfix col-lg-12 col-sm-12 col-md-12">
                  <div class="col-sm-7 col-lg-7 dashboard_left clearfix">
                    <div
                      class="center_left_inner clearfix_1"
                      style={{ position: "relative" }}
                    >
                      <h1
                        style={{
                          marginTop: "190px",
                          fontFamily: "'Pacifico', cursive",
                        }}
                      >
                        Dashboard
                      </h1>

                      <h3>
                        <Link to="/" style={{ color: "white" }}>
                          Home-Dashboard
                        </Link>
                        <br />
                        <Link to={"/profile"} className="btn btn-success aa">
                          Profile
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="main-body">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" className="main-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">User</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
              {/* /Breadcrumb */}
              <div className="row gutters-sm">
                <div className="col-md-4 col-sm-12 mb-3">
                  <div className="card2">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          className="rounded-circle"
                          width={150}
                        />
                        <div className=" car mt-3">
                          <p
                            className="text-danger mb-1 "
                            style={{ fontSize: "30px" }}
                          >
                            Upload Photo
                          </p>
                          {/* <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                          <button className="btn btn-primary">
                            Change Profile Picture
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col col-sm-12 col-md-12"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="card2 bg-danger ">
                      <p className="btn btn-warning "> My Profile</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to="/profile">Edit Profile</Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to="/profile">Manage Photos</Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to={`/shortlisted/${user.id}`}>Shortlist Profile</Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to={"/Ivisited"}>I Visited Profile</Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to={"/whovisit"}>Who Viewed Your Profile</Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to="/">Lock My Profile</Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <Link to="/">Active Plans</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-lg-8 col-sm-12 col-md-8">
                    <div className="card1 mb-3">
                      <div className="card-body1 w-100">
                        <div className="row">
                          <div className="col-md-6">
                            <p className>Hello, {user.first_name} </p>
                            <p />
                            <br />
                            <span>Your Profile is 47% Completed</span>
                            <div
                              className="progress"
                              style={{
                                height: 30,
                                width: 280,
                                marginTop: 5,
                                marginBottom: 5,
                              }}
                            >
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow={47}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  backgroundColor: "orange",
                                  animation: "pulse 6s  infinite", // Inline animation CSS
                                }}
                              />
                            </div>

                            <span
                              className="mb-3"
                              style={{ fontSize: 13, marginTop: 5 }}
                            >
                              Tip : Insert all details which can help you to
                              find perfect life partner
                            </span>
                            <div className="text-center">
                              <Link to="/profile">
                                {" "}
                                <button
                                  className="btn btn-danger"
                                  style={{
                                    color: "white",
                                    borderRadius: "9px",
                                  }}
                                >
                                  Please Complete Your Profile
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                                  </svg>
                                </button>
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <p
                              className="bg-warning"
                              style={{ alignItems: "end" }}
                            >
                              Matri Id : {user.user_matri_id}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="card1 h-100 ">
                        <div className="card-body3 ">
                          <h4 className="d-flex align-items-center mb-3">
                            Search By Id
                          </h4>
                          <input
                            type="text"
                            name="abc"
                            id="abc"
                            placeholder="for search enter martri id"
                            style={{ height: "40px", width: "220px" }}
                          />
                          <Link to="/View_by_matri_id">
                            <button
                              type="submit"
                              style={{
                                backgroundColor: "rgb(220, 53, 69)",
                                color: "white",
                                border: "none",
                                height: "35px",
                                width: "90px",
                                borderRadius: "9px",
                              }}
                            >
                              Search
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-3">
                      <div className="card1 h-100 ">
                        <div className="card-body1">
                          <h6 className="d-flex align-items-center mb-3">
                            <i className=" text-info mr-2">
                              My Profile Matches
                            </i>
                            <hr />
                          </h6>

                          <div className="scroll-container">
                            <div className="content">
                              <div className="large-content">
                                <table style={{ width: "50%" }}>
                                  {mypmatch.map((el) => (
                                    <>
                                      {" "}
                                      <br />
                                      <tr>
                                        <td>
                                          {" "}
                                          <img
                                            style={{
                                              height: "70px",
                                              width: "70px",
                                            }}
                                            src={
                                              el.member_user_img1
                                                ? `https://admin.royalmarriagebureau.com/uploads/userimg/${el.member_user_img1}`
                                                : "https://th.bing.com/th/id/R.605bba7f14743385c0d9ee248fd0161f?rik=6vsd1aSThRnRcg&riu=http%3a%2f%2fwww.healthysmilesflintdentist.com%2fassets%2fimages%2ftemp-male-new.jpg&ehk=BGwWlxmx8IyqSxBbMEXL9FgCn6Ht4LDEYZ343x1CYe0%3d&risl=&pid=ImgRaw&r=0"
                                            }
                                            alt={`User ${user.id}`}
                                          />
                                        </td>
                                        <td>{el.first_name}</td>
                                        <td>{el.age}yrs.</td>
                                        <td>
                                          <Link
                                            to={`/shortlisted/${el.member_id}/${user.id}`}
                                            onClick={() => {
                                              addtoshortlist(el.id);
                                            }}
                                          >
                                            {" "}
                                            ☆
                                          </Link>
                                        </td>
                                        <td>
                                          <button className="btn btn-outline-danger">
                                            view profile
                                          </button>
                                        </td>
                                      </tr>
                                    </>
                                  ))}
                                </table>
                                <ToastContainer />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-3">
                      :
                      <div className="card1 h-100 ">
                        <div className="card-body1">
                          <h6 className="d-flex align-items-center mb-3">
                            <i className=" text-info mr-2">Recently joined</i>
                            <hr />
                          </h6>

                          <div style={{ width: "100%", overflowX: "auto" }}>
                            <div className="scroll-container">
                              <div className="content">
                                <div className="large-content">
                                  <table style={{ width: "50%" }}>
                                    {pmatch.map((el) => (
                                      <>
                                        <br />
                                        <tr>
                                          <td
                                            style={{
                                              maxWidth: "100px",
                                              overflow: "hidden",
                                            }}
                                          >
                                            {/* <img
                                              src={el.member_user_img1}
                                              alt="img"
                                            /> */}
                                            <img
                                              style={{
                                                height: "70px",
                                                width: "70px",
                                              }}
                                              src={
                                                el.member_user_img1
                                                  ? `https://admin.royalmarriagebureau.com/uploads/userimg/${el.member_user_img1}`
                                                  : "https://th.bing.com/th/id/R.605bba7f14743385c0d9ee248fd0161f?rik=6vsd1aSThRnRcg&riu=http%3a%2f%2fwww.healthysmilesflintdentist.com%2fassets%2fimages%2ftemp-male-new.jpg&ehk=BGwWlxmx8IyqSxBbMEXL9FgCn6Ht4LDEYZ343x1CYe0%3d&risl=&pid=ImgRaw&r=0"
                                              }
                                              alt={`User ${user.id}`}
                                            />
                                          </td>
                                          <td
                                            style={{
                                              maxWidth: "200px",
                                              overflow: "hidden",
                                            }}
                                          >
                                            {el.first_name}
                                          </td>
                                          <td>{el.age}yrs.</td>
                                          <td>
                                            <Link
                                              // to={`/shortlisted/${el.member_id}/${user.id}`}
                                            >
                                              {" "}
                                              ☆
                                            </Link>
                                          </td>
                                          <td>
                                            <button className="btn btn-outline-danger">
                                              View Profile
                                            </button>
                                          </td>
                                        </tr>
                                      </>
                                    ))}
                                  </table>
                                  <ToastContainer />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <section />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Dashboard;
