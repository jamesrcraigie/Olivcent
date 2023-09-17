import React, { Fragment } from "react";
import { Product } from "../../app/models/product";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <Fragment>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar
                src={product.pictureUrl} // Use the actual product image URL
                alt={product.name}
                sx={{ width: 80, height: 80 }} // Set the width and height
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`£${product.price}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={addProduct}>
        Add Product
      </Button>
    </Fragment>
  );
}
