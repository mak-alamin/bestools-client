import { Link } from 'react-router-dom';
const ToolCard = ({ tool }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img src={tool?.img_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool?.title}</h2>
        <p className="text-info font-medium text-lg">${tool?.price}</p>
        <p>{tool?.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/purchase/${tool?.id}`} className="btn bg-black hover:bg-info border-0">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
