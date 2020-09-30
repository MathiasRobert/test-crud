import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Dashboard from "./views/Dashboard";
import ProductDetails from "./views/ProductDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/product/:productId"
              component={ProductDetails}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
