import React from "react";
import useProduct from "../../hooks/useProduct";

const Purchase = () => {
  const tool_id = window.location.href.split("purchase/")[1];

  const [product, isLoading, refetch] = useProduct(tool_id);

  console.log(product);

  return (
    <div className="container columns-2 gap-10 my-10 py-10">
      <img src={product?.img_url} alt="" />
      <div>
        <h2 className="font-bold text-xl mb-3">{product?.title}</h2>
        <p className="font-medium text-lg mb-3">Price: <span className="text-info">${product?.price}</span></p>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default Purchase;
