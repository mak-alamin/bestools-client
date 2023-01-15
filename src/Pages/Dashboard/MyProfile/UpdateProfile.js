import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";

const UpdateProfile = () => {
  const [user, loading] = useAuthState(auth);

  const email = user?.email;

  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            defaultValue={data?.name}
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full max-w-xs"
          />{" "}
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <input
          className="btn btn-accent w-full mt-4 max-w-xs"
          value="Update"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UpdateProfile;
