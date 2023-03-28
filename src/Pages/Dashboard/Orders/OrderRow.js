import React from 'react';

const OrderRow = ({order, refetch, setDeletingOrder}) => {
    const {_id,userEmail,price,quantity, phone,address } = order;

    refetch();
    
    return (
        <tr>
            <td>Order-{_id.slice(-6)}</td>
            <td>
                <p>Payment Status: </p>
                <p>Delivery Status: </p>
            </td>
            <td>
                <p>Email: {userEmail}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </td>
            <td>${price * quantity}</td>

            <td>{}</td>
            
            <td>

            <label onClick={() => setDeletingOrder(order)}  htmlFor="confirmation-modal" className="btn btn-xs btn-outline btn-error rounded">Cancel</label>
            </td>
        </tr>
    );
};

export default OrderRow;