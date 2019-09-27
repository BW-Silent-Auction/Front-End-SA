import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import Countdown from 'react-countdown-now';

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
const Price = styled.p`
  font-size: 1.2rem;
  color: red;
  font-weight: bold;
`;
const PlaceBidButton = styled.button`
    width: 200px;
    padding: 4% 0;
    margin-top: 10px auto 10px auto;
    margin-bottom: 10px;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
`;
const PriceAndTime = styled.div`
  // text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
`;

const AuctionItemDetail = props => {
  const [itemDetail, setItemDetail] = useState({});
  const [bidderId, setBidderId] = useState([]);
  const [bidderId2, setBidderId2] = useState([]);


  const bidderNameArray = bidderId.filter((element) => {
      return element.id === bidderId2.find((param) => {
        return param === element.id
      })
  });

  // const bidderName = bidderNameArray.filter((param) => {
  //   console.log(itemDetail.id)
  //   return param.id === itemDetail.id;
  // })

  console.log(bidderNameArray)
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
    console.log(props);
    axiosWithAuth()
      .get(`/api/buyers/`)
      .then(res => {
        console.log(res.data)
        return res.data
      })
      .then(res => {
        return res.map(element => {
          return {id: element.id, username: element.username}
        })
      })
      .then(res => {
        console.log(res)
        setBidderId(res)
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/products/${props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        setItemDetail(res.data)
        return res.data
      })
      .then(res => {
        return res.bids 
      })
      .then(res => {
        console.log(res)
        return res.map(element => {
          return element.buyer_id
        })
      })
      .then(res => {
        console.log(res)
        setBidderId2(res)
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  // const bidderName = bidderNameArray.filter((param) => {
  //   console.log(itemDetail)
  //   return param.id === itemDetail.bids.filter(element => {
  //     return element.buyer_id === param.id
  //   })
  // })

  // console.log(bidderName)

  return (
    <div>
      {console.log(bidderId, bidderId2)}
    <ItemDetails>
      <SplitInfo className='detail-separation'>
      <MainDetails>
        <ItemImg src={itemDetail.image} alt="image" />
        <div>
          <h4>Item Title: {itemDetail.title}</h4>
          <p><strong>Description: </strong>{itemDetail.description}</p>
          <PlaceBidButton onClick={clickedHandler}>Place a bid</PlaceBidButton>
          <PlaceBidButton onClick={handleGoBack}>Go Back</PlaceBidButton>
        </div>
      </MainDetails>
      <PriceAndTime>
        <h3>Starting Price: </h3>
        <Price>${itemDetail.starting_price}</Price>
        <ul>
          {itemDetail && itemDetail.bids && itemDetail.bids.length !== 0 ? itemDetail.bids.map(bid => (
            <li>
              <p>Bid Price: {bid.bid_amount}</p>
              <span>Bidder ID: {itemDetail.id}</span>
            </li>
          )) : <p>No bids</p>}
        </ul>
        <h3>Time Remaining to Bid:</h3>
        <Countdown date={Date.now() + (itemDetail.duration * 24 * 3600000)} />
        <span> </span><FaClock/>
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
