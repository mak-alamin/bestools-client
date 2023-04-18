import axios from "axios";
import React from "react";

const OrderRow = ({ order, refetch, setDeletingOrder }) => {
  const {
    _id,
    userEmail,
    price,
    quantity,
    phone,
    address,
    paid,
    transactionId,
    shipped,
  } = order;

  refetch()

  const handleShipping = async (orderId) => {
    let shippingData = {
      shipped: !shipped,
    };

    const res = await axios.patch(
      `https://bestools-server.onrender.com/order/${orderId}`,
      shippingData,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    refetch();
  };

  return (
    <tr>
      <td>Order-{_id.slice(-6)}</td>
      <td>
        <p>Email: {userEmail}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </td>
      <td>${price * quantity}</td>
      <td>
        {paid && <p className="text-success">Paid</p>}

        {paid && (
          <>
            <p>Transaction ID:</p>
            <p className="text-orange-400"> {transactionId}</p>
          </>
        )}

        {!paid && <span className="text-error">Unpaid</span>}
      </td>

      <td>
        <p className="mt-2 form-control">
          {" "}
          <label className="cursor-pointer label">
            <span className="label-text">
              {shipped && <span className="text-green-400">Shipped</span>}

              {!shipped && <span className="text-red-400">Pending</span>}
            </span>
            <input
              type="checkbox"
              className="toggle toggle-accent tooltip"
              data-tip={shipped ? "Set to Pending" : "Complete Shipping"}
              onChange={() => {
                handleShipping(_id);
              }}
              checked={shipped}
            />
          </label>
        </p>
      </td>

      <td>
        <p>
          <button className="btn btn-info btn-outline rounded btn-xs mb-1">
            View
          </button>
        </p>

        {!paid && (
          <p>
            <label
              onClick={() => setDeletingOrder(order)}
              htmlFor="order-confirm"
              className="btn btn-xs btn-outline btn-error rounded"
            >
              Cancel
            </label>
          </p>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
