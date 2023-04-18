import React from 'react';
import UpdateProduct from './UpdateProduct';
import { truncateText } from '../../../functions/common';

const ProductRow = ({product, refetch, setDeletingProduct, openDrawer}) => {
    const {title,img_url,price, description,stock_qty,min_order_qty, } = product;

    refetch();
    
    return (
        <tr>
            <td><img src={img_url} alt={title} width="60" /></td>
            <td>{truncateText(title, 16)}</td>
            <td>{truncateText(description, 24)}</td>
            <td>{price}</td>
            <td>{stock_qty}</td>
            <td>{min_order_qty}</td>
            <td>
            
            <button onClick={() => openDrawer(<UpdateProduct product={product} refetch={refetch} ></UpdateProduct>)} className="btn btn-xs bg-sky-500 border-0 rounded mr-3">Edit</button>

            <label onClick={() => setDeletingProduct(product)}  htmlFor="product-confirm-modal" className="btn btn-xs btn-outline btn-error rounded">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;