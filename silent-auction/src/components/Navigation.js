import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import RegisterForm from "./Forms/RegisterForm";
import SignInForm from "./Forms/SignInForm";
import SellSignInForm from "./Forms/SellSignInForm";
import AuctionItemList from "./AuctionItemList";
import SellerItemList from "./SellerItemList";
import PrivateRoute from "./PrivateRoute";
import AuctionItemDetail from "./AuctionItemDetail";
import BidderForm from "./Forms/BidderForm.js";
import ItemEditSuccess from "./ItemEditSuccess";
import ConfirmDelete from "./ConfirmDelete";
import styled from "styled-components";
import UploadItemSuccess from "./SellerUploadSuccess";
import LogoutSuccess from "./LogoutSuccess";
import HomePage from "./HomePage";
import image from "../images/silent-auction-logo.png";

const Nav = styled.nav`
  width: 100%;
  margin-right: 10%;
  padding-top: 25px;
  z-index: 10;
  top: 0px;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  border-radius: 10px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

const UlNav = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-right: 2%;
  margin-bottom: auto;
`;

const LiNav = styled.li`
  list-style: none;
  /* border: 1px solid lightblue; */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px lightgrey;
  margin-top: -17px;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-top: -26px;
  margin-left: 30px;
`;

export default function Navigation() {
  return (
    <div>
      <Router>
        <div>
          <Nav>
            <NavContainer>
              <NavLink id="emoji" to="/">
                <Logo src={image} alt="silent auctions app logo" />
              </NavLink>
              <UlNav>
                <LiNav>
                  <NavLink to="/buyer-login/">Buyer Login</NavLink>
                </LiNav>

                <LiNav>
                  <NavLink to="/seller-login/">Seller Login</NavLink>
                </LiNav>

                <LiNav>
                  <NavLink to="/logout-success/">Logout</NavLink>
                </LiNav>
              </UlNav>
            </NavContainer>
          </Nav>
          <Switch>
            <Route exact path="/logout-success/" component={LogoutSuccess} />
            <Route exact path="/register" component={RegisterForm} />
            <Route path="/buyer-login" component={SignInForm} />
            <Route path="/seller-login" component={SellSignInForm} />
            <PrivateRoute
              path="/auction-item-list/"
              component={AuctionItemList}
            />
            <PrivateRoute
              path="/seller-item-list/"
              component={SellerItemList}
            />
            <PrivateRoute
              exact
              path="/products/:id/delete"
              component={ConfirmDelete}
            />
            <PrivateRoute
              exact
              path="/products/:id"
              component={AuctionItemDetail}
            />
            <PrivateRoute
              exact
              path="/products/:id/bid"
              component={BidderForm}
            />
            <Route exact path="/edit-success" component={ItemEditSuccess} />
            <Route exact path="/upload-success" component={UploadItemSuccess} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
