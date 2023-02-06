import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { bestoolContext } from "../../../App";
import Notfound from "../../Notfound";
import AddProduct from "./AddProduct";
import ProductRow from "./ProductRow";

const Products = ({userRole}) => {
  const {drawerContext} = useContext(bestoolContext);
  const {setDrawerInfo} = useContext(bestoolContext);

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        try {
            const res = await fetch("http://localhost:8000/product", {
              method: "GET",
            });
            const data = await res.json();
            return data;
        }
        catch (error) {
          console.log(error);
        }
    }
  });

  const openDrawer = () => {
    setDrawerInfo({
      isOpen: true,
      content: <AddProduct></AddProduct>,
      width: 50
    })
  }

  console.log(products);
  
  if(userRole !== 'admin'){
    return <Notfound></Notfound>
  }

  return (
    <div className="container pt-1">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-purple-500 mb-3">Products  <span className="btn btn-sm bg-sky-500 border-0 rounded ml-3" onClick={openDrawer}>Add New</span> </h2>

          <div className="overflow-x-auto">
            <table className="table w-full text-center table-zebra">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>In Stock</th>
                  <th>Minimum Order Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products && products.map((product) =>
                  <ProductRow key={product._id} product={product} refetch={refetch}></ProductRow>)}
              </tbody>
            </table>
          </div>
          <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Products;
