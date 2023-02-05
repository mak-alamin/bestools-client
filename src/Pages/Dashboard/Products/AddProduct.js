import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user, loading] = useAuthState(auth);

    const [alertInfo, setAlertInfo] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAddProduct = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h3 className="text-lg font-bold">Add Product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label" htmlFor='product_title'>
                        <span className="label-text">Product Title</span>
                    </label>
                    <input
                        type="text"
                        defaultValue=""
                        {...register("title")} id="product_title"
                        className="input input-bordered w-full max-w-xs"
                    />{" "}
                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label" htmlFor='product_img_url'>
                        <span className="label-text">Image Url: </span>
                    </label>
                    <input
                        type="text"
                        defaultValue=""
                        {...register("img_url")} id="product_img_url"
                        className="input input-bordered w-full max-w-xs"
                    />{" "}
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label" htmlFor='product_desc'> <span className="label-text">Description: </span></label>
                        <textarea {...register("description")}id="product_desc" className="textarea textarea-bordered" placeholder="Product descripton here...">
                        
                        </textarea>
                </div>

                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label" htmlFor='product_price'>
                        <span className="label-text">Price ( $ )</span>
                    </label>
                    <input
                        type="number"
                        defaultValue=""
                        {...register("price")} id="product_price"
                        className="input input-bordered w-full max-w-xs"
                    />{" "}
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label" htmlFor='product_stock_qty'>
                        <span className="label-text">Stock Quantity</span>
                    </label>
                    <input
                        type="number"
                        defaultValue=""
                        {...register("stock_qty")} id="product_stock_qty"
                        className="input input-bordered w-full max-w-xs"
                    />{" "}
                    {errors.stock_qty && <p className="text-red-500">{errors.stock_qty.message}</p>}
                </div>
               
                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label" htmlFor='min_order_qty'>
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        defaultValue=""
                        {...register("min_order_qty")} id="min_order_qty"
                        className="input input-bordered w-full max-w-xs"
                    />{" "}
                    {errors.min_order_qty && <p className="text-red-500">{errors.min_order_qty.message}</p>}
                </div>

                <input className="btn btn-accent mt-4 max-w-xs mr-4" value="Save" type="submit" /> 

                <input className="btn btn-accent mt-4 max-w-xs" value="Save & Add More" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;