import React from "react";

import img3 from "../Images/img3.jpeg";
import img4 from "../Images/image2.jpg";
import img5 from "../Images/img5.jpg";
import image from "../Images/wedding-marriage-couple-image-background-free-kd3p croped.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import image1 from "../Images/Images/Banner 1.jpg"
import image2 from "../Images/Images/Banner 2.jpg"
import image3 from "../Images/Images/Banner 3.jpg"
import card1 from "../Images/Images/crad1.jpg"
import card2 from "../Images/Images/card2.jpeg"
import card3 from "../Images/Images/card3.jpeg"
import card4 from "../Images/Images/card4.jpg"
import card5 from "../Images/Images/card5.jpg"
import card6 from "../Images/Images/card6.jpg"
import { useState } from "react";
import { useEffect } from "react";
import "./Modal.css"
import Auth_User from "../../authentication/Auth_User";


const Home = () => {
const {http,token}=Auth_User();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true); // Open the modal when the component mounts

    // Cleanup function to close the modal when the component unmounts
    return () => {
      setIsOpen(false);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  // const openModal = () => {
  //   setIsOpen(true);
  // }

  // const closeModal = () => {
  //   setIsOpen(false);
  // }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1, image2, image3
  ];
  useEffect(() => {

    // CODE TO SCROLL TO TOP WHEN COMPONENT RENDERS
    //  window.scrollTo({ top: 0, behavior: 'smooth' });

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const div = {
    fontFamily: "'pacifico',cursive"
  }

  return (
    <div>
      {/* Register section */}

      {/* <section id="center" className="clearfix">
        <div className="center_main clearfix"> 
          <div className="container">
            <div className="row">
              <div className="center clearfix">
                <div className="col-sm-7 center_left clearfix">
                  <div className="center_left_inner clearfix">
                    <h1>Royal Marriage Bureau</h1>
                    <h3></h3>
                    <h5>Always For Your Service</h5>
                    <h4>
                      <Link to="/register">Register</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <div className="container-fluid">
        <div className="carousel ">
          <img src={images[currentImageIndex]} style={{ marginTop: "110px" }} alt={`Image ${currentImageIndex}`} width={"100%"} height={"500px"} />
        </div>
      </div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {!token && isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" style={{ color: "black" }} onClick={closeModal}>&times;</span>

            <div className="row">

              <div className="col-lg-6 text-center">
                <div style={{ marginTop: "25px", marginLeft: "15px" }}>
                  <img style={{width:'100%'}} src="https://royalmarriagebureau.com/static/media/slider1.277588a38b333961fc58.jpg" alt="#" className="mx-auto d-block" />
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{ marginTop: "40px", marginLeft: "15px" }} >
                  <h1 style={div} className="text-center">"Update Your Profile and Find Your Perfect Match!"</h1>
                  <p style={{ marginTop: "25px", marginLeft: "15px", marginBottom: "25px", ...div }} className="text-center">Stay proactive and regularly update your profile with new information, photos, and preferences to attract the right connections.</p>
                  <h3 style={div} className="text-center"> <Link to='/login' style={{ color: "red" }}> Continue With Login...</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* <section id="center_2" className="clearfix">
    <div className="container">
      <div className="row">
        <div className="center_2 clearfix">
          <div className="center_2_top clearfix">
            <h2>Our Best Services</h2>
            <hr className="hr_1" />
            <p>Bureau useful to give Marriage Services</p>
          </div>
          <div className="center_2_middle clearfix">
            <div className="col-sm-4 center_2_middle_left clearfix">
              <div className="center_2_middle_left_inner clearfix">
                <p><i className="fa fa-tree" /></p>
                <h2><a href="#">Mauris &amp; Consectetur</a></h2>
                <h4><i className="fa fa-chevron-right" />  Conubia &amp; Praesent libero</h4>
                <h4><i className="fa fa-chevron-right" />  Conubia to integer</h4>
                <h4><i className="fa fa-chevron-right" />   Nec dapibus arcu</h4>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  </section> */}


      {/* images section */}

      <section id="center_6" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_6 clearfix">
              <div className="center_6_top clearfix">
                <h2>SuccessFul Marriges</h2>
                <hr className="hr_1" />
              </div>
              <div className="center_6_middle clearfix">
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_6_middle_left_inner clearfix">
                    <p>
                      <img
                        src={card1}
                        alt="Image 1"
                        className="img-responsive"
                        style={{
                          height: "300px",
                          marginTop: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_6_middle_left_inner clearfix">
                    <p>
                      <img
                        src={card2}
                        alt="Image 1"
                        className="img-responsive"
                        style={{
                          height: "300px",
                          marginTop: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_6_middle_left_inner clearfix">
                    <p>
                      <img
                        src={card3}
                        alt="Image 1"
                        className="img-responsive"
                        style={{
                          height: "300px",
                          marginTop: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_6_middle_left_inner clearfix">
                    <p>
                      <img
                        src={card4}
                        alt="Image 1"
                        className="img-responsive"
                        style={{
                          height: "300px",
                          marginTop: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_6_middle_left_inner clearfix">
                    <p>
                      <img
                        src={card5}
                        alt="Image 1"
                        className="img-responsive"
                        style={{
                          height: "300px",
                          marginTop: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_6_middle_left_inner clearfix">
                    <p>
                      <img
                        src={card6}
                        alt="Image 1"
                        className="img-responsive"
                        style={{
                          height: "300px",
                          marginTop: "30px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </p>
                  </div>
                </div>
            
              </div>
              <div className="center_6_bottom clearfix">
                <h5>
                  <a href="#">VIEW MORE TESTIMONIALS</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section */}

      <section id="center_7" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_7 clearfix">
              <div className="center_7_top clearfix">
                <h2>Our Best Services</h2>
                <hr className="hr_1" />
              </div>
              <div className="center_7_middle clearfix">
                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_7_middle_left_inner clearfix">
                    <img
                      src={card3}
                      alt="Description of your image"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block", // To remove any extra spacing
                        margin: "0 auto", // To center the image
                      }}
                    />
                    <hr className="hr_1" />
                    <h2>Profile Register</h2>
                    <hr className="hr_1" />
                    <p>
                      Praesent mauris. Fusce nec tellus augue semper porta.
                      Mauris massa. Vestibulum lacinia.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_7_middle_left_inner clearfix">
                    <img
                      src={card5}
                      alt="Description of your image"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                    <hr className="hr_1" />
                    <h2>Matchmaking</h2>
                    <hr className="hr_1" />
                    <p>
                      Praesent mauris. Fusce nec tellus augue semper porta.
                      Mauris massa. Vestibulum lacinia.
                    </p>
                  </div>
                </div>

                <div className="col-sm-4 center_6_middle_left clearfix">
                  <div className="center_7_middle_left_inner clearfix">
                    <img
                      src={img3}
                      alt="Description of your image"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                    <hr className="hr_1" />
                    <h2>Profile Sharing</h2>
                    <hr className="hr_1" />
                    <p>
                      Praesent mauris. Fusce nec tellus augue semper porta.
                      Mauris massa. Vestibulum lacinia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* play button and image section */}
      <section>
        <div
          style={{ padding: "0 20px", boxSizing: "border-box", }}
        >
          <img src={image} alt="drone-position-img"
            style={{ maxWidth: "100%", height: "auto", display: "block", width: "100%", }}
          />
        </div>
        <div
          className="container"
          style={{ position: "relative", bottom: "280px", color: "white" }}
        >
          <div className="banner__video--content position__relative text-center">
            <div>
              <a
                href="https://www.youtube.com/@royalmarriagebureau9076"
                data-gallery="video"
                className="play-button"
                style={{
                  color: "white",
                  fontSize: "60px",
                  position: "absolute",
                  marginTop: "-140px",
                }}
              >
                <i className="fa fa-play-circle"></i>

                <span className=""></span>
              </a>
            </div>
            <h2 className="banner__video--title text-white mb-15">
              All Service we All.
            </h2>
            <p className="banner__video--info text-white">
              Get Your Quote or Call:
              <a href="tel:+88021544142">(+91 7020403671)</a>
            </p>
            <a className="btn btn-danger" href="/register">
              Register Now
            </a>
          </div>
        </div>
      </section>
      {/* Last section */}

      <section id="center_4" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_4 clearfix">
              <div className="center_4_top clearfix">
                <h2>
                  Millions have found their Life Partners at Royal Marriage
                  Bureau
                </h2>
                <hr className="hr_1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="center_5" className="clearfix">
        <div className="center_5 clearfix">
          <div className="col-sm-7 center_5_left clearfix">
            <div className="center_5_left_inner clearfix">
              <h2>
                Download our mobile app & find start searching your life partner
                in a tap.
              </h2>
              <hr className="hr_1" />
              <h4>A trusted Platform</h4>
              <p>
                A marriage bureau is a business that helps people find suitable
                matches for marriage. This can be done through online services
                or by matching people based on their preferences and interests.
              </p>
              <h5>
                <h4>Download App Now !</h4>
                <hr className="hr_1 " style={{ color: "red" }} />
              </h5>
            </div>
          </div>
          <div className="col-sm-5 center_5_right clearfix">
            <div className="center_5_right_inner clearfix">
              <p>
                <img src={img5} width="100%" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="center_8" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_8 clearfix">
              <div className="center_8_top clearfix">
                <h2>Tell us always</h2>
                <hr className="hr_1" />
              </div>
              <div className="center_8_middle clearfix">
                <div className="col-sm-4 center_8_middle_left clearfix">
                  <div className="center_8_middle_left_inner clearfix">
                    <h2>W</h2>
                    <h6>Noveber 27, 2016</h6>
                    <p>
                      Class aptent taciti sociosqu torquent per conubia nostra,
                      per inceptos C. Curabitursodales!
                    </p>
                    <h5>
                      <a href="#">READ MORE</a>
                    </h5>
                  </div>
                </div>
                <div className="col-sm-4 center_8_middle_center clearfix">
                  <div className="center_8_middle_left_inner clearfix">
                    <h2>Mauris Semper</h2>
                    <h6>November 21, 2016</h6>
                    <p>
                      Vestibulum lacinia arcu eget nulla.Class aptent taciti
                      sociosqu quis sem at nibh elementum!!
                    </p>
                    <h5>
                      <a href="#">READ MORE</a>
                    </h5>
                  </div>
                </div>
                <div className="col-sm-4 center_8_middle_right clearfix">
                  <div className="center_8_middle_left_inner clearfix">
                    <h2>Vestibulum</h2>
                    <h6>Noveber 25, 2016</h6>
                    <p>
                      Aptent taciti sociosqu ad litora torquent conubia nostra,
                      per inceptos C. Curabitursodales!
                    </p>
                    <h5>
                      <a href="#">READ MORE</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
