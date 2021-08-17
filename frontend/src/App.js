import React from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ViewProduct from "./components/Products/Product/ViewProduct";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={ViewProduct} />
        {<Redirect from="/" to="/" />}
      </Switch>
    </Router>
  );
};

export default App;
