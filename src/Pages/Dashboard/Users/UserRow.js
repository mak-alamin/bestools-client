import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  console.log(user);
  const { name, email, role } = user;
  const makeAdmin = () => {
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
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {<p class="capitalize"> {role} </p>}

        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs bg-red-500">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
