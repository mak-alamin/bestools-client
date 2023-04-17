import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://bestools-server.onrender.com/product",
          {
            method: "GET",
          }
        );

        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [products, isLoading, refetch];
};

export default useProducts;
