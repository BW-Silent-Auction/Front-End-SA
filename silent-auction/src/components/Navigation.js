import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import RegisterForm from "./Forms/RegisterForm";
import SignInForm from "./Forms/SignInForm";
import SellSignInForm from "./Forms/SellSignInForm";
import Profile from "./Profile";
import AuctionItemList from "./AuctionItemList";
import SellerItemList from "./SellerItemList";
import PrivateRoute from './PrivateRoute';
import AuctionItemDetail from './AuctionItemDetail';
import BidderForm from './Forms/BidderForm.js';
import styled from  'styled-components';

const Nav = styled.nav`
  border-bottom: 1px solid #66b3ff;
  padding-bottom: 3%;
  // position: fixed;
  // top: 0px;
  // left: 0px;
  // padding: 10px;
  // width: 100%;
`;


export default function Navigation() {

    return (
        <div>
        <Router>
          <div>
            
            <Nav>
              <ul>
              {/* <li>
                  <NavLink to="/products/:id/bid">BidForm</NavLink>
                </li> */}
              <li>
                  <NavLink to="/products/:id/">AuctionDetail</NavLink>
                </li>
                <li>
                  <NavLink to="/register/">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/buyer-login/">Buyer Login</NavLink>
                </li>
                <li>
                  <NavLink to="/seller-login/">Seller Login</NavLink>
                </li>
                <li>
                  <NavLink to="/profile/">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/auction-item-list/">Buyer List</NavLink>
                </li>
                <li>
                  <NavLink to="/seller-item-list/">Seller List</NavLink>
                </li>
              </ul>
              </Nav>
            <Switch>
                <Route exact path="/register" component={RegisterForm} />
                <Route path="/buyer-login" component={SignInForm} />
                <Route path="/seller-login" component={SellSignInForm} />
                <Route exact path="/profile/" component={Profile} /> 
                <Route path="/auction-item-list/" component={AuctionItemList} />
                <Route path="/seller-item-list/" component={SellerItemList} />
                <Route exact path="/products/:id" component={AuctionItemDetail} />
                <Route exact path="/products/:id/bid" component={BidderForm} />
            </Switch>
           
          </div>
        </Router>
        </div>
      );
};

