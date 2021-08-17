import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const Product = ({ _id, price, name, image }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image} name="selam" />

        <CardContent className={classes.cardContent}>
          <Typography variant="h6">£{price}</Typography>

          <br />
          <Typography variant="body1">{name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary">
            <Link to={`/${_id}`}>View</Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
