import React, { useEffect } from "react";
import HomeComponent from "../components/HomeComponent";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Loader from ".././Common/Loader";
import { auth } from ".././firebaseConfig";
export default function Home() {
  const [loading, setLoading] = React.useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <HomeComponent />;
}
