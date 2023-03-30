import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { bestoolContext } from "../../../App";
import useProducts from "../../../hooks/useProducts";
import useUserRole from "../../../hooks/useUserRole";
import Notfound from "../../Notfound";
import Loading from "../../../components/Shared/Loading";
import auth from "./../../../firebase.init";
import ConfirmModal from "../../../components/Shared/ConfirmModal";
import AddProduct from "./AddProduct";
import ProductRow from "./ProductRow";

const Products = () => {
  const [user] = useAuthState(auth);
  const [userRole] = useUserRole(user);

  const { drawerContext } = useContext(bestoolContext);
  const { setDrawerInfo } = useContext(bestoolContext);

  const [deletingProduct, setDeletingProduct] = useState(null);

  const [products, isLoading, refetch] = useProducts(null);

  const openDrawer = (component) => {
    setDrawerInfo({
      isOpen: true,
      content: component,
      width: 50,
    });
  };

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const handleDeleteProduct = (product) => {
    // console.log(product);
    fetch(`http://localhost:8000/product/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product deleted successfully.`);
        }
      })
      .catch((err) => {
        toast.error(`Failed to delete!`);
        console.log(err);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (userRole !== "admin") {
    return <Notfound></Notfound>;
  }

  return (
    <div className="container pt-1">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="p-5">
        <h2 className="text-2xl font-bold text-purple-500 mb-3">
          Products
          <span className="text-slate-600">({products.length})</span>
          <span
            className="btn btn-sm bg-sky-500 border-0 rounded ml-3"
            onClick={() => openDrawer(<AddProduct></AddProduct>)}
          >
            Add New
          </span>
        </h2>

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
              {products.length &&
                products.map((product) => (
                  <ProductRow
                    key={product._id}
                    product={product}
                    refetch={refetch}
                    setDeletingProduct={setDeletingProduct}
                    openDrawer={openDrawer}
                  ></ProductRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingProduct && (
        <ConfirmModal
          title={`Are you sure you want to delete?`}
          message={`If you delete "${deletingProduct?.title}" it cannot be undone.`}
          successAction={handleDeleteProduct}
          successButtonName="Delete"
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default Products;
