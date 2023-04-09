import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrderRow = ({ order, refetch, setDeletingOrder }) => {
  const { _id, userEmail, price, quantity, phone, address } = order;

  refetch();

  const navigate = useNavigate();

  const goToPayment = () => {
    navigate("/dashboard/payment", {
      replace: true,
      state: {
        order: order,
      },
    });
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

      <td>{}</td>
      <td>
        <span className="text-error">Unpaid</span>{" "}
        <button
          className="btn btn-info btn-sm text-white ml-2"
          onClick={goToPayment}
        >
          Pay Now
        </button>
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

export default MyOrderRow;
