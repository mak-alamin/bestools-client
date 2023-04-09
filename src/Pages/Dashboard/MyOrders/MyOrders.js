import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";
import useOrders from "../../../hooks/useOrders";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, isLoading, refetch] = useOrders(user?.email);

  const [deletingOrder, setDeletingOrder] = useState(false);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!orders?.length) {
    return (
      <div className="container pt-1">
        <h2 className="text-2xl font-bold text-purple-500 mb-3">My Orders</h2>
        <p>You don't have placed any order yet.</p>
        <Link to="/tools" className="btn btn-info mt-5 text-white">
          Start Shopping
        </Link>
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
              {orders?.length &&
                orders.map((order) => (
                  <MyOrderRow
                    key={order._id}
                    order={order}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                  ></MyOrderRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
