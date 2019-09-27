import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import ConfirmDelete from "./ConfirmDelete";
import Countdown from "react-countdown-now";

const SellerItemCards = styled.div`
  background: #eff4ff;
  color: black;
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  padding: 2%;
  margin: auto;
  margin-top: 5%;
  box-shadow: -11px 8px 10px grey;
  border-radius: 5px;
`;
const SellerSplitInfo = styled.div`
  display: flex;
`;
const SellerMainDetails = styled.div`
  border-right: 1px solid black;
  padding: 5%;
  margin-right: 6%;
`;
const SellerItemImg = styled.img`
  max-width: 300px;
  height: auto;
`;
const Strong = styled.strong`
  color: red;
`;

const Timer = styled.h4`
  color: red;
  font-size: 1.5rem;
`;

const SellerButtons = styled.button`
  width: 120px;
  padding: 2% 0;
  margin: 1% 3% 1% 5%
  background-color: #66b3ff;
  color: black;
  border-radius: 3px;
  font-weight: bold;
  font-size: .9rem;
`;
const DeleteButton = styled.button`
  width: 120px;
  padding: 2% 0;
  margin-left: 2%;
  background-color: lightgrey;
  color: black;
  border-radius: 3px;
  // font-weight: bold;
  font-size: 0.9rem;
`;
const TimeRemain = styled.h3`
  fonst-size: 1rem;
`;
const StartBid = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2;
`;
const SellerPriceAndTime = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SellerItemCard = props => {
  return (
    <>
      {/* {console.log(props)} */}
      <Route
        path={`/product/${props.id}/delete`}
        render={() => <ConfirmDelete id={props.id} />}
      ></Route>
      <SellerItemCards>
        <SellerSplitInfo>
          <SellerMainDetails>
            <SellerItemImg src={props.image} alt="Card image" />
            {/* {console.log(props.image)} */}
            <div>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
            </div>
          </SellerMainDetails>
          <SellerPriceAndTime>
            <div>
              <StartBid>
                Starting Bid Price: <Strong>${props.startingPrice}</Strong>
              </StartBid>
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
              <TimeRemain>Time remaining to bid:</TimeRemain>
              {/* {console.log(props.duration)} */}
              <Timer>
                <FaClock />
                &nbsp;&nbsp;
                <Countdown
                  date={
                    new Date(props.created).getTime() +
                    props.duration * 24 * 3600000
                  }
                />
              </Timer>
            </div>
          </SellerPriceAndTime>
        </SellerSplitInfo>
        <div>
          <SellerButtons onClick={props.edit}>Edit</SellerButtons>
          <Link to={`/products/${props.id}/delete`}>
            <DeleteButton>Delete</DeleteButton>
          </Link>
        </div>
      </SellerItemCards>
    </>
  );
};

export default SellerItemCard;
