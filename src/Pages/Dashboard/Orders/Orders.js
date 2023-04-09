import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";
import useOrders from "../../../hooks/useOrders";
import useUserRole from "../../../hooks/useUserRole";
import OrderRow from "./OrderRow";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [userRole] = useUserRole(user);

  const [orders, isLoading, refetch] = useOrders();

  const [deletingOrder, setDeletingOrder] = useState(false);

  console.log(orders);

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
          <h2 className="text-2xl font-bold text-purple-500 mb-2">
            All Orders
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-center">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Billing Info</th>
                  <th>Total</th>
                  <th>Date</th>
                  <th>Payment</th>
                  <th>Order Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders?.length ? (
                  orders.map((order) => (
                    <OrderRow
                      key={order._id}
                      userRole={userRole}
                      order={order}
                      refetch={refetch}
                      setDeletingOrder={setDeletingOrder}
                    ></OrderRow>
                  ))
                ) : (
                  <p className="text-center mt-3">No Order Founds.</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
