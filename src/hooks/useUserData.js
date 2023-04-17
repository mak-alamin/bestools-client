import { useQuery } from "@tanstack/react-query";

const useUserData = ({ email, token }) => {
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", email],
    queryFn: async () => {
      try {
        if (!token || !email) {
          return null;
        }

        const res = await fetch(
          `https://bestools-server.onrender.com/user/${email}`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [userData, isLoading];
};

export default useUserData;
