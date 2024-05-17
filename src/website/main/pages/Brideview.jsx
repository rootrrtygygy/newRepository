import React, { useEffect } from "react";
import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import bannerImage from "../Images/bride.webp";
const Brideview = () => {
  const image = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image as the background
    backgroundSize: "100% 100%", // Make the background image cover the container
    backgroundRepeat: "no-repeat",
    width: "100% auto",
    height: "500px",
    marginTop:"100px"  // Set the desired height (adjust as needed)
  };

  const [Cast, setCast] = useState([]);
  const [isShow, setcolor] = useState(false);
  const [isSho, setcolo] = useState(false);
  const [brideData, setBrideData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [param,setparam]= useSearchParams()





  useEffect(() => {
    fetch(
      "http://marriagebureau.ajspire.com/api/member/imformation/for_fillter"
    ).then((result) => {
      result.json().then((resp) => {
        setCast(resp.cast);
        // console.log(resp.cast);
      });
    });
  }, []);


  return (
    <div>
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
      <div className="text-center">
        <Link to="/bride">
          <button
            className=" text-white "
            style={{
              marginTop: "20px",
              height: "30px",
              backgroundColor: isShow ? "Red" : "white",
              color: isShow ? "white" : "Red",
              borderColor: "Red",
              borderRadius: "5px",
            }}
            onMouseEnter={() => setcolor(true)}
            onMouseLeave={() => setcolor(false)}
          >
            Go Back
          </button>
        </Link>
      </div>

      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="center_7 clearfix">
            <div className="center_7_middle clearfix">
              <div className="text-center">
              <input
              class="form-control  contact "
           
              type="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              aria-label="Search"
              style={{ backgroundColor:"white" }}
            />

                <button
                  className=" text-white "
                  style={{
                    height: "30px",
                    backgroundColor: isSho ? "Red" : "white",
                    color: isSho ? "white" : "Red",
                    borderColor: "Red",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={() => setcolo(true)}
                  onMouseLeave={() => setcolo(false)}
                >
                  Search Cast
                </button>
              </div>
            </div>
          </div>
        </div>
        {Cast.filter((castMember)=>{
        return searchTerm ==='' ? castMember:castMember.caste.includes(searchTerm);
      }).map((castMember, index) => {
          return (
            <Link to="/bridecast">
              <div className="contact2">
                <h4
                  className="text-center"
                  style={{ paddingTop: "15px", color: "white" }}
                >
                  {castMember.caste}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
      <section id="center_7" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_7 clearfix">
              <div className="center_7_middle clearfix">

                {brideData.map((items, index) => (
                  <div key={index} className="col-sm-6 col-md-4 center_6_middle_left clearfix">
                    <div className="center_7_middle_left_inner clearfix">
                      <Card style={{ width: '30rem', boxShadow: '0 0 40px 12px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img
                          variant="top"
                          src={
                            items.member_user_img1
                              ? `https://admin.royalmarriagebureau.com/uploads/userimg/${items.member_user_img1}`
                              : 'https://th.bing.com/th/id/R.605bba7f14743385c0d9ee248fd0161f?rik=6vsd1aSThRnRcg&riu=http%3a%2f%2fwww.healthysmilesflintdentist.com%2fassets%2fimages%2ftemp-male-new.jpg&ehk=BGwWlxmx8IyqSxBbMEXL9FgCn6Ht4LDEYZ343x1CYe0%3d&risl=&pid=ImgRaw&r=0'
                          }
                          className="custom-img"
                          style={{ height: '350px', objectFit: 'cover' }}
                        />

                        <ListGroup className="list-group-flush text-center" style={{ width: '100%' }}>
                          <ListGroup.Item>Name: {items.name}</ListGroup.Item>
                          <ListGroup.Item>Birth Date: {items.date_of_birth}</ListGroup.Item>
                          <ListGroup.Item>Height: {items.height}</ListGroup.Item>
                          <ListGroup.Item>Age: {items.age}</ListGroup.Item>
                          <ListGroup.Item>Education: {items.member_highest_education}</ListGroup.Item>
                          <ListGroup.Item>Number: {items.number}</ListGroup.Item>
                          <ListGroup.Item>Body Type: {items.member_body_type}</ListGroup.Item>
                          <ListGroup.Item>Occupation: {items.occupation}</ListGroup.Item>
                          <ListGroup.Item>Cast: {items.caste}/-</ListGroup.Item>
                          <ListGroup.Item>Taluka: {items.taluka_name}</ListGroup.Item>
                          <ListGroup.Item>Blood Group: {items.blood_group}</ListGroup.Item>
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
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="center_7" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="center_7 clearfix">
              <div className="center_7_middle clearfix">
                <div className="col-sm-6 col-md-4 center_6_middle_left clearfix">
                  <div className="center_7_middle_left_inner clearfix">
                    <Card
                      style={{
                        width: "30 rem",
                        boxShadow: "0 0 40px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/originals/a0/67/73/a067731b6de02c036fd2eb26fda881ef.jpg"
                        className="custom-img"
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                      <ListGroup
                        className="list-group-flush"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        <ListGroup.Item>Birth Date: 2000-01-24</ListGroup.Item>
                        <ListGroup.Item>
                          Height: Not Assign meter
                        </ListGroup.Item>
                        <ListGroup.Item>Age: 24 Years</ListGroup.Item>
                        <ListGroup.Item>
                          Occupation: Not Assign..
                        </ListGroup.Item>
                        <ListGroup.Item>Education: M.A..</ListGroup.Item>
                        <ListGroup.Item>employed_in: Working..</ListGroup.Item>
                        <ListGroup.Item>income: 100000/-</ListGroup.Item>
                        <ListGroup.Item>Taluka: Koregaon</ListGroup.Item>
                      </ListGroup>

                      <Card.Body>
                        <button className=" btn btn-success">
                          View Profile
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 center_6_middle_left clearfix">
                  <div className="center_7_middle_left_inner clearfix">
                    <Card
                      style={{
                        width: "30 rem",
                        boxShadow: "0 0 40px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://1.bp.blogspot.com/-asJbtxWBBPM/XabQ98yhpQI/AAAAAAAAGHQ/136WrHqyRtozPYmWO0Up8sFFxA9a-FxNACK4BGAYYCw/s1600/WhatsApp%2BImage%2B2019-10-15%2Bat%2B5.48.26%2BAM.jpeg "
                        className="custom-img"
                        style={{
                          width: "282px",
                          height: "350px",
                          objectFit: "cover",
                        }}
                      />
                      <ListGroup
                        className="list-group-flush"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        <ListGroup.Item>Birth Date: 2000-01-24</ListGroup.Item>
                        <ListGroup.Item>
                          Height: Not Assign meter
                        </ListGroup.Item>
                        <ListGroup.Item>Age: 24 Years</ListGroup.Item>
                        <ListGroup.Item>
                          Occupation: Not Assign..
                        </ListGroup.Item>
                        <ListGroup.Item>Education: M.A..</ListGroup.Item>
                        <ListGroup.Item>employed_in: Working..</ListGroup.Item>
                        <ListGroup.Item>income: 100000/-</ListGroup.Item>
                        <ListGroup.Item>Taluka: Koregaon</ListGroup.Item>
                      </ListGroup>

                      <Card.Body>
                        <button className=" btn btn-success">
                          View Profile
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 center_6_middle_left clearfix">
                  <div className="center_7_middle_left_inner clearfix">
                    <Card
                      style={{
                        width: "30 rem",
                        boxShadow: "0 0 40px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/originals/b4/66/19/b466193d0cb133e0c8f3b7dc79a9782e.jpg "
                        className="custom-img"
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                      <ListGroup
                        className="list-group-flush"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        <ListGroup.Item>Birth Date: 2000-01-24</ListGroup.Item>
                        <ListGroup.Item>
                          Height: Not Assign meter
                        </ListGroup.Item>
                        <ListGroup.Item>Age: 24 Years</ListGroup.Item>
                        <ListGroup.Item>
                          Occupation: Not Assign..
                        </ListGroup.Item>
                        <ListGroup.Item>Education: M.A..</ListGroup.Item>
                        <ListGroup.Item>employed_in: Working..</ListGroup.Item>
                        <ListGroup.Item>income: 100000/-</ListGroup.Item>
                        <ListGroup.Item>Taluka: Koregaon</ListGroup.Item>
                      </ListGroup>

                      <Card.Body>
                        <button className=" btn btn-success">
                          View Profile
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Brideview
