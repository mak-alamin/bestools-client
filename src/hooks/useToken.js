import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.email || user?.user?.email;

  useEffect(() => {
    if (email) {
      fetch(`https://bestools-server.onrender.com/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
