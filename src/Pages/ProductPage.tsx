import React from "react";
import { Product } from "../Components/Product";
import { useProducts } from "../Hooks/products";
import { Loader } from "../Components/Loader";
import { ErrorMessage } from "../Components/ErrorMessage";
import { Modal } from "../Components/Modal";
import { CreatProduct } from "../Components/CreatProduct";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

export function ProductPage() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreatProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-yellow-900 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  )
}
