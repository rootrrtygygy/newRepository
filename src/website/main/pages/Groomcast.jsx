import React from 'react'
import bannerImage from '../Images/banner.jpg';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Groomcast = () => {
  const [Cast,setCast]=useState([])
  const{caste_id}=useParams();
  

      useEffect(() => {
        fetch(
          `http://marriagebureau.ajspire.com/api/member/imformation/for_fillter`
        ).then((result) => {
          result.json().then((resp) => {
            setCast(resp.cast);
          console.log("cast",resp.cast);
          });
        });
      }, [caste_id]);
  
  const image = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image as the background
    backgroundSize: '100% 100%', // Make the background image cover the container
    backgroundRepeat: 'no-repeat',
    width: '100% auto',
    height: '500px',
    marginTop:"100px"  // Set the desired height (adjust as needed)
  };
  return (
    <>
    <div className="container-fluid" style={image}>
        <div className="carousel " >
          <div class="center clearfix"><div class="col-sm-7 center_left clearfix">
            <div class="center_left_inner clearfix">
              <h1 style={{ marginTop: "200px" }}>View Cast</h1>
              <h3></h3>
              <h5><a href="/" style={{color:"white"}}>Home</a></h5>
             
            </div>
          </div>
          </div>

        </div>
      </div>
      {
       Cast.map((items)=>{
        return(
<h2 className='text-center ' style={{marginTop:"30px",color:"#DC3545"}}>{items.caste}</h2>

       )})
      }

</>
  )
}

export default Groomcast