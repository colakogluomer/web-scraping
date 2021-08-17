import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(),
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <BookIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          <a href=" http://localhost:3000/">Product Scraper</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
