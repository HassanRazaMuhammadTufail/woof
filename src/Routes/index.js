import React from "react";
import { Router, Route } from "react-router-dom";
import App from "../App";
import { WrappedLoginForm } from "../Screens/Login";
import { WrappedSignUpForm } from "../Screens/Signup";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const CustomRoutes = () => (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={WrappedLoginForm} />
      <Route path="/signup" component={WrappedSignUpForm} />
    </div>
  </Router>
);
export default CustomRoutes;
