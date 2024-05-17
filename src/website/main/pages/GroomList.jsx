import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Groom.css'
import { Link,   } from 'react-router-dom';
import bannerImage from '../Images/banner.jpg';

const GroomList = () => {
  const image = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image as the background
    backgroundSize: '100% 100%', // Make the background image cover the container
    backgroundRepeat: 'no-repeat',
    width: '100% auto',
    height: '500px', 
    marginTop:"100px" // Set the desired height (adjust as needed)
  };
  const [isShow, setcolor] = useState(false)
  const [isSho, setcolo] = useState(false)
  const [Cast, setCast] = useState([]); 
  const [brideData, setBrideData] = useState([]);
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
  useEffect(() => {
    fetch("http://marriagebureau.ajspire.com/api/get_member_detail_groom").then(
      (result) => {
        result.json().then((resp) => {
          console.log("hii", resp.data.data);
          setBrideData(resp.data.data); // Update the state with the response data, not resp.data.data
        });
      }
    );
  }, []);
  const [search, Setsearch] = useState('');
 

  console.log(search);

  
 


  

  return (
    <div>


<div className="container-fluid" style={image}>
        <div className="carousel " >
          <div class="center clearfix"><div class="col-sm-7 center_left clearfix">
            <div class="center_left_inner clearfix">
              <h1 style={{ marginTop: "200px" }}>Grooms</h1>
              <h3></h3>
              <h5><a href="/"  style={{color:"white"}}>Home</a></h5>
             
            </div>
          </div>
          </div>

        </div>
      </div>
      <div>
        <h2 className='text-center' style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>Our Grooms</h2>
      </div>
 <div className='text-center'>
<Link to='/groom'>
        <button className=' text-white '  style={{ marginTop: "20px", height: "30px", backgroundColor: isShow ? "Red" : "white", color: isShow ? "white" : "Red", borderColor: "Red", borderRadius: "5px" }} onMouseEnter={() => setcolor(true)} onMouseLeave={() => setcolor(false)} >Go Back</button>
        </Link>
      </div>
     

      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="center_7 clearfix">
            <div className="center_7_middle clearfix">
              <div className='text-center'>

                <input
              class="form-control  contact "
           
              type="search"
              onChange={(e) =>  Setsearch(e.target.value)}
              placeholder="Search..."
              aria-label="Search"
              style={{ backgroundColor:"white" }}
            />

                <button className=' text-white ' style={{ height: "30px", backgroundColor: isSho ? "Red" : "white", color: isSho ? "white" : "Red", borderColor: "Red", borderRadius: "5px" }} onMouseEnter={() => setcolo(true)} onMouseLeave={() => setcolo(false)} 
              >Search Cast</button>
              </div>


            </div>

          </div>
        </div>
        {
      Cast.filter((castMember)=>{
        return search==='' ? castMember:castMember.caste.includes(search);
      }).map((castMember, index) => {
    return (
        <div className='contact2' > 
        
         
          <Link to={`/groomcast/${castMember.caste_id}`}>
        <h4 className='text-center ' style={{paddingTop:"15px",color:"white"}}> {castMember.caste}</h4>
        </Link>
     
        </div>
    )})
}
      
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


    </div>
  )
}

export default GroomList