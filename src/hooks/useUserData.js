import { useQuery } from "@tanstack/react-query";

const useUserData = ({ email, token }) => {
  // console.log(email, token);
  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", email],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:8000/user/${email}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });

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
