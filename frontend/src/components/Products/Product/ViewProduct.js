import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../../actions/product";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainFeaturedProduct: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    //marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(50),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedProductContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const ViewProduct = ({ history, location, match }) => {
  const classes = useStyles();
  const { id } = match.params;
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.currentProduct);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <Paper
        className={classes.mainFeaturedProduct}
        style={{ backgroundImage: `url(${currentProduct?.image})` }}
      >
        {
          <img
            style={{ display: "none" }}
            src={currentProduct?.image}
            alt={currentProduct?.imageText}
          />
        }

        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedProductContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {currentProduct?.name}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                £{currentProduct?.price}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ViewProduct;
