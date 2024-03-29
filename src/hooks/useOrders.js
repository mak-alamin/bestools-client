import { useQuery } from "@tanstack/react-query";

const useOrders = () => {
  let url = "https://bestools-server.onrender.com/orders";

  const {
    data: orders,
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
  return [orders, isLoading, refetch];
};

export default useOrders;
