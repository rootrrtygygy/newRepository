import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth_User = () => {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const getUser = () => {
    const userString = JSON.parse(sessionStorage.getItem("user"));
    return userString;
  };

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const [token, SetToken] = useState(getToken());
  const [user, SetUser] = useState(getUser());
  const http = axios.create({
    baseURL: "http://marriagebureau.ajspire.com/api",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  const logout = () => {
    sessionStorage.clear();
    SetToken(null);
    SetUser(null);
    navigate("/");
  };
  return {
    SetToken: saveToken,
    token,
    user,
    http,
    logout,
  };
};

export default Auth_User;
