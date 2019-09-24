import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import RegisterForm from "./Forms/RegisterForm";
import SignInForm from "./Forms/SignInForm"
import Profile from "./Profile"
import ItemList from "./ItemList"
import PrivateRoute from './PrivateRoute';

export default function Navigation() {

    return (
        <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/register/">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/profile/">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/item-list/">List</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={SignInForm} />
                <PrivateRoute exact path="/profile/" component={Profile} />
                <PrivateRoute path="/item-list/" component={ItemList} />
            </Switch>
          </div>
        </Router>
        </div>
      );
};

