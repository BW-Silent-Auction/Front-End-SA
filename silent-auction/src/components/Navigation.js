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
import ItemEditSuccess from "./ItemEditSuccess";
import ConfirmDelete from "./ConfirmDelete";
import styled from  'styled-components';
import UploadItemSuccess from "./SellerUploadSuccess";
import LogoutSuccess from './LogoutSuccess';
import HomePage from './HomePage';

const Nav = styled.nav`
  border-bottom: 1px solid #66b3ff;
  padding-bottom: 3%;
`;

export default function Navigation() {

    return (
        <div>
        <Router>
          <div>
            
            <Nav>
              <img src='img/SilentLogo.png' alt='silent auctions app logo'/>
              <ul>
              {/* <li>
                  <NavLink to="/products/:id/bid">BidForm</NavLink>
                </li> */}
              {/* <li>
                  <NavLink to="/products/:id/">AuctionDetail</NavLink>
                </li> */}
                <li>
                  <a href='https://build-week-silent-auction.netlify.com/index.html'>Home</a>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/register/">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/buyer-login/">Buyer Login</NavLink>
                </li>
                <li>
                  <NavLink to="/seller-login/">Seller Login</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/profile/">Profile</NavLink>
                </li> */}
                {/* <li>
                  <NavLink to="/auction-item-list/">Buyer List</NavLink>
                </li> */}
                <li>
                  <NavLink to="/logout-success/">Logout</NavLink>
                </li> 
              </ul>
              </Nav>
            <Switch>
                <Route exact path="/logout-success/" component={LogoutSuccess} />
                <Route exact path="/register" component={RegisterForm} />
                <Route path="/buyer-login" component={SignInForm} />
                <Route path="/seller-login" component={SellSignInForm} />
                <PrivateRoute path="/auction-item-list/" component={AuctionItemList} />
                <PrivateRoute path="/seller-item-list/" component={SellerItemList} />
                <PrivateRoute exact path="/products/:id/delete" component={ConfirmDelete} />
                <PrivateRoute exact path="/products/:id" component={AuctionItemDetail} />
                <PrivateRoute exact path="/products/:id/bid" component={BidderForm} />
                <Route exact path="/edit-success" component={ItemEditSuccess} />
                <Route exact path="/upload-success" component={UploadItemSuccess} />
                <Route exact path="/" component={HomePage} />
            </Switch>
           
          </div>
        </Router>
        </div>
      );
};

