import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Auth_User from "./Auth_User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../main/Images/Images/Login.png";

const Login = () => {
  const notify = (M) => toast.error(M);

  const { http, token, SetToken } = Auth_User();

  const navigate = useNavigate();
  const [disable, setDisable] = useState(0);
  //console.log('hi',token);

  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });
  console.log("first", loginData);
  const OnInputChange = (e) => {
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    http.post(`/front_user_login`, loginData).then((res) => {
      console.log("ok", res.data);

      console.log(res.data.user_data);

      if (res.data.access_token) {
        SetToken(res.data.user_data, res.data.access_token);
        // setUser();
        navigate("/dashboard");
        window.location.reload({
          top: 0,
          behavior: "smooth",
        });
      } else {
        notify(res.data.message);
      }
      setDisable();
    });
    console.log(token);
  };
  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, [navigate, token]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          marginTop: "135px",
          marginBottom: "-100px",
        }}
      >
        <div className="form1" style={{}}>
          <div className="form__box1">
            <div className="form__left">
              <div className="form__padding">
                <img
                  className="form__image"
                  src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="form__right">
              <div className="form__padding-right">
                <form>
                  <h1 className="form__title">User Login</h1>
                  <input
                    className="form__email"
                    type="text"
                    name="email"
                    onChange={(e) => OnInputChange(e)}
                    placeholder="Email"
                  />

                  <input
                    className="form__password"
                    type="password"
                    name="password"
                    onChange={(e) => OnInputChange(e)}
                    placeholder="******"
                  />
                  <input
                    className="form__submit-btn"
                    type="submit"
                    onClick={onSubmit}
                    defaultValue="Login"
                  />
                  <span>Forgot Password</span>
                  <p>
                    <Link className="form__link" to={"/register"}>
                      Create your account
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
