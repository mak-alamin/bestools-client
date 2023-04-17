import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import BesToolsAlert from "../../../components/Shared/BesToolsAlert";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";

const UpdateProduct = ({ product, refetch }) => {
  // console.log(product);

  const { _id } = product;

  const [user, loading] = useAuthState(auth);

  const [alertInfo, setAlertInfo] = useState({});
  const [productImg, setProductImg] = useState(product?.img_url);
  const [submitLoader, setSubmitLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUpdateProduct = (data) => {
    console.log(data);
    setSubmitLoader(true);

    const slug = data.title.toLowerCase().replace(/ /g, "-");

    const product = { ...data, slug: slug, id: _id };

    console.log(product);

    fetch(`https://bestools-server.onrender.com/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.acknowledged) {
          setAlertInfo({
            show: true,
            type: "success",
            message: "Product updated successfully.",
          });
          refetch();
        } else {
          setAlertInfo({
            show: true,
            type: "error",
            message: "Update failed!",
          });
        }
        setSubmitLoader(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateProduct)}>
        <div className="flex justify-between items-center gap-x-10">
          <div className="w-1/2">
            <h3 className="text-lg font-bold">Update Product</h3>
            <hr />

            <div className="form-control w-full max-w-xs my-3">
              <label className="label" htmlFor="product_title">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                defaultValue={product?.title}
                {...register("title")}
                id="product_title"
                className="input input-bordered w-full max-w-xs"
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
                defaultValue={product?.img_url}
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
                defaultValue={product?.description}
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
                defaultValue={product?.price}
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
                defaultValue={product?.stock_qty}
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
                defaultValue={product?.min_order_qty}
                {...register("min_order_qty")}
                id="min_order_qty"
                className="input input-bordered w-full max-w-xs"
              />{" "}
              {errors.min_order_qty && (
                <p className="text-red-500">{errors.min_order_qty.message}</p>
              )}
            </div>
          </div>

          <div className="w-1/2">
            {productImg && <img src={productImg} alt="" border="0"></img>}
          </div>
        </div>

        <div className="submit flex gap-x-5 items-center">
          <input
            className="btn btn-accent max-w-xs mr-4"
            value="Update Product"
            type="submit"
          />

          {submitLoader && <Loading></Loading>}

          <BesToolsAlert
            info={alertInfo}
            setAlertInfo={setAlertInfo}
          ></BesToolsAlert>
        </div>
      </form>
    </>
  );
};

export default UpdateProduct;
