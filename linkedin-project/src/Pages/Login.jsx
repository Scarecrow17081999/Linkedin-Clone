import React, { useEffect } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import Loader from ".././Common/Loader";
import { useNavigate } from "react-router-dom";
import { auth } from ".././firebaseConfig";
export default function Login() {
  const [loading, setLoading] = React.useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}
