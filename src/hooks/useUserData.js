import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../firebase.init';

const useUserData = (email) => {
    const [userData, setUserData] = useState("");
  useEffect( () => {
    if (email) {
       fetch(`http://localhost:8000/user/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.error){
            signOut(auth);
            localStorage.removeItem('accessToken');
          } else {
            setUserData(data);
          }
        });
    }
  }, [email]);
  return [userData];
};

export default useUserData;