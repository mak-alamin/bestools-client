import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:8000/reviews", {
          method: "GET",
        });

        const data = await res.json();

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [reviews, isLoading, refetch];
};

export default useReviews;
