import React from 'react';
import UpdateProduct from './UpdateProduct';

const ProductRow = ({product, refetch, setDeletingProduct, openDrawer}) => {
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
            
            <button onClick={() => openDrawer(<UpdateProduct product={product} refetch={refetch} ></UpdateProduct>)} className="btn btn-xs bg-sky-500 border-0 rounded mr-3">Edit</button>

            <label onClick={() => setDeletingProduct(product)}  htmlFor="confirmation-modal" className="btn btn-xs btn-outline btn-error rounded">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;