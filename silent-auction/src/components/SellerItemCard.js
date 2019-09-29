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
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  padding: 2%;
  margin: auto;
  margin-top: 5%;
  box-shadow: -11px 8px 10px grey; 
  border-radius: 4px;
  border: .5px dotted #341C09;
  box-sizing: border-box;
`;

const SellerSplitInfo = styled.div`
  height: auto;
  display: flex;
`;

const SellerMainDetails = styled.div`
  width: 50%;
  border-right: 1px solid black;
  padding: 5%;
  margin-right: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const SellerItemImg = styled.img`
  width: 250px;
  height: auto;
  object-fit: contain;
`;

const Strong = styled.strong`
  color: #4760cd;
  font-size: 2rem;
`;

const Timer = styled.h4`
  color: red;
  font-size: 1.5rem;
`;

const SellerButtons = styled.button`
  width: 120px;
  padding: 2.5% 0;
  margin: 1% 3% 1% 5%
  background-color: #66b3ff;
  color: black;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1rem;
`;

const DeleteButton = styled.button`
  width: 106px;
  padding: 5.5% 0;
  margin-top: 1.5%;
  margin-left: 2%;
  background-color: lightgrey;
  color: black;
  border-radius: 3px;
  // font-weight: bold;
  font-size: 1rem;
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
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  alig-items: center;
`;

const EditDeleteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SellerItemCard = props => {
  return (
    <>
    <Route path={`/product/${props.id}/delete`} render={() => <ConfirmDelete id={props.id} />}></Route>
    <SellerItemCards>
      <SellerSplitInfo>
      <SellerMainDetails>
        <SellerItemImg src={props.image} alt="Card image" />
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <EditDeleteContainer>
          <SellerButtons onClick={props.edit}>Edit</SellerButtons>
          <Link to={`/products/${props.id}/delete`} >
            <DeleteButton>Delete</DeleteButton>
          </Link>
      </EditDeleteContainer>
      </SellerMainDetails>
      <SellerPriceAndTime>
      <div>
        <StartBid>Starting Bid Price: <Strong>${props.startingPrice}</Strong></StartBid>
            </div>
            <div>
              <TimeRemain>Time remaining to bid:</TimeRemain>
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
      </SellerItemCards>
    </>
  );
};

export default SellerItemCard;
