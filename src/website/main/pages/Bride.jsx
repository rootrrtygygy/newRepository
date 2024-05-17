import AliceCarousel from "react-alice-carousel";
import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import bannerImage from "../Images/bride.webp";
import Card from "react-bootstrap/Card";
import "./Groom.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const items = [
    <div
     
      className=" carousel-item bg-danger text-center text-white "
      style={{
        height: 90,
        width: 90,
        borderRadius: "50%",
        color: "white",
        paddingTop: 38,
        fontSize: 14,
        backgroundColor: "red",
      }}
    >
    
    </div>,

      <div
       
        className=" carousel-item bg-danger text-center text-white "
        style={{
          height: 90,
          width: 90,
          borderRadius: "50%",
          color: "white",
          paddingTop: 38,
          fontSize: 14,
          backgroundColor: "red",
        }}
      >
      
      </div>
      
 ,<div
     
 className="carousel-item bg-danger text-center text-white "
 style={{
   height: 90,
   width: 90,
   borderRadius: "50%",
   color: "white",
   paddingTop: 38,
   fontSize: 14,
   backgroundColor: "red",
 }}
>

</div>,

 <div
  
   className="carousel-item bg-danger text-center text-white "
   style={{
     height: 90,
     width: 90,
     borderRadius: "50%",
     color: "white",
     paddingTop: 38,
     fontSize: 14,
     backgroundColor: "red",
   }}
 >
 
 </div>,<div
     
     className="carousel-item bg-danger text-center text-white "
     style={{
       height: 90,
       width: 90,
       borderRadius: "50%",
       color: "white",
       paddingTop: 38,
       fontSize: 14,
       backgroundColor: "red",
     }}
   >
   
   </div>,

     <div
      
       className="carousel-item bg-danger text-center text-white "
       style={{
         height: 90,
         width: 90,
         borderRadius: "50%",
         color: "white",
         paddingTop: 38,
         fontSize: 14,
         backgroundColor: "red",
       }}
     >
     
     </div>
    
]
const Bride = () => {
  const [Cast, setCast] = useState([]);
  const [brideData, setBrideData] = useState([]);

 

  const image = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image as the background
    backgroundSize: "100% 100%", // Make the background image cover the container
    backgroundRepeat: "no-repeat",
    width: "100% auto",
    height: "500px",
    marginTop:"100px"  // Set the desired height (adjust as needed)
  };
  const [isShow, setcolor] = useState(false);
  // console.log(Cast);

      <div
       
        className="bg-danger text-center text-white "
        style={{
          height: 90,
          width: 90,
          borderRadius: "50%",
          color: "white",
          paddingTop: 38,
          fontSize: 14,
          backgroundColor: "red",
        }}
      >
    
      </div>
 

  return (
    <>
      <div class="Toastify"></div>
      <div className="container-fluid" style={image}>
        <div className="carousel ">
          <div class="center clearfix">
            <div class="col-sm-7 center_left clearfix">
              <div class="center_left_inner clearfix">
                <h1 style={{ marginTop: "200px" }}>Brides</h1>
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

      <div style={{ marginTop: "30px", marginLeft: "160px" }}></div>
      <h2 class="text-center text-danger mt-4" style={{ color: "red" }}>
        Our Brides
      </h2>
      <section class="team__section my-4">
        <div class="container p-3">
          <h3> Cast : </h3>
        </div>
        <div className="container" style={{ marginTop: "20px" }}>
       <div className="row">
    <div className="center_7 clearfix">
      <div className="center_7_middle clearfix">
        <div className="aa carousel-container"> 
        <AliceCarousel
                  items={items}
                  responsive={{ 0: { items: 6 }, 768: { items: 6 } }}
                  disableDotsControls
                  autoPlay
                  autoPlayInterval={1000}
                  infinite
                  disableButtonsControls
                  
                />
        </div>
      </div>
    </div>
  </div> 
          <div className="row">
            <div className="center_7 clearfix">
              <div className="center_7_middle clearfix">
                <div
                  className="carousel-container"
                  style={{ maxWidth: "650px", margin: "0 auto" }}
                >
                  <div>
                    <AliceCarousel
                      // Adjust the responsive settings as needed
                      disableDotsControls
                      autoPlay
                      autoPlayInterval={1000}
                      infinite
                      disableButtonsControls
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center ">
        <Link to="/brideview">
          <button
            className=" text-white "
            style={{
              marginTop: "50px",
              height: "35px",
              backgroundColor: isShow ? "White" : "Red",
              color: isShow ? "Red" : "White",
              borderColor: isShow ? "Red" : "White",
              borderRadius: "5px",
              
            }}
            onMouseEnter={() => setcolor(true)}
            onMouseLeave={() => setcolor(false)}
          >
            view all
          </button>
        </Link>
      </div>

      <section id="center_7" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_7 clearfix">
              <div className="center_7_middle clearfix">

              
                  <div className="col-sm-6 col-md-4 center_6_middle_left clearfix">
                    <div className="center_7_middle_left_inner clearfix">
                      <Card style={{ width: '30rem', boxShadow: '0 0 40px 12px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img
                          variant="top"
                          src={
                 
                              'https://th.bing.com/th/id/R.605bba7f14743385c0d9ee248fd0161f?rik=6vsd1aSThRnRcg&riu=http%3a%2f%2fwww.healthysmilesflintdentist.com%2fassets%2fimages%2ftemp-male-new.jpg&ehk=BGwWlxmx8IyqSxBbMEXL9FgCn6Ht4LDEYZ343x1CYe0%3d&risl=&pid=ImgRaw&r=0'
                          }
                          className="custom-img"
                          style={{ height: '350px', objectFit: 'cover' }}
                        />

                        <ListGroup className="list-group-flush text-center" style={{ width: '100%' }}>
                          <ListGroup.Item>Name: </ListGroup.Item>
                          <ListGroup.Item>Birth Date: </ListGroup.Item>
                          <ListGroup.Item>Height: </ListGroup.Item>
                          <ListGroup.Item>Age:</ListGroup.Item>
                          <ListGroup.Item>Education: </ListGroup.Item>
                          <ListGroup.Item>Number: </ListGroup.Item>
                          <ListGroup.Item>Body Type:</ListGroup.Item>
                          <ListGroup.Item>Occupation: </ListGroup.Item>
                          <ListGroup.Item>Cast: /-</ListGroup.Item>
                          <ListGroup.Item>Taluka:</ListGroup.Item>
                          <ListGroup.Item>Blood Group:</ListGroup.Item>
                          <button
                            className='btn btn-success'
                            style={{ backgroundColor: 'green', height: '40px', marginBottom: '20px' }}
                          >
                            View Profile
                          </button>
                        </ListGroup>

                      </Card>
                    </div>
                  </div>
               

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bride;
