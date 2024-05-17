import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Auth_User from '../../authentication/Auth_User';
import { toast } from 'react-toastify';

const Profile = () => {
  const [value, setvalue] = useState('');
  const [check, setCheck] = useState('');
  const [error, SetError] = useState('');
  const { http, token, user } = Auth_User();
  const notify = (M) => toast.error(M);
  const navigate = useNavigate();
  const [show, setshow] = useState(0);
  const validation =(e)=>{
    const value = e.target.value;
    if(value.trim()===''){
      SetError('please fill the data')
    }else{
      SetError('')
    }
  }
  const [userData, SetuserData] = useState({
    gender: '',
    age: '',
    Height: '',
    Smoking_Habits: '',
    Looking_For: '',
    Physical_Status: '',
    Earting_Habits: '',
    smoking_Habits: '',
    Drinking_Habits: '',
    religion: '',
    cast: '',
    mother_tongue: '',
    other_cast: '',
    state_Living: '',
    District_Living: '',
    Taluka_Living: '',
    village_Living: '',
    Highest_Education: '',
    Additional_education: '',
    occupation: '',
    Annual_income: '',
    property_detail: '',
    employed_in: '',
    textarea: ''
  });
  const onInput = (e) => {
    SetuserData({ ...userData, [e.target.name]: e.target.value });
  }
  const insubmit = () => {
    setshow(1);

    http.post(`http://marriagebureau.ajspire.com/api/partner/preference/store`, userData).then((res) => {
      alert("updated")
      // console.log(userData)
      // console.log("update", res.data.error);
    }).catch((error) => {
      console.log("error", error);
    });
    if (token != null) {
      navigate('/dashboard');
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"

    });
  }
  const [FormData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    age: '',
    blood_group: '',
    marital_status: '',
    date_of_birth: '',
    profile_created_by: '',
    number: '',
    mobile_no_alternative: '',
    mother_tongue: '',
    email: '',
    password: '',
    member_religin: '',
    member_caste: '',
    member_sub_caste: '',
    marry_other_cast: '',
   member_highest_education: '',
   member_additional_degree: '',
   member_employed_in: '',
   member_occupation: '',
   member_annual_income: '',
   member_property: '',
   member_father_name: '',
   member_mother_name: '',
   member_family_type: '',
   member_family_value: '',
   member_family_member: '',
   member_familystatus: '',
   member_fathers_occupation: '',
   member_relative: '',
   member_brothers: '',
   member_no_of_married_bro: '',
   member_sisters: '',
   member_no_of_married_sis: '',
   member_state_living_in: '',
   member_district_living_in: '',
   member_taluka_living_in: '',
   member_village_living_in: '',
   member_diet: '',
   member_smoking_habits: '',
   member_drink_habit:'',
   member_hobbies: '',
   member_height : '',
   member_weight: '',
   member_body_type: '',
   member_complexion: '',
   member_physical_status:'',
   member_rashi: '',
   member_nakshra: '',
   member_birth_time : '',
   member_birth_palce:'',
   member_about_me: '',
member_user_img1:'',
member_user_img3:'',
member_user_img2:'',
member_user_img4:'',
member_user_img5:'',
aadhar_img:''


  })
  const [Age, setage] = useState([]);
  const [profile, setcreate] = useState([]);
  const [mother, setmother] = useState([]);
  const [religion, setreligion] = useState([]);
  const [cast, setcast] = useState([]);
  const [subcast, setsubcast] = useState([]);
  const [state, setstate] = useState([]);
  const [district, setDistrictData] = useState([]);
  const [taluka, settaluka] = useState([]);
  const [village, setvillage] = useState([]);
  const [height, setheight] = useState([]);
  const [Weight, setweight] = useState([]);
  const [nakshatra, setnakshatra] = useState([]);
  const [Rashi, setRashi] = useState([]);
// console.log("hello",FormData);
  const Handlechange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }
  const Onsubmit = (e) => {
    e.preventDefault();
      console.log(FormData);

    http.post(`/profile/update`,FormData).then((response) => {
      // console.log(FormData);
    // setFormData(response.data.user)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
    // if (token != null) {
    //   navigate('/dashboard');
    // }
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"

    // });

  }
  // const handelFirstnamechange = (e) => {
  //   const value = e.target.value;
  //   setvalue(value);
  //   if (value.trim() === '') {
  //     SetError('filed required')
  //   } else {
  //     SetError('something wrong')
  //   }
  // }
  const getuser = () => {
    http.get(`http://marriagebureau.ajspire.com/api/user`).then((response) => {
      // console.log(response.data.user);
    })
  }
  const getage = () => {
    http.get(`http://marriagebureau.ajspire.com/api/get/age`).then((response) => {
      setage(response.data.data);
    })
  }
  const getcreate = () => {
    http.get(`http://marriagebureau.ajspire.com/api/get/profile_created_by`).then((response) => {
      setcreate(response.data.data)
      // console.log(response.data.data)
    })
  }
  const getmem = () => {
    http.get(`http://marriagebureau.ajspire.com/api/get/mother_tounge`).then((response) => {
      // console.log("toung", response.data.data)
      setmother(response.data.data);
    })
  }
  const education = () => {
    http.get(`http://marriagebureau.ajspire.com/api/get/education`).then((response) => {
      // console.log("education", response.data)

    })
  }
  useEffect(() => {
    getuser();
    getage();
    getcreate();
    getmem();
    education();
    getcartdata();
   

  }, [navigate, token])
  

  const getcartdata = () => {
    http.get(`http://marriagebureau.ajspire.com/api/member/imformation/for_fillter`).then((response) => {

      setreligion(response.data.religion)
      setcast(response.data.cast)
      setsubcast(response.data.sub_caste)
      setstate(response.data.state)
      setheight(response.data.height)
      setweight(response.data.weight)
      setnakshatra(response.data.nakshtra)
      setRashi(response.data.rashi)
    })
  }
  const getdist = (e) => {
    fetch(`http://marriagebureau.ajspire.com/api/get/district/${e}`).then(
      responce => {
        return responce.json();
      }
    ).then(
      data => {
        // console.log(data);
        setDistrictData(data.district);
        // console.log(data.district)
      }
    )
    
  };




  const gattaluka = (e) => {
    fetch(`http://marriagebureau.ajspire.com/api/get/taluka/${e}`).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        settaluka(data.talukas)
      }
    )
  }
  const getvillage = (e) => {
    let a = e
    fetch(`http://marriagebureau.ajspire.com/api/get/village/1${a}`).then(
      response => {
        return response.json();
      }

    ).then(
      data => {
        // console.log("village", data.village);
        setvillage(data.village)
      }
    )
  }

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
        <span><h1> <Link to='/profile'>Profile </Link> / <Link to='/profile' onClick={() => setshow(1)}>Partner Preference</Link> </h1></span>
      </div>
      {
        show ? (


          <>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Basic Preference</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Age</label>
                    <div className='row'>
                      <div className='col-md-4'>
                        <select id="dropdown2" name="age" className="form-control" defaultValue="age" onChange={(e) => onInput(e)}>
                          <option value="">-----Select ----</option>

                          {
                            Age.map((mage) =>
                            (
                              <option value={mage.age_id}>{mage.age_name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className='col-md-2'>
                        <h1 style={{ color: 'red' }}>To</h1>
                      </div>

                      <div className='col-md-4'>
                        <select id="dropdown2" name="age" className="form-control" onChange={(e) => onInput(e)}>
                          <option value="">-----Select ----</option>

                          {
                            Age.map((mage) =>
                            (
                              <option value={mage.age_id}>{mage.age_name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Height</label>
                    <div className='row'>
                      <div className='col-md-4'>
                        <select id="dropdown2" name=" Height" className="form-control" defaultValue='height' onChange={(e) => onInput(e)}>
                          <option value="option1">-----Select ----</option>
                          {
                            height.map((mheight) => (
                              <option value={mheight.height_id}>{mheight.height}</option>
                            ))
                          }

                        </select>
                      </div>
                      <div className='col-md-2'>
                        <h1 style={{ color: 'red' }}>To</h1>
                      </div>

                      <div className='col-md-4'>
                        <select id="dropdown2" name=" Height" className="form-control" defaultValue='height' onChange={(e) => onInput(e)}>
                          <option value="option1">-----Select ----</option>

                          {
                            height.map((mheight) => (
                              <option value={mheight.height_id}>{mheight.height}</option>
                            ))
                          }

                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Looking For</label>

                    <select id="dropdown2" name="Looking_For" className="form-control" defaultValue='Looking_For' onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>
                      <option value="1">Unmarried</option>
                      <option value="2">Divorced</option>
                      <option value="3">widowed</option>
                      <option value="4">Seprated</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Eating Habits</label>

                    <select id="dropdown2" name="Eating_Habits" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>
                      <option value="1">Vegetarian</option>
                      <option value="2">Non Vegetarian</option>
                      <option value="3">eggetarian</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Physical Status</label>

                    <select id="dropdown2" name="Physical_Status" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>

                      <option value="1">Normal</option>
                      <option value="2">Physically Challanged</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Smoking Habits</label>

                    <select id="dropdown2" name="Smoking_Habit" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>

                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3">Occasinally</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Drinking Habits</label>

                    <select id="dropdown2" name="Drinking_Habits" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>

                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3"> Drinks Occasinally</option>
                    </select>
                  </div>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Religion Preference</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Religion</label>

                    <select id="dropdown2" name="Religion" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>
                      <option value="">Not Assign</option>
                      <option value="1">Hindu</option>
                      <option value="2">Muslim-sunni</option>
                      <option value="3">Muslim-shia</option>
                      <option value="4">Christain</option>
                      <option value="5">Jain-Digambar</option>
                      <option value="6">jain-shwetambar</option>
                      <option value="7">Jewish</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Caste</label>

                    <select id="dropdown2" name="cast" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="">-----Select ----</option>
                      {
                        cast.map((mcast) => (
                          <option value={mcast.cast_id}>{mcast.caste}</option>
                        ))
                      }

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Mother Tongue:</label>

                    <select id="dropdown2" name="mother_tongue" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        mother.map((mlang) => (
                          <option value={mlang.mother_tounges_id}>{mlang.mothertounge}</option>
                        ))
                      }

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Star</label>

                    <select id="dropdown2" name="Star_nakshatra:" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        nakshatra.map((mnakshtra) => (
                          <option value={mnakshtra.nakshtra_id}>{mnakshtra.nakshra}</option>
                        ))
                      }

                    </select>
                  </div>

                </div>

              {/* </form> */}
            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Location Details</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">State Living In</label>

                    <select id="dropdown2" name="state_Living" className="form-control" onChange={(e) => { onInput(e); getdist(e.target.value); }}>
                      <option value="option1">-----Select ----</option> {
                        state.map((mstate) => (
                          <option value={mstate.state_id}>{mstate.state_name}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">District Living In</label>

                    <select id="dropdown2" name="District_Living" className="form-control" onChange={(e) => { onInput(e); gattaluka(e.target.value); }}>
                      <option value="option1">-----Select ----</option>

                      {
                        district.map((dis) => (
                          <option value={dis.dist_id}>{dis.dist_name}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Taluka Living In</label>

                    <select id="dropdown2" name="Taluka_Living:" className="form-control" onChange={(e) => { onInput(e); getvillage(e.target.value) }}>
                      <option value="option1">-----Select ----</option>
                      {
                        taluka.map((tq) => (
                          <option value={tq.taluka_id}>{tq.taluka_name}</option>
                        ))
                      }


                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Village Living In</label>

                    <select id="dropdown2" name="village_Living:" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        village.map((village) => (
                          <option value={village.village_id}>{village.village_name}</option>
                        ))
                      }
                    </select>
                  </div>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Education & Occupation Details</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Highest Education</label>
                    <input type="text" placeholder='enter Education ' name=' Highest_Education:' onChange={(e) => onInput(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Additional Degree</label>

                    <input type="text" placeholder='enter Additional Degree' name='Additional_education:' onChange={(e) => onInput(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Employed In (Working Sector)</label>

                    <select id="dropdown2" name="employed_in:" className="form-control" onChange={(e) => onInput(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">Goverment</option>
                      <option value="2">Privet</option>
                      <option value="3">Business</option>
                      <option value="4">Defence</option>
                      <option value="5">Self Employed</option>
                      <option value="6">Not working</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Occupation</label>

                    <input type="text" placeholder='enter Occupation' name='occupation' onChange={(e) => onInput(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Annual Income</label>

                    <input type="text" placeholder='enter Annual Income' name='Annual_income' onChange={(e) => onInput(e)} />
                  </div>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Partner Expectation</h1>
                <hr style={{ width: "100%" }} />
                <h1>Partner Expectation</h1>
                <div className='form-group col-md-6'>
                  <textarea style={{ width: "100%" }} name="textarea" id="" cols="120" rows="8" onChange={(e) => onInput(e)} />
                </div>

              {/* </form> */}

            </div>
            <div className="text-center  mt-3">

              <input style={{ width: "100px" }} type="submit" className="btn btn submit-button" value="Submit" onClick={(e) => insubmit(e)} />
            </div>
          </>
        ) : (

          <>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Basic Details (Registration Form)</h1>
                <hr style={{ width: "100%" }} />
                <div className='form-row'>
                  <div className='form-group col-md-4' onChange={validation}>
                    <label htmlFor="dropdown1">First Name</label>

                    <input type="text" placeholder='enter name' name='first_name'  onChange={(e) => Handlechange(e)} className=' form-control ' style={check ? { borderColor: "red" } : { borderColor: "black" }} />
                  </div>
                  <div className='form-group col-md-4'onChange={validation}>
                    <label htmlFor="dropdown1">Last Name</label>

                    <input type="text" placeholder='enter name' name='last_name' defaultValue={user.last_name} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-4'onChange={validation}>
                    <label htmlFor="dropdown1">Gender</label>
                    <select defaultValue={user.gender} name='gender' onChange={(e) => Handlechange(e)}>
                      <option value=''>--select--</option>
                      <option value={user.gender_id}>male</option>
                      <option value={user.gender_id}>female</option>
                      <option value={user.gender_id}>other</option>

                    </select>

                  </div>



                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Age</label>

                    <input type="text" placeholder='enter age' name='age' defaultValue={user.age} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Blood-Group</label>

                    <input type="text" placeholder='enter Blood-Group' name='blood_group' defaultValue={FormData.blood_group} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Marital Status</label>
                    <select defaultValue={user.marital_status} name='marital_status' onChange={(e) => Handlechange(e)} >
                      <option>--select--</option>
                      <option>unmarried</option>
                      <option>devorced</option>
                      <option>widowed</option>
                      <option>separated</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Date Of Birth</label>

                    <input type="Date" placeholder='enter gender' name='date_of_birth' defaultValue={user.date_of_birth} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Profile Created By</label>

                    <select defaultValue={user.profile_created_by} name='profile_created_by' onChange={(e) => Handlechange(e)} >
                      <option value="">Select Profile Created By</option>
                      <option value="1">Self</option>
                      <option value="2">Parent</option>
                      <option value="4">Friend</option>
                      <option value="5">Sibling</option>
                      <option value="6">Relative</option>
                      <option value="3">Guardian</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Mobile No</label>

                    <input type="Number" placeholder='enter Mobile No' name='number' defaultValue={user.number} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Alternative Mobile No</label>

                    <input type="text" placeholder='enter Mobile No' name='mobile_no_alternative' defaultValue={user.mobile_no_alternative} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Mother Tongue:</label>
                    <select id="dropdown2" name="mother_tongue" className="form-control"  defaultValue={user.mother_tongue} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        mother.map((mlang) => (
                          <option value={mlang.mother_tounges_id}>{mlang.mothertounge}</option>
                        ))
                      }

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Email</label>

                    <input type="Email" placeholder='enter Email' name='email' defaultValue={user.email} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Password</label>

                    <input type="password" placeholder='enter Password' name='password' defaultValue={user.password} onChange={(e) => Handlechange(e)} />
                  </div>



                </div>

              {/* </form> */}
            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Religion Information</h1>
                <hr style={{ width: "100%" }} />
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Religion</label>

                    <input type="text" placeholder='enter name' name='member_religin' defaultValue={FormData.member_religin} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Caste</label>
                    <select id="dropdown2" name="member_caste" className="form-control" defaultValue={FormData.member_caste} onChange={(e) => Handlechange(e)}>
                      <option value="">-----Select ----</option>
                      {
                        cast.map((mcast) => (
                          <option value={mcast.cast_id}>{mcast.caste}</option>
                        ))
                      }

                    </select>

                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Sub Caste</label>
                    <select id="dropdown2" name="member_sub_caste" className="form-control" defaultValue={FormData.member_sub_caste} onChange={(e) => Handlechange(e)}>
                      <option value="">-----Select ----</option>
                      {
                        subcast.map((mcast) => (
                          <option value={mcast.subcaste_id}>{mcast.sub_caste}</option>
                        ))
                      }

                    </select>

                  </div>


                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Willing To Marry In Other Caste ?</label>

                    <select id="dropdown2" name="marry_other_cast" className="form-control" defaultValue={FormData.marry_other_cast} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>


                  </div>


                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Education & Occupation Details</h1>
                <hr style={{ width: "100%" }} />
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Highest Education</label>

                    <input type="text" placeholder='enter Highest Education' name='member_highest_education' defaultValue={FormData.member_highest_education} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Additional Degree</label>

                    <input type="text" placeholder='enter Additional Degree' name=' member_additional_degree' defaultValue={FormData. member_additional_degree} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Employed In (Working Sector)</label>

                    <select id="dropdown2" name="member_employed_in" className="form-control" defaultValue={FormData.member_employed_in} onChange={(e) => Handlechange(e)} >
                      <option value="">-----Select ----</option>

                      <option value="1">Goverment</option>
                      <option value="2">Privet</option>
                      <option value="3">Business</option>
                      <option value="4">Defence</option>
                      <option value="5">Self Employed</option>
                      <option value="6">Not working</option>
                    </select>
                  </div>

                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Occupation</label>

                    <input type="text" placeholder='enter Occupation' name='member_occupation' defaultValue={FormData.member_occupation} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Annual Income</label>

                    <input type="text" placeholder='enter Annual Income' name='member_annual_income' defaultValue={FormData.member_annual_income} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Property Details</label>

                    <input type="text" placeholder='enter Property Details' name='member_property' defaultValue={FormData.member_property} onChange={(e) => Handlechange(e)} />
                  </div>

                </div>


              {/* </form> */}

            </div>

            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Family Details</h1>
                <hr style={{ width: "100%" }} />
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Father Full Name</label>

                    <input type="text" placeholder='enter Father Full Name' name='member_father_name' defaultValue={FormData.member_father_name} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Mother Name</label>

                    <input type="text" placeholder='enter Mother Name' name='member_mother_name' defaultValue={FormData.member_mother_name} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Family Type</label>

                    <select id="dropdown2" name="member_family_type" className="form-control" defaultValue={FormData.member_family_type} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">joint</option>
                      <option value="2">Nuclear</option>

                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Family Value</label>

                    <select id="dropdown2" name="member_family_value" className="form-control" defaultValue={FormData.member_family_value} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="hello">orthodox</option>
                      <option value="hello">Traditional</option>
                      <option value="hello">Moderate</option>
                      <option value="hello">liberal</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Family Member</label>

                    <input type="text" placeholder='enter Family Member' name='member_family_member' defaultValue={FormData.member_family_member} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Fathers Occupation</label>

                    <input type="text" placeholder='enter Fathers Occupation' name='member_fathers_occupation' defaultValue={FormData.member_fathers_occupation} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Family Status</label>

                    <select id="dropdown2" name="member_familystatus" className="form-control" defaultValue={FormData.member_familystatus} onChange={(e) => Handlechange(e)}>
                      <option value="">-----Select ----</option>

                      <option value="1">Middle Class</option>
                      <option value="2">Upper Middle class</option>
                      <option value="3">Rich</option>
                      <option value="4">Affluent</option>
                    </select>
                  </div>

                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Relative Information</label>

                    <input type="text" placeholder='enter Relative Information' name='member_relative' defaultValue={FormData.member_relative} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">No of Brothers</label>

                    <input type="text" placeholder='enter No of Brothers' name='member_brothers' defaultValue={FormData.member_brothers} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">No of Married Brothers</label>

                    <input type="text" placeholder='enter No of Married Brothers' name='member_no_of_married_bro' defaultValue={FormData.member_no_of_married_bro} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">No of Sisters</label>

                    <input type="text" placeholder='enter No of Sisters' name='member_sisters' defaultValue={FormData.member_sisters} onChange={(e) => Handlechange(e)} />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">No of Married Sisters</label>

                    <input type="text" placeholder='enter No of Married Sisters' name='  member_no_of_married_sis' defaultValue={FormData. member_no_of_married_sis} onChange={(e) => Handlechange(e)} />
                  </div>

                </div>






              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Location Details</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">State Living In</label>
                    <select id="dropdown2" name="member_state_living_in" className="form-control" defaultValue={FormData.member_state_living_in} onChange={(e) => { Handlechange(e); getdist(e.target.value); }}>
                      <option value="option1">-----Select ----</option> {
                        state.map((mstate) => (
                          <option value={mstate.state_id}>{mstate.state_name}</option>
                        ))
                      }
                    </select>

                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">District Living In</label>

                    <select id="dropdown2" name="member_district_living_in" className="form-control" defaultValue={FormData.member_district_living_in} onChange={(e) => { Handlechange(e); gattaluka(e.target.value); }}>
                      <option value="option1">-----Select ----</option>
_______
                      {
                        district.map((dis) => (
                          <option value={dis.dist_id}>{dis.dist_name}</option>
                        ))
                      }
                    </select>
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">TaluKa Living In</label>

                    <select id="dropdown2" name="member_taluka_living_in" className="form-control" defaultValue={FormData.member_taluka_living_in} onChange={(e) => { Handlechange(e); getvillage(e.target.value) }}>
                      <option value="option1">-----Select ----</option>
                      {
                        taluka.map((tq) => (
                          <option value={tq.taluka_id}>{tq.taluka_name}</option>
                        ))
                      }


                    </select>
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Village Living In</label>

                    <select id="dropdown2" name="member_village_living_in" className="form-control" defaultValue={FormData.member_village_living_in} onChange={(e) => Handlechange(e)}>
                      <option value="">-----Select ----</option>
                      {
                        village.map((village) => (
                          <option value={village.village_id}>{village.village_name}</option>
                        ))
                      }
                    </select>
                  </div>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Habits & Hobbits</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Diet</label>

                    <select id="dropdown2" name="member_diet" className="form-control" defaultValue={FormData.member_diet} onChange={(e) => Handlechange(e)}>
                      <option value="">-----Select ----</option>

                      <option value="1">Vegetarian</option>
                      <option value="2">Non-Vegetarian</option>
                      <option value="3">eggetarian</option>

                    </select>
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Smoking Habits</label>

                    <select id="dropdown2" className="form-control" name="member_smoking_habits" defaultValue={FormData.member_smoking_habits} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3">Occasinally</option>

                    </select>
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Drinking Habits</label>

                    <select id="dropdown2" className="form-control" name="member_drink_habit" defaultValue={FormData. member_drink_habit} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3">Occasinally</option>

                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Hobbies</label>

                    <select id="dropdown2" className="form-control" name="member_hobbies" defaultValue={FormData.member_hobbies} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">not Assign</option>
                      <option value="2">Reading & Writing</option>
                      <option value="3">cooking & Baking</option>
                      <option value="4">PhotoGraphy</option>
                      <option value="5">Sports & Physical Activities</option>
                      <option value="6">Traveling</option>
                      <option value="7">Gaming</option>
                      <option value="8">Yoga & Meditation</option>
                      <option value="9">Learning New Things</option>

                    </select>
                  </div>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Physical Attribute</h1>
                <hr style={{ width: "100%" }} />
                <div className='form-group col-md-6'>
                  <label htmlFor="dropdown1">Height</label>

                  <select id="dropdown2" name="member_height" className="form-control" defaultValue={FormData.member_height} onChange={(e) =>Handlechange(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        height.map((height) => (
                          <option value={height.height_id}>{height.height}</option>
                        ))
                      }
                    </select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor="dropdown1">Weight</label>
                  <select id="dropdown2" name="member_weight" className="form-control" defaultValue={FormData.member_weight} onChange={(e) =>Handlechange(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        Weight.map((Weight) => (
                          <option value={Weight.weight_id}>{Weight.weight}</option>
                        ))
                      }
                    </select>
                  
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Body Type</label>

                    <select id="dropdown2" name="member_body_type" className="form-control" defaultValue={FormData.member_body_type} onChange={(e)=>Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">Slim</option>
                      <option value="2">Average</option>
                      <option value="3">Atheletic</option>
                      <option value="4">Heavy</option>

                    </select>
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Complextion (Body Color)</label>

                    <select id="dropdown2" name="member_complexion" className="form-control" defaultValue={FormData.member_complexion} onChange={(e)=>Handlechange(e)}>
                      <option value="option1">-----Select ----</option>

                      <option value="1">Very Fair</option>
                      <option value="2">Fair</option>
                      <option value="3">wheatish</option>
                      <option value="4">Wheatish Brown</option>
                      <option value="5">Dark</option>



                    </select>
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Physical Status</label>

                    <select id="dropdown2" name="member_physical_status" className="form-control" defaultValue={FormData.member_physical_status} onChange={(e)=>Handlechange(e)}>
                      <option value="option1">-----Select-----</option>

                      <option value="1">Noraml</option>
                      <option value="2">Physically Challanged</option>
                    </select>
                  </div>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Horoscope Details</h1>
                <hr style={{ width: "100%" }} />
                <div className='form-group col-md-6'>
                  <label htmlFor="dropdown1">Star ( Nakshatra )</label>
                  <select id="dropdown2" name="member_nakshra" className="form-control" defaultValue={FormData.member_nakshra} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        nakshatra.map((mnakshtra) => (
                          <option value={mnakshtra.nakshtra_id}>{mnakshtra.nakshra}</option>
                        ))
                      }

                    </select>
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor="dropdown1">Raasi/Moonsign</label>
                  <select id="dropdown2" name="member_rashi" className="form-control" defaultValue={FormData.member_rashi} onChange={(e) => Handlechange(e)}>
                      <option value="option1">-----Select ----</option>
                      {
                        Rashi.map((mnakshtra) => (
                          <option value={mnakshtra.rashi_id}>{mnakshtra.rashi}</option>
                        ))
                      }

                    </select>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Birth Time</label>

                    <input type="time" placeholder='enter Birth Time' name="member_birth_time "  defaultValue={FormData.member_birth_time } onChange={(e) => Handlechange(e)} />
                  </div>

                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor="dropdown1">Birth Place</label>

                    <input type="text" placeholder='enter Birth Place' name="member_birth_palce" defaultValue={FormData.member_birth_palce} onChange={(e) => Handlechange(e)}/>
                  </div>

                </div>
              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>About Me</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-group col-md-6'>
                  <textarea style={{ width: "100%" }} name="member_about_me" id="" cols="120" rows="8" defaultValue={FormData.member_about_me} onChange={(e) => Handlechange(e)}></textarea>

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Upload Images(One Image)</h1>
                <hr style={{ width: "100%" }} />

                <div className='form-group col-md-6'>
                  {/* <form action="upload.php" method="post" enctype="multipart/form-data"> */}
                    <label for="fileToUpload">Choose a file to upload:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload"   />
                    <input type="submit" value="Upload File" name='member_user_img1' defaultValue={FormData.member_user_img1} onClick={(e) => Handlechange(e)}/>
                  {/* </form> */}

                </div>
                <div className='form-group col-md-6'>
                  {/* <form action="upload.php" method="post" enctype="multipart/form-data"> */}
                    <label for="fileToUpload">Choose a file to upload:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" value="Upload File"  name='member_user_img2' defaultValue={FormData.member_user_img2} onClick={(e) => Handlechange(e)} />
                  {/* </form> */}

                </div>
                <div className='form-group col-md-6'>
                  {/* <form action="upload.php" method="post" enctype="multipart/form-data"> */}
                    <label for="fileToUpload">Choose a file to upload:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" value="Upload File"  name='member_user_img3' defaultValue={FormData.member_user_img3} onClick={(e) => Handlechange(e)} />
                  {/* </form> */}

                </div>
                <div className='form-group col-md-6'>
                  {/* <form action="upload.php" method="post" enctype="multipart/form-data"> */}
                    <label for="fileToUpload">Choose a file to upload:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" value="Upload File"  name='member_user_img4' defaultValue={FormData.member_user_img4} onClick={(e) => Handlechange(e)} />
                  {/* </form> */}

                </div>
                <div className='form-group col-md-6'>
                  {/* <form action="upload.php" method="post" enctype="multipart/form-data"> */}
                    <label for="fileToUpload">Choose a file to upload:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" value="Upload File"  name='member_user_img5' defaultValue={FormData.member_user_img5} onClick={(e) => Handlechange(e)} />
                  {/* </form> */}

                </div>

              {/* </form> */}

            </div>
            <div className="container mt-4" style={{ marginTop: "15px" }}>
              <hr style={{ width: "100%" }} />
              {/* <form action="process.php" method="POST" > */}
                <h1 style={{ color: "green" }}>Identity Proof</h1>
                <h6 style={{ color: "red" }}>(Adhaar card , PanCard , Driving Licence , VoterId)</h6>
                <hr style={{ width: "100%" }} />

                <div className='form-group col-md-6'>
                  {/* <form action="upload.php" method="post" enctype="multipart/form-data"> */}
                    <label for="fileToUpload">Choose a file to upload:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" value="Upload File"  name='aadhar_img' defaultValue={FormData.aadhar_img} onClick={(e) => Handlechange(e)}/>
                  {/* </form> */}

                </div>
              {/* </form> */}

            </div>
            <hr style={{ width: "100%" }} />
            <div className="text-center  mt-3">

              <input style={{ width: "100px" }} type="submit" className="btn btn submit-button" value="Submit" onClick={(e)=>Onsubmit(e)} />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Profile