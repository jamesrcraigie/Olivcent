import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar
          src={product.pictureUrl} // Use the actual product image URL
          alt={product.name}
          sx={{ width: 80, height: 80 }} // Set the width and height
        />
      </ListItemAvatar>
      <ListItemText primary={product.name} secondary={`£${product.price}`} />
    </ListItem>
  );
}
