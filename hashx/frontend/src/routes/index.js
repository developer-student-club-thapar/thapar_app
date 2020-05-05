import React from "react";
import { Switch } from "react-router-dom";
import PrivateTest from "../pages/PrivateTest";
import Route from "./Route";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/private" component={PrivateTest} isPrivate />
      <Route component={Home} />
    </Switch>
  );
};

export default Routes;
