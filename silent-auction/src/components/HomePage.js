import React from "react";
import image from "../images/Gavel.png";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding-top: 10%;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  height: 727px;
  border-radius: 10px;
`;
const Header = styled.h1`
  color: #341c09;
`;
const SubHeader = styled.h3`
  color: #66b3ff;
`;
const HomeButton = styled.button`
  width: 200px;
  padding: 10px 0;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 2.5%;
  background-color: white;
  color: black;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1rem;
  :hover {
    background-color: dodgerblue;
    color: white;
  }
`;

const HomePage = props => {
  const clickHandler = () => {
    props.history.push("/register/");
  };

  const landingHandler = () => {
    window.location.href =
      "https://build-week-silent-auction.netlify.com/index.html";
  };

  return (
    <HomeContainer>
      <div className="home-page-header">
        <img src={image}></img>
        <Header>Welcome to Silent Auction!</Header>
      </div>
      <div>
        <SubHeader>
          Here you can buy and sell items from anywhere in the world
        </SubHeader>
        <p>
          Just register to <strong>Sell</strong> or <strong>Buy</strong>
        </p>
        <div className="button-container">
          <HomeButton onClick={clickHandler}>Register Now</HomeButton>
          <HomeButton onClick={landingHandler}>Home</HomeButton>
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
