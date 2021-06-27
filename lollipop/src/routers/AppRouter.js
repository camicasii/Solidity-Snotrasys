import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
