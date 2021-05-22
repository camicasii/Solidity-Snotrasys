import React from "react";
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import App from "../App";


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;