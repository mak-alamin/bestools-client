import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import BesToolsAlert from "../../../components/Shared/BesToolsAlert";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";

const UpdateProfile = () => {
  const [user, loading] = useAuthState(auth);

  const [alertInfo, setAlertInfo] = useState({});

  const email = user?.email;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:8000/user/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Update Profile on Submit
  const handleUpdateProfile = (data) => {
    fetch(`http://localhost:8000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.acknowledged || res.result.acknowledged) {
          toast.success("Profile Updated.");
        }
      });
  };

  if (loading || isLoading) {
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
