import { Link } from "react-router-dom";
import { truncateText } from "../../functions/common";

const ToolCard = ({ tool }) => {
  // console.log(tool);
  return (
    <div className="p-3 w-full md:w-1/4 mb-5">
      <div className="card tool bg-base-100 shadow-lg">
        {tool?.img_url && (
          <figure>
            <img src={tool.img_url} alt={tool?.title} />
          </figure>
        )}

        <div className="card-body">
          <h2 className="card-title">{truncateText(tool?.title, 20)}</h2>
          <p className="text-info font-medium text-lg">${tool?.price}</p>
          <p>{truncateText(tool?.description, 28)}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/purchase/${tool?._id}`}
              className="btn bg-black hover:bg-info border-0"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
