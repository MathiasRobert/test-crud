import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import AddProductDialog from "./AddProductDialog";

import { GET_PRODUCTS } from "../../api/queries";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

function ProductsList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <>Loading...</>;
  if (error) return <>`Error: ${error.message}`</>;

  return (
    <Card>
      <CardHeader action={<AddProductDialog />} title="Products list" />
      <Divider />
      <CardContent>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.getProducts?.map((product: Product) => (
                <TableRow hover key={product.id}>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price} €</TableCell>
                  <TableCell>
                    <Button component={NavLink} to={"/product/" + product.id}>
                      <ArrowForwardIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductsList;
