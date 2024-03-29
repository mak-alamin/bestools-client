import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ order, refetch, setDeletingOrder }) => {
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
      <td>
        {paid && (
          <>
            <p className="text-success">Paid</p>
            <p>Transaction ID:</p>
            <p className="text-orange-400"> {transactionId}</p>
          </>
        )}

        {!paid && <span className="text-error">Unpaid</span>}
        {!paid && (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-info btn-sm text-white ml-2"
          >
            Pay Now
          </Link>
        )}
      </td>
      <td>
        <p className="mt-2">
          {shipped && <span className="text-green-400">Shipped</span>}
          {!shipped && <span className="text-red-400">Pending</span>}
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
              htmlFor="my-order-confirm"
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

export default MyOrderRow;
