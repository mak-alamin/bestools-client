import React, { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../../components/Shared/Loading";

const UserRow = ({ user, refetch }) => {
  const { name, email, role } = user;

  const [makingAdmin, setMakingAdmin] = useState(false);

  const makeAdmin = () => {
    setMakingAdmin(true);
    try {
      fetch(`https://bestools-server.onrender.com/user/admin/${email}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            toast.error("Failed to Make an admin");
            setMakingAdmin(false);
          }
          return res.json();
        })
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();
            toast.success(`Successfully made an admin`);
            setMakingAdmin(false);
          }
        });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again latter");
      setMakingAdmin(false);
    }
  };

  return (
    <tr>
      <td>{name ? name : "--"}</td>
      <td>{email}</td>
      <td>{role ? role : <p> Normal User </p>}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}

        {makingAdmin && <Loading></Loading>}
      </td>
    </tr>
  );
};

export default UserRow;
