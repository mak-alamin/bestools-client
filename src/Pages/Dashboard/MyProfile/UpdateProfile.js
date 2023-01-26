import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import BesToolsAlert from "../../Shared/BesToolsAlert";
import Loading from "../../Shared/Loading";

const UpdateProfile = () => {
  const [user, loading] = useAuthState(auth);

  const [alertInfo, setAlertInfo] = useState({});

  const email = user?.email;

  // Get User Data From DataBase
  const { data, isLoading, refetch } = useQuery("users", async () => {
    const res = await fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return res.json();
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Update Profile on Submit
  const handleUpdateProfile = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result.acknowledged) {
          setAlertInfo({
            show: true,
            type: "success",
            message: "User Updated Successfully.",
          });
        }
      });
  };

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <BesToolsAlert
        info={alertInfo}
        setAlertInfo={setAlertInfo}
      ></BesToolsAlert>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Display Name</span>
          </label>
          <input
            type="text"
            defaultValue={data?.name}
            {...register("name")}
            className="input input-bordered w-full max-w-xs"
          />{" "}
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="hidden"
            defaultValue={email}
            {...register("email")}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            defaultValue={email}
            className="input input-bordered w-full max-w-xs"
            disabled
            readOnly
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            defaultValue={data?.phone}
            {...register("phone")}
            className="input input-bordered w-full max-w-xs"
          />{" "}
          {errors?.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            defaultValue={data?.address}
            {...register("address")}
            className="input input-bordered w-full max-w-xs"
          />{" "}
          {errors?.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            defaultValue={data?.education}
            {...register("education")}
            className="input input-bordered w-full max-w-xs"
          />{" "}
          {errors?.education && (
            <p className="text-red-500">{errors.education.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Linkedin</span>
          </label>
          <input
            type="text"
            defaultValue={data?.linkedin}
            {...register("linkedin")}
            className="input input-bordered w-full max-w-xs"
          />{" "}
          {errors?.linkedin && (
            <p className="text-red-500">{errors.linkedin.message}</p>
          )}
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
