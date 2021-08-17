import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navbar/Navbar";
import Info from "../Info/Info";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import { fetchProducts } from "../../actions/product";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        <Info />
        <Products />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
