import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Images/Logo.jpg";
import Auth_User from "../../authentication/Auth_User";

const Header = () => {
  const { http, user, token, logout } = Auth_User();
  

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const [activeTab, setActiveTab] = useState("HOME");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [isNavbarShrunk, setNavbarShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Add the 'navbar-shrink' class when the user has scrolled down 100 pixels
        setNavbarShrunk(true);
      } else {
        // Remove the 'navbar-shrink' class when the user has not scrolled down 100 pixels
        setNavbarShrunk(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles = {
    backgroundColor: isNavbarShrunk ? "#DC3545" : "#DC3545",
    height: isNavbarShrunk ? "100px" : "auto",
    padding: "50px",

    boxSizing: 'border-box',
    fontFamily: 'Ubuntu, sans-serif',
    textDecoration: 'none',
  };

  return (
    <>
    
      <section id="header">
      
        <nav
          className={`navbar   navbar-fixed-top ${
            isNavbarShrunk ? "navbar-shrink" : ""
          }`}
          style={navbarStyles}
        >
       
       <div className="container" style={{ height: '10px',width:"10%",marginBottom:"20px",marginTop:"-5px",float:"right" }}>
        <ul >
        <li className="header__contact--info__list text-white" id="google_translate_element">
          <div className="skiptranslate goog-te-gadget" dir="ltr">
            <div id=":0.targetLanguage"></div>
           
          </div>
        </li>
      </ul>
      {/* <select className="goog-te-combo" aria-label="Language Translate Widget" style={{ marginBottom: "10px", width: "10%", float: "right" }}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
      </select> */}
    </div>
          <div className="container">
          
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header page-scroll">
            
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
              
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              
              <Link to={"/"} className="">
                <img
                  src={Logo}
                  alt="Your Logo"
                  style={{
                    height: "50px",
                    width: "100px",
                    marginBottom: "20px",
                    marginLeft: "-20px",
                  }}
                />
              </Link>
              
            </div>
          
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
          
              <ul className="nav navbar-nav navbar">
                <li>
                
                  <Link
                    to="/"
                    className={`tag_menu ${
                      activeTab === "HOME" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("HOME")}
                  >
                    HOME
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`tag_menu ${
                      activeTab === "ABOUT" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("ABOUT")}
                  >
                    ABOUT
                  </Link>{" "}
                </li>

                <li>
                  <Link
                    to="/groom"
                    className={`tag_menu ${
                      activeTab === "GROOMS" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("GROOMS")}
                  >
                    GROOMS
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    to="/bride"
                    className={`tag_menu ${
                      activeTab === "BRIDES" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("BRIDES")}
                  >
                    BRIDES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className={`tag_menu ${
                      activeTab === "SEARCH" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("SEARCH")}
                  >
                    SEARCH
                  </Link>{" "}
                </li>

                <li>
                  <Link
                    to="/membership"
                    className={`tag_menu ${
                      activeTab === "MEMBERSHIP" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("MEMBERSHIP")}
                  >
                    MEMBERSHIP
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className={`tag_menu ${
                      activeTab === "CONTACT" ? "active_tab" : ""
                    }`}
                    onClick={() => handleTabClick("CONTACT")}
                  >
                    CONTACT
                  </Link>
                </li>
                <li>
                {token?(
                  <Link className="tag_menu" to={'/dashboard'}>DASHBOARD</Link>
                ):(null)}
                
                </li>
                <li className="dropdown">
                  {token ? (
                    <>
                      <a
                        className="tag_menu"
                        href="#"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                        style={{ marginLeft: "0px", marginTop: "0px" }}
                      >
                       <i className="fa-solid fa-image-portrait s_color" style={{fontSize:"30px",marginLeft:"10px",color:"white"}}></i>
                        
                      </a>
                      <ul className="dropdown-menu drop_1" role="menu" style={{textAlign:"left"}}>
                        <li>
                        <Link to={"/"}> <i className="fa fa-user s_color" /> Hello {user.first_name}</Link>
                        </li>
                        <li>
                        <Link to={"/profile"}><i className="fa-solid fa-image-portrait s_color"></i> Profile</Link>
                        </li>
                        <li>
                          <Link to="/login" onClick={logout}>
                          <i className="fa-solid fa-right-from-bracket"></i> Logout
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="tag_menu btn btn-7"
                        style={{ marginLeft: "20px" }}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="tag_menu btn btn-7"
                        style={{ marginLeft: "100px", marginTop: "-46px" }}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </li>
                <li>
                  
                </li>
               
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container-fluid */}
        </nav>
      </section>

      <section id="header_mini" >
        <div className="container navbar-fixed-top" style={{marginTop:"30px"}}>
          <div className="row">
            <div className="header_mini clearfix">
              <img
                src={Logo}
                alt="Your Logo"
                style={{
                  height: "50px",
                  width: "100px",
                  marginBottom: "20px",
                  marginLeft: "20px",
                }}
              />

              {token ? (
                <>
                      <Link
                        className="tag_menu btn btn-success"
                        to={'/dashboard'}
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                        style={{ marginLeft: "10px", marginBottom: "10px",width:"auto" }}
                      >
                        DASHBOARD
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu drop_1" role="menu" style={{textAlign:"left",marginLeft: "100px"}}>
                        <li>
                        <Link to={"/"}> <i className="fa fa-user s_color" /> Hello {user.first_name}</Link>
                        </li>
                        <li>
                        <Link to={"/profile"}><i className="fa-solid fa-image-portrait s_color"></i> Profile</Link>
                        </li>
                        <li>
                          <Link to="/login" onClick={logout}>
                          <i className="fa-solid fa-right-from-bracket"></i> Logout
                          </Link>
                        </li>
                      </ul>
                      <i className="fa-solid fa-image-portrait s_color" style={{fontSize:"30px",color:"white",marginLeft:"10px"}}/>
                    </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="tag_menu btn btn-7"
                    style={{ marginLeft: "20px" }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="tag_menu btn btn-7"
                    style={{ marginLeft: "20px" }}
                  >
                    Register
                  </Link>
                </>
              )}

              

              <div className="fixed-bottom  fdiv">
                <div className="button-container ">
                  <label>
                    {" "}
                   <Link to={'/'}> <i className="fa fa-home" /></Link>
                    <br />
                    Home
                  </label>
                  <label>
                    {" "}
                    <Link to={'/groom'}> <i className="fa fa-male" /></Link>
                    <br />
                    Grooms
                  </label>
                  <label>
                    {" "}
                    <Link to={'/bride'}> <i className="fa fa-female" /></Link>
                    <br />
                    Brides
                  </label>
                  <label>
                    {" "}
                    <Link to={'/contact-us'}> <i className="fa fa-phone" /></Link>
                    <br />
                    Contact
                  </label>
                </div>
              </div>
            </div>
            <a
              id="menu-toggle"
              className="btn btn-white btn-lg toggle"
              onClick={toggleSidebar}
            >
              <i className="fa fa-bars" />
            </a>
            <div
              id="sidebar-wrapper"
              className={isSidebarVisible ? "active" : ""}
            >
              <ul className="sidebar-nav ">
                <a
                  id="menu-close"
                  className="btn btn-default btn-lg pull-right toggle"
                >
                  <i className="fa fa-remove" onClick={toggleSidebar} />
                </a>
                <li className="sidebar-brand">
                  <a onClick={toggleSidebar}>Marriage </a>
                </li>
                <li>
                  <Link to={"/"} onClick={toggleSidebar}>HOME</Link>
                </li>
                <li>
                  <Link to={"/about"} onClick={toggleSidebar}>ABOUT</Link>
                </li>
                <li>
                  <Link to={"/groom"} onClick={toggleSidebar}>GROOMS</Link>
                </li>
                <li>
                  <Link to={"/bride"} onClick={toggleSidebar}>BRIDES</Link>
                </li>
                <li>
                  <Link to={"/search"} onClick={toggleSidebar}>SEARCH</Link>
                </li>
                <li>
                  <Link to={"/membership"} onClick={toggleSidebar}>MEMBERSHIP</Link>
                </li>
                <li>
                  <Link to={"/contact-us"} onClick={toggleSidebar}>CONTACT</Link>
                </li>
                <li className="dropdown">
                  <a
                    className="tag_menu"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    MORE
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu drop_1" role="menu">
                    <li>
                      <Link to={"/"} onClick={toggleSidebar}>Home</Link>
                    </li>

                    {token ? (
                      <Link to="/login" onClick={()=>{logout();toggleSidebar();}}>
                        Logout
                      </Link>
                    ) : (
                      <>
                        <li>
                          <Link to={"/register"} onClick={toggleSidebar}>Register</Link>
                        </li>
                        <li>
                          <Link to={"/login"} onClick={toggleSidebar}>Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
