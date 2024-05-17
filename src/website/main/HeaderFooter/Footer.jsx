import React from "react";
import FLogo from "../Images/Images/Logo.jpg";
import { Link } from "react-router-dom";
import conimg from "../Images/Images/Footer backimg.jpg";

const Footer = () => {
  const sectionStyle = {
    backgroundImage: `url(${conimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    marginTop: "100px",
    color: "black",
    backgroundRepeat: "no-repeat",
    color: "white",
  };
  return (
    <div>
      <section id="" className="clearfix" style={sectionStyle}>
        <div className="container">
          <div className="row">
            <div className="footer clearfix">
              <div className="footer_top clearfix">
                <hr style={{ marginTop: "35px" }} />
                <h4></h4>
              </div>

              <div className="col-sm-3 footer_middle_left clearfix">
                <div className="footer_middle_left_inner clearfix">
                  <h2>
                    <Link to={"/"} className="head">
                      <img
                        src={FLogo}
                        alt="Your Logo"
                        style={{
                          height: "100px",
                          width: "200px",
                          marginTop: "20px",
                        }}
                      />
                    </Link>
                  </h2>
                </div>
              </div>

              <div className="footer_middle clearfix">
                <div className="col-sm-3 footer_middle_left clearfix">
                  <div className="footer_middle_left_inner clearfix "></div>
                </div>
                <div className="col-sm-3 footer_middle_left clearfix">
                  <div className="footer_middle_left_inner clearfix">
                    <h2>Terms and Policy</h2>
                    <p>
                      <a href="#">Terms & Conditions</a>
                    </p>
                    <p>
                      <a href="#">Privacy Policy</a>
                    </p>
                    <p>
                      <a href="#">Grooms</a>
                    </p>
                    <p>
                      <a href="#">Brides</a>
                    </p>
                    <p>
                      <a href="#">About Us</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 footer_middle_left clearfix">
                <div className="footer_middle_left_inner clearfix">
                  <label style={{ color: "white" }}>
                    Get Newsletter Updates By Subscribe
                  </label>
                  <br />
                  <input
                    type="search"
                    placeholder="Enter email"
                    className="btn"
                  />
                  <button className="btn btn-7" style={{ height: "37px",margin:"5px" }}>
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="footer_bottom clearfix">
              <div style={{marginBottom:"10px"}}>Follow us on</div>
                <ul className="social-network social-circle">
                
                  <li>
                    <a href="#" className="icoRss" title="Rss">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/Royal-marriage-bureau/100090053242512/"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/royal_m_bureau?t=Ach6L4F4nOJhn5op5S4pjg&s=09"
                      className="icoTwitter"
                      title="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/royalmarriagebureau042/?igshid=NTA5ZTk1NTc%3D"
                      className="icoInstagram"
                      title="Instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@royalmarriagebureau9076"
                      className="icoYouTube"
                      title="YouTube"
                    >
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
                <p >© 2023 Bandhan Marriage Bureau. All Rights Reserved</p>
              </div>

              <div className="footer_bottom clearfix">
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
