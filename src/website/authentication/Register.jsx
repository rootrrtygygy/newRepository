import React from "react";
import "../main/pages/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth_User from "./Auth_User";
import { toast } from "react-toastify";

const Register = () => {
  const notify = (M) => toast.error(M);

  const { http,token,SetToken } = Auth_User();
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    mobile_no: "",
    date_of_birth: "",
    marital_status: "",
    profile_created_by: "",
    gender: "",
    mother_tongue: "",
    password: "",
  });

  console.log(formData);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "date_of_birth") {
      // Calculate age based on the entered birth date
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();

      // Set the age in formData
      setformData({
        ...formData,
        age,
        [name]: value,
      });
    } else {
      // For other input fields, update the formData directly
      setformData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [otpSent, setOtpSent] = useState(false);
  const onSendMessage = (e) => {
    e.preventDefault();
    
    if (formData.first_name.trim() === "" || formData.last_name.trim() === "") {
      alert("First Name and Last Name are required.");
      return; 
    }

     if (formData.gender === "" || formData.marital_status === "") {
      alert("Gender and Marital Status are required.");
      return; 
    }

    if (formData.date_of_birth === "") {
      alert("Birth Date is required.");
      return; 
    }

    if (formData.profile_created_by === "") {
      alert("Profile Created By is required.");
      return; 
    }
    
    if (formData.mobile_no.length !== 10) {
      alert("Mobile number should be 10 digits long.");
      return; 
    }
    
    if (formData.mother_tongue === "") {
      alert("Mother Tongue is required.");
      return;
    }

    
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      alert("Email and Password are required.");
      return; 
    }

    http
      .post(`/front_user_register/send/massage`,formData)
      .then((res) => {
        console.log("Data", res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
    setOtpSent(true);
  };

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (e, otpIndex) => {
    const enteredValue = e.target.value.replace(/\D/g, "");
    const updatedOtp = [...otp];
    updatedOtp[otpIndex] = enteredValue;
    setOtp(updatedOtp);
    setformData({
      ...formData,
      otp: updatedOtp.join(""),
    });
  };

  const VerifyOtp = () => {
    console.log("verify", formData);
    http
      .post(`/front_user_register`)
      .then((res) => {
        console.log("sub",res.data);
        console.log(res);
        
        if (res.data.token) {
          SetToken(res.data.user_data, res.data.access_token);
          // setUser();
          navigate("/");
        } else {
          notify(res.data.message);
        }
       
      })
      .catch((error) => {
        console.log("Error", error);
      });
    // console.log("he",formData);
  };

  return (
    <>
      <section className="container1">
        {!otpSent ? (
          <div>
            <header>Registration Form</header>
            <div className="row">
              <form action="#" className="form">
                <div className="input-box">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    onChange={(e) => onInputChange(e)}
                    id="first-name"
                    name="first_name"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    onChange={(e) => onInputChange(e)}
                    id="last-name"
                    name="last_name"
                    placeholder="Enter last name"
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Gender</label>
                  <select
                    name="gender"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="2">Male</option>
                    <option value="1">Female</option>
                    <option value="3">Other</option>
                  </select>
                </div>

                <div className="input-box">
                  <label>Marital Status</label>
                  <select
                    name="marital_status"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="">Select Marital Status</option>
                    <option value="1">Unmarried</option>
                    <option value="3">Widowed</option>
                    <option value="2">Divorced</option>
                    <option value="4">Separated</option>
                  </select>
                </div>

                <div className="input-box">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    onChange={(e) => onInputChange(e)}
                    id="date"
                    placeholder="Enter birth date"
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Profile Created By</label>
                  <select
                    name="profile_created_by"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="">Select Profile Created By</option>
                    <option value="1">Self</option>
                    <option value="2">Parent</option>
                    <option value="4">Friend</option>
                    <option value="5">Sibling</option>
                    <option value="6">Relative</option>
                    <option value="3">Guardian</option>
                  </select>
                </div>

                <div className="input-box">
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    name="mobile_no"
                    onChange={(e) => onInputChange(e)}
                    id="mobile_no"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Mother Tongue</label>
                  <select
                    name="mother_tongue"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    <option value="">Select Mother Tongue...</option>
                    <option value="17">Marathi</option>
                    <option value="27">Konkani</option>
                    <option value="16">Marwari</option>
                    <option value="38">Garhwali</option>
                    <option value="33">Hindi</option>
                    <option value="7">Sanskrit</option>
                    <option value="23">Lepcha</option>
                    <option value="26">Koshali</option>
                    <option value="28">Khasi</option>
                    <option value="43">Badaga</option>
                    <option value="48">Awadhi</option>
                    <option value="51">Angika</option>
                  </select>
                </div>

                <div className="input-box address">
                  <div className="input-box">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => onInputChange(e)}
                      id="email"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label>Enter Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => onInputChange(e)}
                      id="password"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      style={{ height: "20px", border: "none", width: "20px" }}
                      required
                    />
                    I have read and agree to the terms & conditions
                  </div>
                </div>
                <button
                  className="btn btn-7"
                  onClick={(e) => onSendMessage(e)}
                  style={{ width: "100%" }}
                >
                  Submit & Free Register
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <header>OTP Verify</header>
            <div>
              <input
                type="text"
                className="otp-input"
                value={otp[0]}
                onChange={(e) => handleInputChange(e, 0)}
                maxLength={1}
                autoFocus
              />
              <input
                type="text"
                className="otp-input"
                value={otp[1]}
                onChange={(e) => handleInputChange(e, 1)}
                maxLength={1}
              />
              <input
                type="text"
                className="otp-input"
                value={otp[2]}
                onChange={(e) => handleInputChange(e, 2)}
                maxLength={1}
              />
              <input
                type="text"
                className="otp-input"
                value={otp[3]}
                onChange={(e) => handleInputChange(e, 3)}
                maxLength={1}
              />
              <br />
              <button className="verify-button" onClick={VerifyOtp}>
                Verify
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Register;
