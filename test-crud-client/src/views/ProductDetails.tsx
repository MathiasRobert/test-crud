import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";

import ProductCard from "../components/Product/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
    paddingTop: 10,
  },
}));

interface Params {
  productId: string;
}
interface Props extends RouteComponentProps<Params> {}

function ProductDetails(props: Props) {
  const classes = useStyles();
  const productId = props.match.params.productId;

  return (
    <Grid container className={classes.root} justify="center" spacing={2}>
      <Grid item xs={12}>
        <h3>Product details</h3>
      </Grid>

      <Grid item xs={12}>
        <ProductCard productId={productId} />
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
