import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmModal from "../../../components/Shared/ConfirmModal";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";
import useOdersByEmail from "../../../hooks/useOdersByEmail";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const [myOrders, isLoading, refetch] = useOdersByEmail(user?.email);

  const [deletingOrder, setDeletingOrder] = useState(false);

  const handleDeleteOrder = (orderId) => {
    fetch(`https://bestools-server.onrender.com/order/${orderId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Order cancelled successfully.`);
        }
      })
      .catch((err) => {
        toast.error(`Failed to cancel!`);
        console.log(err);
      });
  };

  const closeModal = () => {
    setDeletingOrder(null);
  };

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  if (!myOrders?.length) {
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
                <th>Payment</th>
                <th>Order Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myOrders?.length &&
                myOrders.map((order) => (
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

      {deletingOrder && (
        <ConfirmModal
          modalId="my-order-confirm"
          title={`Are you confirmed you want to cancel?`}
          message={`If you cancel Order-${deletingOrder?._id.slice(
            -6
          )}, it cannot be undone.`}
          successButtonName="Confirm"
          deletingData={deletingOrder?._id}
          successAction={handleDeleteOrder}
          closeButtonName="Go Back"
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default MyOrders;
