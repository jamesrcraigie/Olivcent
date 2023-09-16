import React, { useState, Fragment } from "react";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <Fragment>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <img src="http://picsum.photos/160" alt={product.name} />
            <span className="product-name">{product.name}</span> -
            <span className="product-price">£{product.price}</span>
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </Fragment>
  );
}
