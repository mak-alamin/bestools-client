import React from "react";

const OrderRow = ({ order, refetch, setPayingOrder, setDeletingOrder }) => {
  const { _id, userEmail, price, quantity, phone, address } = order;

  refetch();

  return (
    <tr>
      <td>Order-{_id.slice(-6)}</td>
      <td>
        <p className="mt-2">
          <span className="text-red-400">Pending</span>{" "}
        </p>
      </td>
      <td>
        <p>Email: {userEmail}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </td>
      <td>${price * quantity}</td>

      <td>{}</td>
      <td>
        <span className="text-error">Unpaid</span>{" "}
        <label
          htmlFor="payment-popup"
          onClick={() => {
            setPayingOrder(order);
          }}
          className="btn btn-info btn-sm text-white ml-2"
        >
          Pay Now
        </label>
      </td>

      <td>
        <label
          onClick={() => setDeletingOrder(order)}
          htmlFor="confirmation-modal"
          className="btn btn-xs btn-outline btn-error rounded"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
