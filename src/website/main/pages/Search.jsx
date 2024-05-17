

import React, { useEffect, useState } from 'react';
import Auth_User from '../../authentication/Auth_User';
import './Search.css'; // Import your CSS file if needed
import { Link } from 'react-router-dom';
import { Card, ListGroup, } from 'react-bootstrap';
const Search = () => {
  const [Cast, SetCast] = useState([]);
  const [age, Setage] = useState([]);
  const [State, Setstate] = useState([]);
  const [Hight, SetHight] = useState([]);
  const [weight, Setweight] = useState([]);
  const [Dis, SetDis] = useState([]);
  const [Taluka, SetTaluka] = useState([]);
  const [Village, SetVillage] = useState([]);
  const { http, token } = Auth_User();
  const [show, SetShow] = useState(0);
  const [Member, Setmember] = useState([]);
  const [Data, Setfillter] = useState({
    gender: '0',
    cast: '0',
    marital_status: '0',
    max_age: '0',
    min_age: '0',
    emploay: '0',
    state: '0',
    height: '0',
    weight: '0',
    body_type: '0',
    body_color: '0',

  });
  const Oniputchange = (e) => {
    Setfillter({ ...Data, [e.target.name]: e.target.value })
  };
  const Submit_search = (e) => {
    e.preventDefault();
    const mergedDAta = {
      ...Data,
    }
    SetShow(1);
    http.post(`http://marriagebureau.ajspire.com/api/get/fillter/data`, mergedDAta).then((res) => {
      Setmember(res.data);
      console.log('hello', res.data);
    }).catch((e) => {
      console.log(e);
    });
  }


  const Getweight = () => {
    fetch("http://marriagebureau.ajspire.com/api/member/imformation/for_fillter").then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data.weight)
        Setweight(data.weight)
      }
    )
  }
  const GetHight = () => {
    fetch("http://marriagebureau.ajspire.com/api/member/imformation/for_fillter").then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data.height)
        SetHight(data.height)
      }
    )
  }
  const Getstate = () => {
    fetch("http://marriagebureau.ajspire.com/api/member/imformation/for_fillter").then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data.state);
        Setstate(data.state)
      }
    )
  }
  const Getcast = () => {
    fetch("http://marriagebureau.ajspire.com/api/member/imformation/for_fillter").then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data.cast);
        SetCast(data.cast)
      }
    )
  }
  const Getage = () => {
    fetch("http://marriagebureau.ajspire.com/api/get/age").then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data.data)
        Setage(data.data);
      }
    )
  }
  const Getdis = (e) => {
    fetch(`http://marriagebureau.ajspire.com/api/get/district/${e}`).then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data);
        SetDis(data.district);

      }
    )
  }
  const GetTaluka = (e) => {
    fetch(`http://marriagebureau.ajspire.com/api/get/taluka/${e}`).then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        console.log(data)
        SetTaluka(data.talukas)
      }
    )
  }
  const GetVillage = (e) => {
    console.log(e);
    let a = e;
    fetch(`http://marriagebureau.ajspire.com/api/get/village/${a}`).then(
      (responce) => {
        return responce.json();
      }
    ).then(
      (data) => {
        console.log(data)
        SetVillage(data.village)
      }
    )
  }
  useEffect(() => {
    Getcast();
    Getage();
    Getstate();
    GetHight();
    Getweight();
  }, [token]);


  const sectionStyle = {
    backgroundImage: `url('https://kamatharjun.b-cdn.net/wp-content/uploads/2023/03/South-Indian-wedding-photography-PA-123.jpg' )`, // Replace 'your-image-url.jpg' with the actual image URL
    backgroundSize: "cover", // Adjust as needed
    // backgroundPosition: "center", // Adjust as needed
    // height: "400px",
    // color: "black",
  
   

    backgroundRepeat: "no-repeat", // Adjust as needed
    // // Additional CSS properties for the section
    // color: "white", // Text color
  };
  return (
    <div>

      <section id='center' className="clearfix " style={sectionStyle} >
        <div className="center_main clearfix">
          <div className="container">
            <div className="row">
              <div className="center clearfix">
                <div className="col-sm-7 center_left clearfix">
                  <div className="center_left_inner clearfix">
                    <h1 style={{ marginTop: '39px' }}>Search here</h1>
                    <h3></h3>
                    <h5>Always For Your Service</h5>
                    <h4><Link to={'/register'}>Register</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {show ? (<section id="center_7" className="clearfix">
          <div className="container">
          <button className="btn btn-success" onClick={() => SetShow(0)}>
                    Back To Search
                  </button>
            <div className="row">

              <div className="center_7 clearfix">
                <div className="center_7_middle clearfix">

                  {Member.map((items, index) => (
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
                              style={{ backgroundColor: 'green', height: '40px', marginBottom: '20px' }}  onClick={() => Member(items.member_id)} >    <Link to={`/viewProfile/${items.member_id}`}>View Profile</Link>  </button>) : (
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
        </section>) : (
      <>
        <div className="container mt-4" style={{ marginTop: "15px" }}>
          <form action="process.php" method="POST" className='box'>
            <h1 className="text-center">Basic Filters</h1>
            <hr />
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown1">Gender:</label>
                <select id="dropdown1" name="dropdown1" className="form-control" onChange={(e)=>Oniputchange(e)}>
                  <option value="option1">Select a Gender</option>
                  <option value="option2">Female</option>
                  <option value="option3">Male</option>
                  <option value="option4">Other</option>
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown2">Caste:</label>
                <select id="dropdown2" name="dropdown2" className="form-control"  onChange={(e) => Oniputchange(e)} >
                  <option value="option1">Select a Caste</option>
                  {
                    Cast.map((mcast) => (
                      <option value={mcast.caste_id}>{mcast.caste}</option>
                    ))
                  }

                  {/* <option value="option3">Option 3</option>
                <option value="option4">Option 4</option> */}
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown3">Marital Status:</label>
                <select id="dropdown3" name="dropdown3" className="form-control" onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Marital Status</option>
                  <option value="option2">Unmarried</option>
                  <option value="option3">Divorced</option>
                  <option value="option4">Widowed</option>
                  <option value="option4">Separated</option>

                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown1">Min Age:</label>
                <select id="dropdown1" name="dropdown1" className="form-control" onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Min Age</option>
                  {
                    age.map((mage) =>
                    (
                      <option value={mage.age_id}>{mage.age_name}</option>
                    ))
                  }
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown2">Max Age:</label>
                <select id="dropdown2" name="dropdown2" className="form-control" onChange={(e) => Oniputchange(e)}>
                  <option value="option1"> Select a Max Age</option>
                  {
                    age.map((mage) =>
                    (
                      <option value={mage.age_id}>{mage.age_name}</option>
                    ))
                  }

                </select>
              </div>
              <div className='form-group col-md-4'>

                <span style={{ color: "white" }}> .</span>
              </div>
            </div>

            <div className="text-center mt-3">
              <span style={{ color: "white" }}> .</span>

            </div>
          </form>
        </div>
        <div className="container mt-4" style={{ marginTop: "15px" }}>
          <form action="process.php" method="POST" className='box'>
            <h1 className="text-center">Regional Filters</h1>
            <div className='form-row'>
              <hr />
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown1">Employed In (Working Sector):</label>
                <select id="dropdown1" name="dropdown1" className="form-control" onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Employed In (Working Sector)</option>
                  <option value="option2">Government</option>
                  <option value="option3">Private</option>
                  <option value="option4">Business</option>
                  <option value="option4">Defence</option>
                  <option value="option4">Self Employed</option>
                  <option value="option4"> Not Working</option>


                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown2">State Living In:</label>
                <select id="dropdown2" name="dropdown2" className="form-control" onChange={(e) => { Oniputchange(e);Getdis(e.target.value); }}>
                  <option value={''} >Select a State Living In</option>
                  {
                    State.map((mstate) => {
                      return (
                        <option value={mstate.state_id} >{mstate.state_name}</option>
                      )
                    })
                  }

                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown3">District Living In:</label>
                <select id="dropdown3" name="dropdown3" className="form-control" onChange={(e) => { Oniputchange(e);GetTaluka(e.target.value); }}>
                  <option value={''}>Select a District Living In </option>
                  {
                    Dis.map((mdis) => {
                      return (
                        <option value={mdis.dist_id} >{mdis.dist_name}</option>
                      )
                    })
                  }

                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown1">Taluka Living In:</label>
                <select id="dropdown1" name="dropdown1" className="form-control" onChange={(e) => { Oniputchange(e); GetVillage(e.target.value); }}>
                  <option value={''}>Select a Taluka Living In</option>
                  {
                    Taluka.map((mtaluka) => {
                      return (
                        <option value={mtaluka.taluka_id} >{mtaluka.taluka_name}</option>
                      )
                    })
                  }

                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown2">Village Living In:</label>
                <select id="dropdown2" name="dropdown2" className="form-control"onChange={(e) => Oniputchange(e)}>
                  <option value={''}>Select a Village Living In</option>
                  {
                    Village.map((mvillage) => {
                      return (
                        <option value={mvillage.village_id} >{mvillage.village_name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className='form-group col-md-4'>

                <span style={{ color: "white" }}> .</span>
              </div>
            </div>

            <div className="text-center mt-3">

              <span style={{ color: "white" }}> .</span>
            </div>
          </form>
        </div>
        <div className="container mt-4" style={{ marginTop: "15px" }}>
          <form action="process.php" method="POST" className='box'>
            <h1 className="text-center">Physical Appearance</h1>
            <div className='form-row'>
              <hr />
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown1">Height:</label>
                <select id="dropdown1" name="dropdown1" className="form-control" onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Height</option>
                  {
                    Hight.map((mhight) => (
                      <option value={mhight.height_id}>{mhight.height}</option>

                    ))
                  }
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown2">Weight:</label>
                <select id="dropdown2" name="dropdown2" className="form-control"onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Weight </option>
                  {
                    weight.map((mweight) => (
                      <option value={mweight.weight_id}>{mweight.weight}</option>
                    ))
                  }
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown3">Body Type:</label>
                <select id="dropdown3" name="dropdown3" className="form-control"onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Body Type</option>
                  <option value="option3">Slim</option>
                  <option value="option4"> Average</option>
                  <option value="option4">Atheletic</option>
                  <option value="option4">Heavy</option>


                </select>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label htmlFor="dropdown1">Complextion (Body Color):</label>
                <select id="dropdown1" name="dropdown1" className="form-control"onChange={(e) => Oniputchange(e)}>
                  <option value="option1">Select a Complextion (Body Color)r</option>
                  <option value="option2">Very Fair</option>
                  <option value="option3">Fair</option>
                  <option value="option4">Wheatish</option>
                  <option value="option4">Wheatish Brown</option>
                  <option value="option4">Dark</option>

                </select>
              </div>
              <div className='form-group col-md-4'>
                {/* <label htmlFor="dropdown2">Caste:</label>
              <select id="dropdown2" name="dropdown2" className="form-control">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select> */}
                <span style={{ color: "white" }}> .</span>
              </div>
              <div className='form-group col-md-4'>
                {/* <label htmlFor="dropdown3">Select an option:</label>
              <select id="dropdown3" name="dropdown3" className="form-control">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select> */}
                <span style={{ color: "white" }}> .</span>
              </div>
            </div>
            {/* Add more rows if needed */}
            {/*<span style={{color:"white"}}> .</span>.. */}
            <div className="text-center mt-3">
              <span style={{ color: "white" }}> .</span>
              {/* <input type="submit" className="btn btn-primary" value="Search" /> */}
            </div>
          </form>
        </div>
        <div className="text-center  mt-3">

          <input type="submit" style={{ width: "100px" }} className="btn btn submit-button" value="Search" onClick={(e)=>Submit_search(e)} />
        </div>
        </>)}
      </div>

      );
}

      export default Search;

