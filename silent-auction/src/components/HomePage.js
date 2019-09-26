import React from "react";
import image from "../images/Gavel.png"
import styled from 'styled-components';


const HomeContainer = styled.div`
  text-align: center;
  margin-top: 5%;
`;
const Header = styled.h1`
  color: #341C09;
`;
const SubHeader = styled.h3`
  color: #66b3ff;
`;
const HomeButton = styled.button`
    width: 150px;
    padding: 2% 0;
    margin-top: 2.5%;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
    font-size: .9rem;
`;

const HomePage = props => {
  return (
      <HomeContainer>
        <div className='home-page-header'>
        <img src={image}></img>
        <Header>Welcome to Silent Auction!</Header>
        </div>
        <div>
          <SubHeader>Here you can buy and sell items from anywhere in the world</SubHeader>
          <p>Just register to <strong>Sell</strong> or <strong>Buy</strong></p>
          <HomeButton>Register Now</HomeButton>
        </div>
      </HomeContainer>
  );
};

export default HomePage;
