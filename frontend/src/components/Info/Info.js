import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/product";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));
const productSchema = yup.object().shape({
  link: yup.string().required(),
});

const Info = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (data) => {
    dispatch(createProduct(data));
    clearForm();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const clearForm = () => {
    reset();
    setFile(null);
    handleClose();
  };
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <div className={classes.root}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="link"
                label="Link"
                name="link"
                variant="outlined"
                className={classes.textField}
                size="small"
                inputRef={register}
                fullWidth
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => handleSubmit(onSubmit)()}
            color="primary"
            variant="outlined"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This web app scrap selected product's name, price and image from
            Etsy.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleOpen}
                >
                  <CreateIcon className={classes.icon} />
                  Add New Product
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Info;
