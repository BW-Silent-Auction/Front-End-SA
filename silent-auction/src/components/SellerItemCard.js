import React from "react";
import Timer from "./Timer";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";

const SellerItemCards = styled.div`
background: #eff4ff;
color: black;
width: 600px;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
font-size: 1rem;
padding:2%;
margin: auto;
margin-top: 5%;
box-shadow: -11px 8px 10px grey; 
border-radius: 5px;
`;
const SellerSplitInfo = styled.div`
  display: flex;
`;
const SellerMainDetails = styled.div`

  border: 1px solid black;
  padding: 5%;
  margin-right: 6%;
`;
const SellerItemImg = styled.img`
  max-width: 300px;
  height: auto;
`;
const SellerButtons = styled.button`
    width: 100px;
    padding: 4% 0;
    margin: 10px auto 10px auto;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
`;
const SellerPriceAndTime = styled.div`
  text-align: center;
`;

const SellerItemCard = props => {
  return (
    <SellerItemCards>
      <SellerSplitInfo>
      <SellerMainDetails>
        <SellerItemImg src={props.image} alt="Card image" />
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </SellerMainDetails>
      <SellerPriceAndTime>
      <div>
        <p>Starting Bid Price: {props.startingPrice}</p>
        {/* <ul>
          {props.bid.map(bid => (
            <li>
              <p>Bid Price: {bid.bid_amount}</p>
              <span>Bidder: {bid.buyer}</span>
            </li>
          ))}
        </ul> */}
      </div>
      <div>
        Time remaining to bid:
        {/* <Timer bidDeadline={props.bidDeadline} /> */}
      </div>
      </SellerPriceAndTime>
      </SellerSplitInfo>
      <div>
        <SellerButtons onClick={props.edit}>Edit</SellerButtons>
        <SellerButtons onClick={props.delete}>Delete</SellerButtons>
      </div>
    </SellerItemCards>
  );
};

export default SellerItemCard;
