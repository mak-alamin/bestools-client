import { useQuery } from "@tanstack/react-query";

const useProduct = (id) => {
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:8000/product/${id}`, {
          method: "GET",
        });

        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [product, isLoading, refetch];
};

export default useProduct;
