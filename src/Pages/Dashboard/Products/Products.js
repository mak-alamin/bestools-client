import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { bestoolContext } from "../../../App";
import Notfound from "../../Notfound";
import Loading from "../../Shared/Loading";
import ConfirmModal from "./../../Shared/ConfirmModal";
import AddProduct from "./AddProduct";
import ProductRow from "./ProductRow";

const Products = ({userRole}) => {
  const {drawerContext} = useContext(bestoolContext);
  const {setDrawerInfo} = useContext(bestoolContext);

  const [deletingProduct, setDeletingProduct] = useState(null);

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        try {
            const res = await fetch("http://localhost:5000/product", {
              method: "GET",
            });

            const data = await res.json();
            
            return data;
        } catch (error) {
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

  
  const closeModal = () => {
    setDeletingProduct(null);
  }

  const handleDeleteProduct = product => {
    // console.log(product);
    fetch(`http://localhost:5000/product/${product._id}`, {
        method: 'DELETE', 
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Product deleted successfully.`)
        }
    })
    .catch(err => {
      toast.error(`Failed to delete!`);
      console.log(err);
    })
}

  if(isLoading){
    return <Loading></Loading>
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
          <h2 className="text-2xl font-bold text-purple-500 mb-3">Products <span className="text-slate-600">({products.length})</span> <span className="btn btn-sm bg-sky-500 border-0 rounded ml-3" onClick={openDrawer}>Add New</span> </h2>

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
                  <ProductRow key={product._id} product={product} refetch={refetch} setDeletingProduct={setDeletingProduct}></ProductRow>)}
              </tbody>
            </table>
          </div>
        </div>

          {console.log(deletingProduct)}

          {deletingProduct && <ConfirmModal
                  title={`Are you sure you want to delete?`}
                  message={`If you delete "${deletingProduct?.title}" it cannot be undone.`}
                  successAction = {handleDeleteProduct}
                  successButtonName="Delete"
                  modalData = {deletingProduct}
                  closeModal = {closeModal}
              >
          </ConfirmModal>
        }
    </div>
  );
};

export default Products;
