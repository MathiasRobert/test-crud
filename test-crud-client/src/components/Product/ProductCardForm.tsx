import { FormControl, Grid, TextField, Typography } from "@material-ui/core";
import * as React from "react";
import { Product } from "./ProductCard";

interface Props {
  product?: Product;
  register: any;
  errors: any;
}

function ProductCardForm({ product, register, errors }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            name="title"
            defaultValue={product ? product.title : ""}
            label="Title"
            variant="outlined"
            type="text"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register({
              required: "Title is required",
            })}
          />
          <Typography variant="subtitle2" color="error">
            {errors.title && errors.title.message}
          </Typography>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            name="description"
            defaultValue={product ? product.description : ""}
            label="Description"
            variant="outlined"
            type="text"
            rows={4}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register({
              required: "Description is required",
            })}
          />
          <Typography variant="subtitle2" color="error">
            {errors.description && errors.description.message}
          </Typography>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            name="price"
            defaultValue={product ? product.price : 0}
            label="Price"
            variant="outlined"
            type="number"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register({
              required: "Price is required",
            })}
          />
          <Typography variant="subtitle2" color="error">
            {errors.price && errors.price.message}
          </Typography>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default ProductCardForm;
