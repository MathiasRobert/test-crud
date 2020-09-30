import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { Product } from "./ProductCard";

interface Props {
  product: Product;
}

function ProductCardData({ product }: Props) {
  return (
    <Grid container justify="flex-start" spacing={2}>
      <Grid item xs={8}>
        <Typography variant="overline">Title</Typography>
        <Typography>{product.title}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="overline">Price</Typography>
        <Typography>{product.price} €</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="overline">Description</Typography>
        <Typography>{product.description}</Typography>
      </Grid>
    </Grid>
  );
}

export default ProductCardData;
