import ToolCard from "../Shared/ToolCard";

const FeaturedTools = () => {
  let featuredTools = [
    { id: 1, name: "Tool 1" },
    { id: 2, name: "Tool 2" },
    { id: 3, name: "Tool 3" },
    { id: 4, name: "Tool 4" },
    { id: 5, name: "Tool 5" },
    { id: 6, name: "Tool 6" },
  ];

  return (
    <div className="container mt-10">
      <h2 className="text-2xl text-center m-5">Featured Tools</h2>

      <div className="columns-3">
        {featuredTools.map((tool) => {
          return <ToolCard key={tool.id} tool={tool}></ToolCard>;
        })}
      </div>
    </div>
  );
};

export default FeaturedTools;
