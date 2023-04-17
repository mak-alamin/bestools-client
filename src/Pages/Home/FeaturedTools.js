import Loading from "../../components/Shared/Loading";
import ToolCard from "../../components/Shared/ToolCard";
import useProducts from "../../hooks/useProducts";

const FeaturedTools = () => {
  const [products, isLoading, refetch] = useProducts(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div id="featured_tools" className="container md:my-10 my-5 md:py-10 py-4">
      <h2 className="md:text-4xl text-2xl text-center font-bold md:mb-5 mb-1">Featured Tools</h2>

      {products && products.length ? (
        <div className="flex flex-wrap md:p-0 p-4">
          {products.slice(-8).map((tool) => {
            return <ToolCard key={tool._id} tool={tool}></ToolCard>;
          })}
        </div>
      ) : (
        <p className="text-center">No Products Found</p>
      )}
    </div>
  );
};

export default FeaturedTools;
