import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Add from "./components/Add";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function Loged() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/addProduct" component={Add} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default Loged;
