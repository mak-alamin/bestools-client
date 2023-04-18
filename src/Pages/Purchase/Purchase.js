import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Checkout from "../../components/Checkout/Checkout";
import Loading from "../../components/Shared/Loading";
import useProduct from "../../hooks/useProduct";
import Notfound from "../Notfound";
import ThankYou from "../ThankYou/ThankYou";

const Purchase = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [product, isLoading, refetch] = useProduct(id);

  let min_order_qty = product?.min_order_qty || 1;
  let stock_qty = product?.stock_qty;

  const [quantityError, setQuantityError] = useState("");

  const [isCheckout, setIsCheckout] = useState(0);

  const [thankYou, setThankYou] = useState(0);
  const [thankYouContent, setThankYouContent] = useState("");

  useEffect(() => {
    setQuantity(min_order_qty);
  }, [min_order_qty]);

  const handleQuantity = (e) => {
    let targetValue = parseInt(e.target.value);
    let stockQty = parseInt(stock_qty);

    if (targetValue < parseInt(min_order_qty)) {
      setQuantityError(`Quantity should be minimum ${min_order_qty}`);
    } else if (stockQty && targetValue > stockQty) {
      setQuantityError(`Quantity should be maximum ${stock_qty}`);
    } else if (isNaN(targetValue) || !targetValue) {
      setQuantityError(`Quantity is not valid!`);
    } else {
      setQuantityError("");
      setQuantity(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!quantityError) {
      setIsCheckout(1);
    }
  };

  const img_class = isCheckout ? "md:w-32" : "md:w-2/5";

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!product) {
    return <Notfound></Notfound>;
  }

  if (thankYou) {
    return <ThankYou content={thankYouContent}></ThankYou>;
  }

  return (
    <div className="container md:flex items-center gap-10 md:gap-20 md:my-10 py-10 px-10">
      <img src={product?.img_url} alt="" className={`mb-4 ${img_class}`} />

      <div className="product-info">
        <h2 className="font-bold text-xl mb-3">{product?.title}</h2>
        <p className="font-medium text-lg mb-3">
          Price: <span className="text-info">${product?.price}</span>
        </p>
        <p className="mb-4">{product?.description}</p>

        <label htmlFor="quantity" className="pr-3">
          {" "}
          Quantity{" "}
        </label>
        <input
          type="number"
          id="quantity"
          defaultValue={min_order_qty}
          min={min_order_qty}
          max={product?.stock_qty}
          onChange={handleQuantity}
          className="input input-bordered max-w-xs"
        />

        {quantityError && <p className="text-error">{quantityError}</p>}

        <br />

        {!isCheckout && !quantityError ? (
          <button onClick={handleSubmit} className="btn btn-info mt-4">
            Proceed To Checkout
          </button>
        ) : (
          ""
        )}
      </div>

      {isCheckout ? (
        <Checkout
          productInfo={product}
          quantity={quantity}
          setThankYou={setThankYou}
          setThankYouContent={setThankYouContent}
        ></Checkout>
      ) : (
        ""
      )}
    </div>
  );
};

export default Purchase;
