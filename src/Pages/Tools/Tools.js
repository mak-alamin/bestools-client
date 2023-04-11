import Loading from "../../components/Shared/Loading";
import ToolCard from "../../components/Shared/ToolCard";
import useProducts from "../../hooks/useProducts";

const Tools = () => {
  const [products, isLoading, refetch] = useProducts(null);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div id="our_tools" className="container py-10">
      <h2 className="text-4xl text-center font-bold mb-5">Our Tools</h2>

      {products && products.length ? (
        <div className="flex flex-wrap">
          {products.map((tool) => {
            return <ToolCard key={tool._id} tool={tool}></ToolCard>;
          })}
        </div>
      ) : (
        <p className="text-center mt-3">No Tools Found.</p>
      )}
    </div>
  );
};

export default Tools;
