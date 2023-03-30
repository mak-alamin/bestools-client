import useProducts from "../../hooks/useProducts";
import Loading from "../../components/Shared/Loading";
import ToolCard from "../../components/Shared/ToolCard";

const FeaturedTools = () => {
  const [products, isLoading, refetch] = useProducts(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(products);

  return (
    <div id="featured_tools" className="container my-10 py-10">
      <h2 className="text-4xl text-center font-bold mb-5">Featured Tools</h2>

      <div className="columns-3">
        {(products && products.length) &&
          products.map((tool) => {
            return <ToolCard key={tool._id} tool={tool}></ToolCard>;
          })}
      </div>
    </div>
  );
};

export default FeaturedTools;
