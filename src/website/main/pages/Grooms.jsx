import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import bannerImage from '../Images/banner.jpg';
import './Groom.css'

import { Link } from 'react-router-dom';
import { Card, ListGroup, } from 'react-bootstrap';
import Auth_User from '../../authentication/Auth_User';

const Grooms = () => {

  const [isShow, setcolor] = useState(false);
  const [Cast, setCast] = useState([]);
  const [brideData, setBrideData] = useState([]);
 const{http,token}=Auth_User();

 const Member = (member_id) => {
  http.get(`/get_member_detail_groom/${member_id}`)

    .then((response) => {
      console.log("data", response.data.data);
    
      
    })
    
    .catch((error) => {
      // Handle errors
      console.error('Error :', error);
    });
};
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

  const image = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image as the background
    backgroundSize: '100% 100%', // Make the background image cover the container
    backgroundRepeat: 'no-repeat',
    width: '100% auto',
    height: '500px',
    marginTop:"100px" // Set the desired height (adjust as needed)
  };




  const items = Cast.map((castMember, index) => {
    return (
      <div
        key={index}
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
        {castMember.caste}
      </div>
    );
  });



  return (
    <div>





      <div className="container-fluid" style={image}>
        <div className="carousel " >
          <div class="center clearfix"><div class="col-sm-7 center_left clearfix">
            <div class="center_left_inner clearfix">
              <h1 style={{ marginTop: "200px" }}>Grooms</h1>
              <h3></h3>
              <h5><a href="/" style={{ color: "white" }}>Home</a></h5>

            </div>
          </div>
          </div>

        </div>
      </div>
      <div>
        <h2 className='text-center' style={{ color: "red", margin: "30px 20px ", fontWeight: "bold" }}>Our Grooms</h2>
      </div>
      <div className='container p-5'>
        <h4 className='text-black ' style={{ fontWeight: "bold" }}>Cast:</h4>
      </div>



      <div className="container" style={{ marginTop: "20px" }}>

        <div className="row">
          <div className="center_7 clearfix">
            <div className="center_7_middle clearfix">
              <div className="carousel-container" style={{ maxWidth: "650px", margin: "0 auto" }}>
                <div >
                  <AliceCarousel
                    items={items}
                    responsive={{ 0: { items: 5 }, 768: { items: 5 } }} // Adjust the responsive settings as needed
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



        <div className='text-center'>
          <Link to="/groomlist">

            <button className=' text-white ' style={{ marginTop: "30px", height: "30px", backgroundColor: isShow ? "Red" : "white", color: isShow ? "white" : "Red", borderColor: "Red", borderRadius: "5px" }} onMouseEnter={() => setcolor(true)} onMouseLeave={() => setcolor(false)} >Veiw all</button>
          </Link>
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
                            <ListGroup.Item style={{marginBottom:"20px"}}>Blood Group: {items.blood_group}</ListGroup.Item>
                           
                            {token ? (<button
                              className='btn btn-info '
                              style={{ backgroundColor: 'green', height: '40px', marginBottom: '20px' }}   onClick={() => {Member(items.member_id)}} >    <Link to={`/viewProfile/${items.tbl_user_id}`}>View Profile</Link>  </button>) : (
                              <Link to={'/login'}><button
                              className='btn btn-info '
                              style={{ backgroundColor: 'green', height: '40px', marginBottom: '20px' }} > View Profile</button></Link>
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








      </div>

    </div>
  );
};

export default Grooms;
