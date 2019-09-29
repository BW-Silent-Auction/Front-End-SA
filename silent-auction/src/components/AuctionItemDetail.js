import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import Countdown from "react-countdown-now";
import image from "../images/BidLogo.png";

const ItemDetails = styled.div`
width: 90%;
background: #eff4ff;
color: black;
width: 60%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
font-size: 1rem;
padding:2%;
margin: auto;
margin-top: 10%;
box-shadow: -11px 8px 10px grey; 
border-radius: 5px;
border: 1px dotted #341C09;
`;
const SplitInfo = styled.div`
width: 90%;
  height: auto;
  display: flex;
`;
const MainDetails = styled.div`
  width: 50%;
  border-right: 1px solid black;
  padding: 5%;
  margin: auto 6% auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
const ItemImg = styled.img`
  max-width: 100%;
  height: auto;
`;
const Price = styled.p`
  font-size: 1.4rem;
  color: #4760cd;
  font-weight: bold;
`;
const PlaceBidButton = styled.button`

    width: 200px;
    padding: 4% 0;
    margin: 10px 0 10px 5%;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
    font-size: 1.1rem;

`;
const GoBackButton = styled.button`
  width: 150px;
  background-color: lightgrey;
  padding: 4% 0;
  margin: 10px 0 10px 5%;
  border-radius: 3px;
  font-weight: bold;
  font-size: .9rem;
`;
const PriceAndTime = styled.div`
margin-left: 4%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
// const ClockContainer = styled.div`
//   border: 1px solid red;
//   width: 200px;
//   display: flex;
//   justify-content: space-between;
// `;
const Timer = styled.h4`
  color: red;
  font-size: 1.5rem;
  width: 100%;
`;
const TimeRemain = styled.h3`
  fonst-size: 1rem;
`;
const StartBid = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  `;
  const ULBids = styled.ul`
    padding-left: 0;

  `;

  const HighestHeader = styled.h2`
  text-align: center;  
  margin-left: 5%;
  `;
const BidderList = styled.li`

  list-style: none;
  &:first-child {
    font-size: 1.2rem;
    line-height: 2rem;
    border: 1px dotted #66b3ff;
    width: 100%;
    height: auto;
    padding: 0 6% 15% 6%;
    text-align: top;
  }

  `;
  const BidLogo = styled.img`
    height: 250px;
    margin: 3% 0 3% 45%;
  `;
  const BidderPrice = styled.p`
    color: black;
    font-weight: bold;
  `;
  const NewPrice = styled.strong`
    color: red;
  `;


const AuctionItemDetail = props => {
  const [itemDetail, setItemDetail] = useState({});
  const [bidderId, setBidderId] = useState([]);
  const [bidderId2, setBidderId2] = useState([]);

  const clickedHandler = () => {
    props.history.push(`/products/${props.match.params.id}/bid`);
    console.log("clicked");
  };

  const handleGoBack = () => {
    props.history.push(`/auction-item-list/`);
  };
  console.log(props);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/products/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setItemDetail(res.data);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <div>
      <ItemDetails>
        <SplitInfo className="detail-separation">
          <MainDetails>
            <ItemImg src={itemDetail.image} alt="image" />
            <div>
              <h4>{itemDetail.title}</h4>
              <p><strong>Description: </strong>{itemDetail.description}</p>
                <PlaceBidButton onClick={clickedHandler}>Place a Bid</PlaceBidButton>
                <GoBackButton onClick={handleGoBack}>Back to List</GoBackButton>

            </div>
          </MainDetails>
          <PriceAndTime>
            <div>
            
              <StartBid>Starting Price: </StartBid>
              <Price>${itemDetail.starting_price}</Price>
              <HighestHeader>Highest Bid</HighestHeader>
              <ULBids>
                {itemDetail &&
                itemDetail.bids &&
                itemDetail.bids.length !== 0 ? (
                  itemDetail.bids
                    .sort((a, b) => {
                      return parseInt(b.bid_amount) - parseInt(a.bid_amount);
                    })
                    .map(bid => (
                      <BidderList>
                        <BidderPrice>
                          Bid Price: <NewPrice>${bid.bid_amount}</NewPrice>
                        </BidderPrice>
                        <span>
                          {console.log(bid.details)}
                          Bidder: {bid.details.username.toUpperCase()}
                        </span>
                      </BidderList>
                    ))
                ) : (
                  <p>No current bids</p>
                )}
              </ULBids>
            </div>
            <div>
              <TimeRemain>Time Remaining to Bid:</TimeRemain>
              <Timer>
                <FaClock />
                &nbsp;&nbsp;
                <Countdown
                  date={
                    new Date(itemDetail.created_at).getTime() +
                    itemDetail.duration * 24 * 3600000
                  }
                />
              </Timer>
            </div>
          </PriceAndTime>
        </SplitInfo>
      </ItemDetails>

      <BidLogo src={image} />
    </div>
  );
};

export default AuctionItemDetail;
