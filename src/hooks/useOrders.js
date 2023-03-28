import { useQuery } from "@tanstack/react-query";

const useOrders = (email = null) => {
  let url = email
    ? `http://localhost:8000/order/${email}`
    : "http://localhost:8000/order";

    console.log(url);
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
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const data = await res.json();

        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [orders, isLoading, refetch];
};

export default useOrders;
