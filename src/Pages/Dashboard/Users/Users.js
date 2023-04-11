import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../components/Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:8000/user", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container pt-1">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500 mb-3">All Users</h2>
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
                {users?.length ? (
                  users.map((user) => (
                    <UserRow
                      key={user._id}
                      user={user}
                      refetch={refetch}
                    ></UserRow>
                  ))
                ) : (
                  <p className="text-center mt-3">No User Founds.</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
