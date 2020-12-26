import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Cities from "../../components/Cities";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Cities />
      </Route>
      <Route exact path="/:city">
        Test
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
