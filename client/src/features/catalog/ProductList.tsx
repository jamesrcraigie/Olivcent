import React, { Fragment } from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from "@mui/material";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
