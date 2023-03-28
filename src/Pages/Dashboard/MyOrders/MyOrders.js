import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useOrders from "../../../hooks/useOrders";
import OrderRow from "../Orders/OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, isLoading, refetch] = useOrders(user?.email);
  console.log(orders);

  const [deletingOrder, setDeletingOrder] = useState(false);

  if (!orders?.length) {
    return (
      <div className="container pt-1">
         <h2 className="text-2xl font-bold text-purple-500 mb-3">My Orders</h2>
        <p>You don't have placed any order yet.</p>
        <Link to="/tools" className="btn btn-info mt-5 text-white">Start Shopping</Link>
        </div>
    );
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
          <h2 className="text-2xl font-bold text-purple-500 mb-3">My Orders</h2>

          <table className="table w-full">
            <thead>
              <tr>
                <th>Order</th>
                <th>Status</th>
                <th>Billing Info</th>
                <th>Total</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.length &&
                orders.map((order) => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                  ></OrderRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
