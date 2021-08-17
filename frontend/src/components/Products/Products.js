import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Product from "./Product/Product";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product?._id} xs={12} sm={6} md={4}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
