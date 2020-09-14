import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addProduct" component={Add} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
