import React from 'react';

const ProductRow = ({product, refetch}) => {
    const {title,img_url,price, description,stock_qty,min_order_qty, } = product;

    return (
        <tr>
            <td><img src={img_url} alt={title} width="60" /></td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{stock_qty}</td>
            <td>{min_order_qty}</td>
            <td>
            <button className="btn btn-xs bg-sky-500 border-0 rounded mr-3">Edit</button>
            <button className="btn btn-xs btn-outline btn-error rounded">Delete</button>
            </td>
        </tr>
    );
};

export default ProductRow;