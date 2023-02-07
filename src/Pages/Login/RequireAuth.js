// import { useQuery } from '@tanstack/react-query';
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
// import useUserData from "../../hooks/useUserData";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  // const email = user?.email;

  // const [userData] = useUserData(email);
 
  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //       try {
  //           const res = await fetch(`http://localhost:5000/user/${email}`, {
  //               headers: {
  //                   authorization: `bearer ${localStorage.getItem('accessToken')}`
  //               }
  //           });
  //           const data = await res.json();
  //           return data;
  //       }
  //       catch (error) {
  //         console.log(error);
  //       }
  //   }
  // });
  
  // console.log('Data: '+ data);

  if (loading ) {
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
