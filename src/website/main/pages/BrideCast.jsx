import React from 'react'
import { Link } from 'react-router-dom';
import bannerImage from '../Images/bride.webp';
const BrideCast = () => {
  const image = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image as the background
    backgroundSize: '100% 100%', // Make the background image cover the container
    backgroundRepeat: 'no-repeat',
    width: '100% auto',
    height: '500px',
    marginTop:"100px"  // Set the desired height (adjust as needed)
  };
  return (
    <div>
    <div class="Toastify"></div> 
    <div className="container-fluid" style={image}>
        <div className="carousel " >
          <div class="center clearfix"><div class="col-sm-7 center_left clearfix">
            <div class="center_left_inner clearfix">
              <h1 style={{ marginTop: "200px" }}>Brides</h1>
              <h3></h3>
              <h5><a href="/" style={{ color: "white" }}>Home</a></h5>

            </div>
          </div>
          </div>

        </div>
      </div>
  
       
      <h2 className='text-center text-danger ' style={{marginTop:"30px"}}>Not Assign Bride List</h2>

    </div>
  )
}

export default BrideCast
