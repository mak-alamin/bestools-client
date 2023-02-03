import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useQuery } from "react-query";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useUserData from "../../hooks/useUserData";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  const email = user?.email;

  const [userData] = useUserData(email);

  // const { isLoading, data, error } = useQuery("users", async () =>
  //   await fetch(`http://localhost:8000/user/${email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //     res.json();
  //   })
  // );
  
  console.log('Data: '+userData);

  if (loading) {
    return <Loading></Loading>
  }

  if(!user){  
    signOut(auth);
    localStorage.removeItem("accessToken");
   
    toast.error('Something went wrong!');

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAuth;
