import React from 'react'
import Screenshot from '../Images/Screenshot 2023-10-10 151248.png';
import AliceCarousel from 'react-alice-carousel';
import { useState } from 'react';
import { useEffect } from 'react';

import { Card, ListGroup, } from 'react-bootstrap';

import Auth_User from '../../authentication/Auth_User';
import { useParams } from 'react-router-dom';
import './View.css'

const ViewProfile = () => {
  const { http, token, user } =Auth_User();

  const [view, setview] = useState({});
  const [slide,setslide]=useState([]);
  const { id } = useParams();
  const getdata = () => {
    http.get(`/show_single_profile_match_record/${id}`)

      .then((res) => {
        console.log("data is view", res.data.data);
        setview(res.data.data);
        // setslide(res.data.data)

      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }
  const getcartdata = () => {
    http.get(`http://marriagebureau.ajspire.com/api/member/imformation/for_fillter`)
      .then((Res) => {
        setslide(Res.data.cast);
        console.log(Res.data.cast);
      }).catch((error) => {
        console.log(error);
      });
  }



  useEffect(() => {
    getdata();
    getcartdata();
  }, [id, token])


  const image = {
    // backgroundImage: `url(https://lingayatshubvivah.com/image/slid7.jpg)`, // Use the imported image as the background
    backgroundImage: `url(https://www.arjunkarthaphotography.com/wp-content/uploads/2020/06/Delhi-wedding-photography-story-ArjunVarsha-47.jpg)`,
    backgroundSize: '100% 100%', // Make the background image cover the container
    backgroundRepeat: 'no-repeat',
    width: '100% auto',
    height: '550px', 
    marginTop:"100px" // Set the desired height (adjust as needed)
  };


  
  const items = slide.map((items, index) => {
    return (
      <div
        key={index}
        className="bg-danger text-center text-white"
        style={{
          height: 150,
          width: 150,
          color: "white",

          fontSize: 14,
        }}
      >
        <img
          src={
            items.member_user_img1
              ? `https://admin.royalmarriagebureau.com/uploads/userimg/${items.member_user_img1}`
              : 'https://bootdey.com/img/Content/avatar/avatar7.png'
          }
          className="custom-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

      </div>

    );
  });
  

  return (
    <div>
      <div className="container-fluid" style={image}>
        <div className="carousel " >
          <div class="center clearfix">
            <div class="col-sm-7 center_left clearfix">
              <div class="center_left_inner clearfix">
                <h1 style={{ marginTop: "200px" }}>View Profile</h1>
                <h3></h3>
                <h5><a href="/" style={{ color: "white" }}>Home</a></h5>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container p-5'>
        <h4 className='text-black ' style={{ fontWeight: "bold", marginTop: "30px" }}>Images:</h4>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>

        <div className="row">
          <div className="center_7 clearfix">
            <div className="center_7_middle clearfix">
              <div className="carousel-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
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


        <div className='container p-5'>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black' }}>Contact:</h4>
        </div>
        <div className="container" style={{ marginTop: "20px" }}>


          <div className='row' style={{ display: "flex", justifyContent: "center" }}>


            <div className='icon' >
              <div className='icon1' >
                <i class="fa-solid fa-phone font"></i>

              </div>


            </div>

            <div className='icon'>
              <div className='icon1' >
                <i class="fa-solid fa-video font"></i>
              </div>
            </div>
            <div className='icon'>
              <div className='icon1' >
                <i class="fa-solid fa-message font"></i>
              </div>
            </div>
            <div className='icon'>
              <div className='icon1' >
                <i class="fa-brands fa-whatsapp font"></i>
              </div>
            </div>
          </div>

        </div>

        <div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black' }}>Basic Details:</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>


        <div className='container p-5 '>
          <h4 style={{ textAlign: "center", color: 'black' }}>Matri Id : RMBID-2</h4>
        </div>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Name: <span className="normal-font-size">{view.first_name}</span></h4>

      <h4>Mobile No:{view.mobile_no_alternative}</h4> 
      <h4>Date Of Birth:{view.date_of_birth}</h4>
      <h4>Mother tongue:{view.mother_tongue}</h4>
      <h4>Height:{view.height}</h4>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>Email:{view.email}</h4>
      <h4>Gender:{view.gender}</h4>
      <h4>Age:{view.age}</h4>
      <h4>Marital Status:{view.marital_status}</h4>
    </div>
  </div>

</div>
<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Religion Information :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>Religion:{view.religion}</h4>
       <h4>Caste:{view.caste}</h4> 
 
    
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Sub Caste:</h4> 
      <h4>Willing To Marry Other Cast:</h4>
    </div>
  </div>
  
       
        </div>



<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Education & Preferences :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>Highest Education:{view.member_highest_education}</h4>
       <h4> Employed In :{view.member_employed_in}</h4> 
 <h4> Annual Income:{view.member_annual_income} /-</h4>
    
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Additional Degree:{view.member_additional_degree}</h4> 
      <h4>Occupation:{view.member_occupation}</h4>
    </div>
  </div>
 
</div>
<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Family Details :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4> Family Type:{view.member_family_type}</h4>
       <h4> Family Status  :{view.member_familystatus}</h4> 
 <h4> Family Value:{view.member_family_value}</h4>
 <h4>Father Occupation:{view.member_fathers_occupation}</h4>
</div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>No of Brothers:{view.member_brothers}</h4> 
      <h4>Married Brothers:{view.member_no_of_married_bro}</h4>
      <h4>No of Sisters:{view.member_sisters}</h4>
      <h4>Married Sisters:{view.member_no_of_married_sis}</h4>
    </div>
  </div>

          
        
</div>
<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Location & Information :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>  State Living In:{view.member_state_living_in}</h4>
       <h4> District Living In :{view.member_district_living_in}</h4> 
</div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Village Living In:{view.member_village_living_in}</h4> 
    
    </div>
  </div>
 
</div>

<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Habbits & Hobbies :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>  Eating Habbits:{view.member_diet}</h4>
       <h4> Smoking Habbits :{view.member_smoking_habits}</h4> 
   

</div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Drinking Habbits:{view.member_drink_habit}</h4> 
    
    </div>
  </div>
 
</div>

<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Physical Attributes :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>  Height:{view.height_id}</h4>
       <h4> Weight :{view.weight}</h4> 
   <h4>Body Type :{view.member_body_type}</h4>

</div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Complexion:{view.member_complexion}</h4> 
    <h4>Physical Status:{view.member_physical_status}</h4>
    </div>
  </div>
 
</div>

<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Horoscope Information:</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>  Rasi:{view.rashi}</h4>
       <h4> Star :{view.Star}</h4> 
   

</div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Birth Time:{view.member_birth_time}</h4> 
    <h4>Birth Place:{view.member_birth_palce}</h4>
    </div>
  </div>
 
</div>

<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>About Me:</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        
        <input type="email" class="red-border" placeholder="Enter your email">{view.member_about_me}</input>
       
<div className='container p-5 ' style={{marginTop:"50px"}}>

          <h4 style={{ textAlign: "center", color: 'black' }}>Partner Expectations</h4>
        </div>
        <div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"10px" }}>Basic Details:</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>  Looking For:</h4>
       <h4> Age :{view.age}</h4> 
   <h4>Height:{view.height}</h4>
      
</div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Eating Habbits:{view.member_diet}</h4> 
    <h4>Drinking Habbits :{view.member_drink_habit}</h4>
    <h4>Physical Status :{view.member_physical_status}</h4>
    </div>
  </div>
 
</div>
<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Education & Professional Preferences :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>Highest Education:{view.member_highest_education}</h4>
       <h4> Employed In :{view.member_employed_in}</h4> 
 <h4> Annual Income:{view.member_annual_income} /-</h4>
    
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Additional Degree:{view.member_additional_degree}</h4> 
      <h4>Occupation:{view.member_occupation}</h4>
    </div>
  </div>
 
</div>
 
</div>
<div className='container p-5 '>
          <h4 style={{ fontWeight: "bold", marginTop: "30px", color: 'black',marginTop:"50px" }}>Religion & Preferences :</h4>
        </div>
        <hr style={{ height: "2px" }}></hr>
        <div className="container" style={{ marginTop: "20px" }}>
  <div className="row justify-content-center ">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4>Religion:{view.religion}</h4>
       <h4>Caste:{view.caste}</h4> 
 
    
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <h4>Mother Toungue:{view.mother_tongue}</h4> 
      <h4>Nakshtras:{view.Star}</h4>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default ViewProfile
