import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { bestoolContext } from "../../../App";
import Notfound from "../../Notfound";
import AddProduct from "./AddProduct";

const Products = ({userRole}) => {
  const {drawerContext} = useContext(bestoolContext);
  const {setDrawerInfo} = useContext(bestoolContext);

  const openDrawer = () => {
    setDrawerInfo({
      isOpen: true,
      content: <AddProduct></AddProduct>,
      width: 50
    })
  }
  
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
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Products;
