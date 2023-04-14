import React from "react";
import { LoginAPI,RegisterAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
export default function LoginComponent() {
  const [credentials, setCredentials] = React.useState({});
  const login =async () => {
    try {
       let res =await LoginAPI(credentials.email, credentials.password);
       console.log(res);
    } catch (error) {
      
    }
   
  };
  const register =async () => {
    try {
       let res =await RegisterAPI(credentials.email, credentials.password);
       console.log(res);
    } catch (error) {
      
    }
   
  };
  return (
    <div className="login-wrapper">
      <div className="auth-inputs">
        <div>LoginComponent</div>

        <input
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          type="text"
          name=""
          className="common-input"
          placeholder="Enter Your Email"
        />
        <input
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          type="password"
          name=""
          className="common-input"
          placeholder="Enter Your Password"
        />
        <button onClick={login} className="login-btn">
          Login to Linkedin
        </button>
        <button onClick={register} className="login-btn">
          Register to Linkedin
        </button>
      </div>
    </div>
  );
}
