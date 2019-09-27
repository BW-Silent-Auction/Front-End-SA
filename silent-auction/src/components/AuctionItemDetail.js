import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import Countdown from 'react-countdown-now';
import image from "../images/BidLogo.png"


const ItemDetails = styled.div`
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
  display: flex;
`;
const MainDetails = styled.div`
  width: 50%;
  border-right: 1px solid black;
  padding: 5%;
  margin-right: 6%;
`;
const ItemImg = styled.img`
  max-width: 300px;
  height: auto;
`;
const Price = styled.p`
  font-size: 1.2rem;
  color: #4760cd;
  font-weight: bold;
`;
const PlaceBidButton = styled.button`
    width: 200px;
    padding: 4% 0;
    margin: 10px 0 10px 16%;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
    font-size: .9rem;
`;
const GoBackButton = styled.button`
  width: 150px;
  background-color: lightgrey;
  padding: 4% 0;
  margin: 10px 0 10px 23%;
  border-radius: 3px;
  font-weight: bold;
`;
const PriceAndTime = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Timer = styled.h4`
  color: red;
  font-size: 1.5rem;
`;
const TimeRemain = styled.h3`
  fonst-size: 1rem;
`;
const StartBid = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
  `;
  const ULBids = styled.ul`
    padding-left: 0;
  `;
  const BidderList = styled.li`
  list-style: none;
  &:first-child {
    font-size: 2rem;
  }
  `;
  const BidLogo = styled.img`
    height: 200px;
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
  // const [bids, setBids] = useState({});
  console.log(itemDetail)

  const clickedHandler = () => {
    props.history.push(`/products/${props.match.params.id}/bid`);
    console.log("clicked")
  };

  const handleGoBack = () => {
    props.history.push(`/auction-item-list/`);
  }
  console.log(props);
  useEffect(() => {
    console.log(itemDetail);
    // console.log(props);
    axiosWithAuth()
      .get(`/api/products/${props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        setItemDetail(res.data)
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  // useEffect(() => {
  //   console.log(props);
  //   axios
  //     .get(`https://bw-silent-auction.herokuapp.com/api/products/${props.match.params.id}/bids`)
  //     .then(res => {
  //       console.log(res.data)
  //       // setBids(res.data)
  //     })
  //     .catch(err => console.log(err));
  // }, [props.match.params.id]);


  return (
    <div>
      
      <ItemDetails>
        <SplitInfo className='detail-separation'>
          <MainDetails>
            <ItemImg src={itemDetail.image} alt="image" />
            <div>
              <h4>Item Title: {itemDetail.title}</h4>
              <p><strong>Description: </strong>{itemDetail.description}</p>
                <PlaceBidButton onClick={clickedHandler}>Place a Bid</PlaceBidButton>
                <GoBackButton onClick={handleGoBack}>Back to List</GoBackButton>
            </div>
          </MainDetails>
          <PriceAndTime>
            <div>
            <StartBid>Starting Price: </StartBid>
            <Price>${itemDetail.starting_price}</Price>
              <ULBids>
                {itemDetail && itemDetail.bids && itemDetail.bids.length !== 0 ? itemDetail.bids.sort(( a , b ) => {return parseInt(b.bid_amount) - parseInt(a.bid_amount)}   ).map(bid => (
                  <BidderList>
                    <BidderPrice>Bid Price: <NewPrice>${bid.bid_amount}</NewPrice></BidderPrice>
                    <span>Bidder: {bid.buyer_username}</span>
                  </BidderList>
                ))  : <p>No current bids</p>}
              </ULBids>
            </div>
            <div>
              <TimeRemain>Time Remaining to Bid:</TimeRemain>
              <Timer>
              <FaClock/>&nbsp;&nbsp;<Countdown date={Date.now() + (itemDetail.duration * 24 * 3600000)} />
              </Timer>
              {/* <Timer bidDeadline={itemDetail.bidDeadline} /> */}
            </div>
          </PriceAndTime>
        </SplitInfo>
      </ItemDetails>

      <BidLogo src={image}/>


    </div>
  );
};

export default AuctionItemDetail;
