import React, { Fragment } from "react";
import { Product } from "../../app/models/product";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <Fragment>
      <ProductList products={products} addProduct={addProduct} />
      <Button variant="contained" color="primary" onClick={addProduct}>
        Add Product
      </Button>
    </Fragment>
  );
}
