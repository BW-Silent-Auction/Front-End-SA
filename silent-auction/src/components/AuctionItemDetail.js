import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { FaClock } from "react-icons/fa";

const ItemDetails = styled.div`
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
const SplitInfo = styled.div`
  display: flex;
`;
const MainDetails = styled.div`

  border: 1px solid black;
  padding: 5%;
  margin-right: 6%;
`;
const ItemImg = styled.img`
  max-width: 300px;
  height: auto;
`;
const PlaceBidButton = styled.button`
    width: 200px;
    padding: 4% 0;
    margin: 10px auto 10px auto;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
`;
const PriceAndTime = styled.div`
  text-align: center;
`;

const AuctionItemDetail = props => {
  const [itemDetail, setItemDetail] = useState({});

  const clickedHandler = () => {
    props.history.push(`/products/:id/bid`);
    console.log("clicked")
  };

  useEffect(() => {
    console.log(props);
    axios
      .get(`https://bw-silent-auction.herokuapp.com/api/products/:id`)
      .then(res => {
        console.log(res.data)
        setItemDetail(res.data)
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <div>
    <ItemDetails>
      <SplitInfo className='detail-separation'>
      <MainDetails>
        <ItemImg src={itemDetail.image} alt="image" />
        <div>
          <h4>Item Title: {itemDetail.title}</h4>
          <p><strong>Description: </strong>{itemDetail.description}</p>
          <PlaceBidButton onClick={clickedHandler}>Place a bid</PlaceBidButton>
        </div>
      </MainDetails>
      <PriceAndTime>
        <h3>Starting Price: </h3>
        <p>${itemDetail.starting_price}</p>
        <ul>
          {/* {itemDetail ? itemDetail.bid.map(bid => (
            <li>
              <p>Bid Price: {bid.bid_amount}</p>
              <span>Bidder: {bid.buyer}</span>
            </li>
          )) : null} */}
        </ul>
        <h3>Time Remaining to Bid:</h3>
        <p><FaClock/></p>
        {/* <Timer bidDeadline={itemDetail.bidDeadline} /> */}
      </PriceAndTime>
      {/* <div>
       
      </div> */}
      </SplitInfo>

      {/* <div>
       
      </div>  */}
    </ItemDetails>
    </div>
  );
};

export default AuctionItemDetail;
