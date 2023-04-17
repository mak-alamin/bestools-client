import { useEffect, useState } from "react";

const useUserRole = (user) => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://bestools-server.onrender.com/user/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserRole(data.role);
        });
    }
  }, [user]);
  return [userRole];
};

export default useUserRole;
