import Loading from "../../components/Shared/Loading";
import ToolCard from "../../components/Shared/ToolCard";
import useProducts from "../../hooks/useProducts";

const FeaturedTools = () => {
  const [products, isLoading, refetch] = useProducts(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div id="featured_tools" className="container my-10 py-10">
      <h2 className="text-4xl text-center font-bold mb-5">Featured Tools</h2>

      {products && products.length ? (
        <div className="flex flex-wrap justify-between">
          {products.map((tool) => {
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
