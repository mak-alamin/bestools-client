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
  } = order;

  refetch();

  return (
    <tr>
      <td>Order-{_id.slice(-6)}</td>
      <td>
        <p>Email: {userEmail}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </td>
      <td>${price * quantity}</td>

      <td>{}</td>
      <td>
        {paid && <p className="text-success">Paid</p>}

        {/* {paid && (
          <p>
            Transaction ID: <span className="text-info"></span> {transactionId}
          </p>
        )} */}

        {!paid && <span className="text-error">Unpaid</span>}
      </td>

      <td>
        <p className="mt-2">
          <span className="text-red-400">Pending</span>{" "}
        </p>
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
