import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassname = details ? "bg-yellow-400" : "bg-blue-300";
  const btnClasses = ["py-2 px-4 border rounded-xl", btnBgClassname];

  return (
    <div className="border py-2 px-4 flex flex-col items-center mb2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title} </p>
      <p className="font-bold">{product.price} </p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>

      {details && (
        <div>
          <p>{product.description} </p>
          <p>
            Rate:
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
