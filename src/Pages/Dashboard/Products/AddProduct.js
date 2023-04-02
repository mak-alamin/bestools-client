import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import BesToolsAlert from "../../../components/Shared/BesToolsAlert";
import Loading from "../../../components/Shared/Loading";

const AddProduct = ({refetch}) => {
  const [user, loading] = useAuthState(auth);

  const [alertInfo, setAlertInfo] = useState({});
  const [productImg, setProductImg] = useState("");
  const [submitLoader, setSubmitLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    setSubmitLoader(true);

    const slug = data.title.toLowerCase().replace(/ /g, "-");

    const product = { ...data, slug: slug };

    console.log(product);

    fetch(`http://localhost:8000/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          setAlertInfo({
            show: true,
            type: "success",
            message: "Product added successfully.",
          });
          reset();
          setProductImg("");
          setSubmitLoader(false);
          refetch();
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(handleAddProduct)}>
      <div className="flex justify-between items-center gap-x-10">
        <div className="w-1/2">
          <h3 className="text-lg font-bold">Add New Product</h3>
          <hr />
          <div className="form-control w-full max-w-xs my-3">
            <label className="label" htmlFor="product_title">
              <span className="label-text">Product Title</span>
            </label>
            <input
              type="text"
              defaultValue=""
              {...register("title")}
              id="product_title"
              className="input input-bordered w-full max-w-xs"
              required
            />{" "}
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label" htmlFor="product_img_url">
              <span className="label-text">Image Url: </span>
            </label>
            <input
              type="text"
              defaultValue=""
              {...register("img_url")}
              id="product_img_url"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setProductImg(e.target.value)}
            />{" "}
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label" htmlFor="product_desc">
              {" "}
              <span className="label-text">Description: </span>
            </label>
            <textarea
              {...register("description")}
              id="product_desc"
              className="textarea textarea-bordered"
              placeholder="Product descripton here..."
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label" htmlFor="product_price">
              <span className="label-text">Price ( $ )</span>
            </label>
            <input
              type="number"
              defaultValue=""
              {...register("price")}
              id="product_price"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label" htmlFor="product_stock_qty">
              <span className="label-text">Stock Quantity</span>
            </label>
            <input
              type="number"
              defaultValue=""
              {...register("stock_qty")}
              id="product_stock_qty"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            {errors.stock_qty && (
              <p className="text-red-500">{errors.stock_qty.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label" htmlFor="min_order_qty">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              defaultValue=""
              {...register("min_order_qty")}
              id="min_order_qty"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            {errors.min_order_qty && (
              <p className="text-red-500">{errors.min_order_qty.message}</p>
            )}
          </div>
        </div>

        <div className="image w-1/2">
          {productImg && (
            <img
              src={productImg}
              alt="top-view-different-types-wrenches-1"
              border="0"
            ></img>
          )}
        </div>
      </div>

      <div className="submit flex gap-x-5 items-center">
        <input
          className="btn btn-accent max-w-xs mr-4"
          value="Add Product"
          type="submit"
        />
        {submitLoader && <Loading></Loading>}

        <BesToolsAlert
          info={alertInfo}
          setAlertInfo={setAlertInfo}
        ></BesToolsAlert>
      </div>
    </form>
  );
};

export default AddProduct;
