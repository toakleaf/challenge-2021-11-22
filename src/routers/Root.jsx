import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { PackageInfo, NotFound } from "../containers";
import { PackageState } from "../contexts";

const Root = () => {
  const location = useLocation();

  return (
    <Switch>
      <Redirect // redirect all routes to have no trailing slash
        from="/:url*(/+)"
        to={location.pathname.slice(0, -1)}
      />
      <Route // redirect all routes to lowercase
        sensitive
        path="/:slug1*:slug2([A-Z]):slug3*/"
      >
        <Redirect to={`${location.pathname.toLowerCase()}`} />
      </Route>
      <Route path="/:platform/:name">
        <PackageState>
          <PackageInfo />
        </PackageState>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Root;
