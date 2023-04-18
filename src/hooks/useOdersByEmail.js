import { useQuery } from "@tanstack/react-query";

const useOdersByEmail = (email) => {
  let url = `https://bestools-server.onrender.com/orders/${email}`;

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: false,
    staleTime: 10000,
  });

  return [myOrders, isLoading, refetch];
};

export default useOdersByEmail;
