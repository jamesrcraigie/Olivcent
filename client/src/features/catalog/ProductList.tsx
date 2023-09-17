import React, { Fragment } from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function ProductList({ products }: Props) {
  return (
    <div className="product-list-container">
      <List>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
    </div>
  );
}
