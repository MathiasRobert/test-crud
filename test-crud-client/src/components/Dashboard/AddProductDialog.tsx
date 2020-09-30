import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";

import { ADD_PRODUCT } from "../../api/mutations";
import ProductCardForm from "../Product/ProductCardForm";
import { useForm } from "react-hook-form";
import { Product } from "../Product/ProductCard";

const useStyles = makeStyles((theme) => ({
  addIcon: {
    marginRight: theme.spacing(1),
  },
}));

function AddProductDialog() {
  const [addProductMutation] = useMutation(ADD_PRODUCT);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, register, errors } = useForm<Product>();

  const addProduct = handleSubmit(
    async ({ title, description, price }: Product) => {
      await addProductMutation({
        variables: {
          title: title,
          description: description,
          price: parseFloat(price),
        },
        refetchQueries: () => ["getProducts"],
      });
      setOpen(false);
    }
  );

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddIcon className={classes.addIcon} />
        Add product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new product</DialogTitle>
        <DialogContent>
          <ProductCardForm register={register} errors={errors} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addProduct} color="primary" type="submit">
            Create product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProductDialog;
