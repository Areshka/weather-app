import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Cities from "../../components/Cities";
import CityFull from "../../components/CityFullInfo/CityFullInfo";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Cities />
      </Route>
      <Route exact path="/:city">
        <CityFull />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
