import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./Login"
import Profile from "./Profile"
import ItemList from "./ItemList"

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function Navigation() {

    return (
        <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/login/">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/profile/">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/item-list/">List</NavLink>
                </li>
              </ul>
            </nav>
    
            <Route path="/login/" exact component={Login} />
            <Route path="/profile/" component={Profile} />
            <Route path="/item-list/" component={ItemList} />
          </div>
        </Router>
        </div>
      );
};

