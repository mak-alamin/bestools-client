import { useQuery } from "@tanstack/react-query";

const useOrders = (email = null) => {
  let url = email
    ? `http://localhost:8000/order/${email}`
    : "http://localhost:8000/order";

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
