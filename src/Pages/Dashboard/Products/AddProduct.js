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
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    {" "}
                    <span className="label-text">Product Title</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    {...register("name")}
                    className="input input-bordered w-full max-w-xs"
                />{" "}
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <input
          className="btn btn-accent mt-4 max-w-xs mr-4"
          value="Save"
          type="submit"
        /> 

        <input className="btn btn-accent mt-4 max-w-xs" value="Save & Add More" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;