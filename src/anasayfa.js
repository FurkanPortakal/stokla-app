import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function anasayfa() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Add />
      </div>
    </div>
  );
}

export default anasayfa;
