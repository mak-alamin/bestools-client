import { useQuery } from "@tanstack/react-query";

const useOrder = (id) => {
  let url = `http://localhost:8000/order/${id}`;

  const {
    data: order,
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
  return [order, isLoading, refetch];
};

export default useOrder;
