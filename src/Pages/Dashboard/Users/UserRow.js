import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { name, email, role } = user;
  const makeAdmin = () => {
    try {
      fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong! Please try again latter');
    }
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          "Admin"
        ) : (
          <p>
            {" "}
            Normal User{" "}
            <button onClick={makeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          </p>
        )}
      </td>
      <td>
        <button className="btn btn-xs bg-red-500">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
