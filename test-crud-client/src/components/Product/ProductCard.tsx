import { Card, CardContent, Divider, makeStyles } from "@material-ui/core";
import * as React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

import ProductCardForm from "./ProductCardForm";
import ProductCardHeader from "./ProductCardHeader";
import ProductCardData from "./ProductCardData";
import { GET_PRODUCT } from "../../api/queries";
import { UPDATE_PRODUCT } from "../../api/mutations";

interface Props {
  productId: string;
}

export interface Product {
  title: string;
  description: string;
  price: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

function ProductCard({ productId }: Props) {
  const classes = useStyles();

  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: {
      id: productId,
    },
  });
  const [updateProductMutation] = useMutation(UPDATE_PRODUCT);

  const [isEditing, setIsEditing] = React.useState(false);

  const { handleSubmit, register, errors, formState } = useForm<Product>();

  const updateProduct = handleSubmit(
    async ({ title, description, price }: Product) => {
      await updateProductMutation({
        variables: {
          id: productId,
          title,
          description,
          price: parseFloat(price),
        },
        refetchQueries: [
          {
            query: GET_PRODUCT,
            variables: {
              id: productId,
            },
          },
        ],
      });
      setIsEditing(false);
    }
  );

  return (
    <Card elevation={3} style={{ height: "100%" }}>
      <form
        onSubmit={handleSubmit((data1, e) => updateProduct(e))}
        className={classes.root}
      >
        <ProductCardHeader
          isSubmitting={formState.isSubmitting}
          isEditing={isEditing}
          onEdit={() => setIsEditing(true)}
          onCancel={() => setIsEditing(false)}
        />
        <Divider />
        <CardContent>
          {loading && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              ...Chargement
            </div>
          )}
          {!loading && (
            <React.Fragment>
              {isEditing && (
                <ProductCardForm
                  product={data?.getProduct}
                  register={register}
                  errors={errors}
                />
              )}
              {!isEditing && <ProductCardData product={data?.getProduct} />}
            </React.Fragment>
          )}
        </CardContent>
      </form>
    </Card>
  );
}

export default ProductCard;
