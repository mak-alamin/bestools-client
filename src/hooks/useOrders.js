import { useQuery } from "@tanstack/react-query";

const useOrders = (email = null) => {
  let url = email
    ? `https://bestools-server.onrender.com/orders/${email}`
    : "https://bestools-server.onrender.com/orders";

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
  });
  return [orders, isLoading, refetch];
};

export default useOrders;
