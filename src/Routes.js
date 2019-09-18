import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/Routing/AppliedRoute";
// import AuthenticatedRoute from "./components/Routing/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/Routing/UnauthenticatedRoute";
import Home from "./containers/Home"

export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <Route component={NotFound} />
</Switch>


