import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Payment from "../../../components/Payment/Payment";
import auth from "../../../firebase.init";
import useOrders from "../../../hooks/useOrders";
import OrderRow from "../Orders/OrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [orders, isLoading, refetch] = useOrders(user?.email);

  const [payingOrder, setPayingOrder] = useState(null);

  const [deletingOrder, setDeletingOrder] = useState(false);

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
                <th>Status</th>
                <th>Billing Info</th>
                <th>Total</th>
                <th>Date</th>
                <th> Payment</th>
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
                    setPayingOrder={setPayingOrder}
                    setDeletingOrder={setDeletingOrder}
                  ></OrderRow>
                ))}
            </tbody>
          </table>
        </div>

        {/* Payment Popup */}
        <input type="checkbox" id="payment-popup" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="payment-popup"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <Payment payingOrder={payingOrder}></Payment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
