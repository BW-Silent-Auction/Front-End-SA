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
import image from "../images/SilentLogo.png"

const Nav = styled.nav`
  width: 92%;
  border-bottom: 1px solid #66b3ff;
  margin-right: 2%;
  padding-top: 2%;
  z-index: 10;
  position: fixed;
  top: 0px;
  background-color: white;

`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

const UlNav = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-right: 5%;
`;
  
const LiNav= styled.li`
  list-style: none;
`;

const Logo = styled.img`
  width: 40%;
  height: auto;
`;


export default function Navigation() {

    return (

        <div>

          <Router>
            <div>
              <Nav>
                <NavContainer>
                  <NavLink id="emoji" to='/'>
                    <Logo  src={image} alt='silent auctions app logo'/>
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

