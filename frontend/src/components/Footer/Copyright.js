import React from "react";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Omer Colakoglu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
