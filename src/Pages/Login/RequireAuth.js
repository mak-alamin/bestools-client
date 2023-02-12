import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useUserData from "../../hooks/useUserData";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  const token = location?.state?.token || localStorage.getItem("accessToken");

  const email = user?.email;

  const [userData, isLoading] = useUserData({email, token});

  if (loading || isLoading) {
    return <Loading></Loading>
  }

  if(userData?._id){  
    return children;
  } else {  
    signOut(auth);
    localStorage.removeItem("accessToken");
    
    toast.error('You have to login to get access.');

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default RequireAuth;
