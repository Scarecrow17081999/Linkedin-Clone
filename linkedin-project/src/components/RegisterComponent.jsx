import React from "react";
import {  RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";
import UseNavigateHelper from "../helpers/UseNavigateHelper";
import "../Sass/RegisterComponent.scss";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({});
 
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created");
       navigate("/home");
       console.log(res);
      } catch (error) {
        toast.error("Cannot Create Your Account");
      }
    };
    const googleSignIn = async () => {
      try {
        let res = GoogleSignInAPI();
        toast.success("Registration Successfull");
        navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Please check your credentials");
    }
    console.log(res);
  };
  return (
    <div style={{ border: "1px solid white" }} className="login-wrapper">
      <LinkedInIcon id="linkedinLogo" />
      <h1 className="heading">Make the most of your professional life</h1>

      <div className="auth-inputs">
        <label htmlFor="common-input">Email or phone number</label>
        <input
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          type="email"
          name=""
          className="common-input"
        />
        <label htmlFor="common-input">Password (6 or more characters)</label>
        <input
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          type="password"
          name=""
          className="common-input"
        />
        <button onClick={register} className="login-btn">
          Agree & Join
        </button>
        {/* <button onClick={register} className="login-btn">
          Register to Linkedin
        </button> */}

        <Divider sx={{ marginTop: "1rem" }}>or</Divider>
        <div className="google-btn">
          <GoogleButton className="google-btn" onClick={googleSignIn} />
          <p className="go-to-sign-up">
            Already on LinkedIn?{" "}
            <span onClick={() => navigate("/")} className="joinNow">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
