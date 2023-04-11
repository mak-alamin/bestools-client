import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ConfirmModal from "../../../components/Shared/ConfirmModal";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";
import useOrders from "../../../hooks/useOrders";
import useUserRole from "../../../hooks/useUserRole";
import OrderRow from "./OrderRow";
import { toast } from "react-toastify";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [userRole] = useUserRole(user);

  const [orders, isLoading, refetch] = useOrders();

  const [deletingOrder, setDeletingOrder] = useState(null);

  const handleDeleteOrder = (orderId) =>{
    fetch(`http://localhost:8000/order/${orderId}`, {
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
  }

  const closeModal = () => {
    setDeletingOrder(null);
  };

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
      {deletingOrder && (
        <ConfirmModal
          modalId="order-confirm"
          title={`Are you confirmed you want to cancel?`}
          message={`If you cancel Order-${deletingOrder?._id.slice(-6)}, it cannot be undone.`}
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

export default Orders;
