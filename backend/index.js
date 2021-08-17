const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const errorHandling = require("./middlewares/errorHandling");
const ApiError = require("./utils/ApiError");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/product", productRoute);
app.get("/", (req, res, next) => {
  res.send("Hello there! This is our awesome backend. ");
});

app.use(() => {
  throw new ApiError(404, "Page Not Found.");
});

//Error Handling middleware
app.use(errorHandling);

const connectionString = process.env.MONGODB_CONNECTION_STRING;
const port = process.env.PORT;
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .then(() =>
    app.listen(port, () => console.log(`Server listening on ${port}`))
  )
  .catch((error) => console.log(error.message));
