import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

import { FaDollarSign } from "react-icons/fa";


const BidderContainer = styled.div`
    width: 460px;
    margin: auto;
    margin-top: 5%;
    padding: 5%;
    border: 1px solid black;
    background-color: white;
    box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px;
`;
const BidFieldSet = styled.fieldset`
     border: none;
`;

const NewBidTitle = styled.legend`
    font-size: 1.5rem;
`;

const PriceInput = styled.input`
    padding: 4% 0;
    width: 250px;
    border: 1px solid black;
    margin: 4% 0;
    border-radius: 3px;
`;

const CancelButton = styled.button`
    width: 120px;
    padding: 4% 0;
    margin-top: 2%;
    border-radius: 3px;
    margin-left: 1%;
    background-color: grey;
    color: white;
`;
const ConfirmButton = styled.button`
    width: 120px;
    padding: 4% 0;
    margin-top: 2%;
    border-radius: 3px;
    margin-left: 1%;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
`;

const BidderForm = props => {
    const [price, setPrice] = useState({
      buyer_id: 1,
      bid_amount: ''
    });

    const handleChange = e => {
        setPrice({ ...price, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        console.log(price)
        // axiosWithAuth()
        axios
        .post(`https://bw-silent-auction.herokuapp.com/api/products/1/bids`, price)
        .then(res => {
          console.log(res);
          setPrice({ bid_amount: res.data })
        })
        .catch(err => console.log(err));
      };

  return (
    <BidderContainer>
      <form onSubmit={handleSubmit}>
        <BidFieldSet>
          <NewBidTitle>Enter Your Bid Price</NewBidTitle>
          <hr />
          <label>
            <FaDollarSign />
            <PriceInput
              type="number"
              name="bid_amount"
              id="newbid"
              min="0.01"
              step="0.01"
              max="100000"
              placeholder="0.00"
              required
              value={price.bid_amount}
              onChange={e => handleChange(e)}
            />
          </label>
          <hr />
          <CancelButton type="reset" value="reset" onChange={e => handleChange(e)}>
            Cancel
          </CancelButton>
          <ConfirmButton type="submit" value="submit" onChange={e => handleChange(e)}>
            Confirm
          </ConfirmButton>
        </BidFieldSet>
      </form>
    </BidderContainer>
  );
};

export default BidderForm;
