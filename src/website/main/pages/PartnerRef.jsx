import React from 'react'
import { Link } from 'react-router-dom';

const PartnerRef = () => {
  const image = {
    backgroundImage: `url(https://i.pinimg.com/originals/a1/43/2d/a1432dfb69390f53b97b9283081e4316.jpg)`, // Use the imported image as the background
    backgroundSize: "100% 100%", // Make the background image cover the container
    backgroundRepeat: "no-repeat",
    width: "100% auto",
    height: "500px", // Set the desired height (adjust as needed)
  };

  const h2Style = {
    fontWeight: "bolder",
    fontSize: "32px",
    marginTop: "30px",
    color: "red",
    textAlign: "center",
  };

  const pStyle = {
    fontSize: "20px",
    marginTop: "15px",
    textAlign: "center",
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container-fluid" style={image}>
        <div className="carousel ">
          <div className="center clearfix">
            <div className="col-sm-7 center_left clearfix">
              <div className="center_left_inner clearfix">
                <h1 style={{ marginTop: "200px" }}>Profile</h1>
                <h5>
                  <a href="/" style={{ color: "white" }}>
                    Home
                  </a>
                </h5>
                <h3></h3>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4" style={{ marginTop: "100px" }}>
        <span><h1> <Link to='/profile'>Profile </Link> / <Link to='/partnerref'>Partner Preference</Link> </h1></span>
      </div>
      <div className="container mt-4" style={{ marginTop: "15px" }}>
        <hr style={{width:"100%"}}/>
        <form action="process.php" method="POST" >
          <h1 style={{ color: "green" }}>Basic Preference</h1>
          <hr style={{width:"100%"}}/>
          
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Age</label>
              <div className='row'>
                <div className='col-md-4'>
              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
              </div>
              <div className='col-md-2'>
              <h1 style={{color:'red'}}>To</h1>
              </div>
             
              <div className='col-md-4'>
              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
              </div>
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Height</label>
              <div className='row'>
                <div className='col-md-4'>
              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
              </div>
              <div className='col-md-2'>
              <h1 style={{color:'red'}}>To</h1>
              </div>
             
              <div className='col-md-4'>
              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
              </div>
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Looking For</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Eating Habits</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Physical Status</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Smoking Habits</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Drinking Habits</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>

          </div>

        </form>

      </div>
      <div className="container mt-4" style={{ marginTop: "15px" }}>
        <hr style={{width:"100%"}}/>
        <form action="process.php" method="POST" >
          <h1 style={{ color: "green" }}>Religion Preference</h1>
          <hr style={{width:"100%"}}/>
          
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Religion</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Caste</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Mother Tongue:</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Star</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            
          </div>

        </form>
        </div>
        <div className="container mt-4" style={{ marginTop: "15px" }}>
        <hr style={{width:"100%"}}/>
        <form action="process.php" method="POST" >
          <h1 style={{ color: "green" }}>Location Details</h1>
          <hr style={{width:"100%"}}/>
          
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">State Living In</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">District Living In</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Taluka Living In</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Village Living In</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            
          </div>

        </form>

      </div>
      <div className="container mt-4" style={{ marginTop: "15px" }}>
        <hr style={{width:"100%"}}/>
        <form action="process.php" method="POST" >
          <h1 style={{ color: "green" }}>Education & Occupation Details</h1>
          <hr style={{width:"100%"}}/>
          
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Highest Education</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Additional Degree</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Employed In (Working Sector)</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Occupation</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor="dropdown1">Annual Income</label>

              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1">-----Select ----</option>

                <option value="hello">Yes</option>
                <option value="hello">No</option>
              </select>
            </div>
            
          </div>

        </form>

      </div>
      <div className="container mt-4" style={{ marginTop: "15px" }}>
        <hr style={{width:"100%"}}/>
        <form action="process.php" method="POST" >
        <h1 style={{ color: "green" }}>Partner Expectation</h1>
          <hr style={{width:"100%"}}/>
          <h1>Partner Expectation</h1>
          <div className='form-group col-md-6'>
            <textarea style={{width:"100%"}} name="" id="" cols="120" rows="8"></textarea>
             </div>

        </form>

      </div>
      <div className="text-center  mt-3">
            
            <input style={{width:"100px"}} type="submit" className="btn btn submit-button" value="Submit" /> 
            </div>
    </div>
  )
}

export default PartnerRef