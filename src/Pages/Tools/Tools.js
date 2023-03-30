import useProducts from "../../hooks/useProducts";
import Loading from "../../components/Shared/Loading";
import ToolCard from "../../components/Shared/ToolCard";

const Tools = () => {
  const [products, isLoading, refetch] = useProducts(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(products);

  return (
    <div id="our_tools" className="container py-10">
      <h2 className="text-4xl text-center font-bold mb-5">Our Tools</h2>

      <div className="columns-3">
        {products &&
          products.length &&
          products.map((tool) => {
            return <ToolCard key={tool._id} tool={tool}></ToolCard>;
          })}
      </div>
    </div>
  );
};

export default Tools;