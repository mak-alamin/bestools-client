import React from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import Loading from "../../Shared/Loading";
import LeftMenu from "../LeftMenu";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container pt-16">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl">All Users: {users?.length}</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserRow
                    key={user._id}
                    user={user}
                    refetch={refetch}
                  ></UserRow>
                ))}
              </tbody>
            </table>
          </div>
          <Outlet></Outlet>
        </div>

        <LeftMenu></LeftMenu>
      </div>
    </div>
  );
};

export default Users;
