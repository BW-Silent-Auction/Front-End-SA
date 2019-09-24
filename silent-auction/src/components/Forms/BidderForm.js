import React from "react";
import styled from "styled-components";

import { FaDollarSign } from "react-icons/fa";


const BidderContainer = styled.div`
   width: 460px;
  margin: auto 100px;
  padding: 5%;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
  font-size: .8rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  text-align: center;
  border-radius: 10px;
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
  background-color: lightblue;
  color: black;
  font-weight: bold;
`;

const BidderForm = props => {
  return (
    <BidderContainer>
      <form>
        <h1>Enter Your Bid Price</h1>
        <hr></hr>
        <FaDollarSign/><PriceInput type='number' name='currency-field' id='currency-field' min="0.01" step="0.01" max="100000" placeholder='0.00'></PriceInput>
        <hr></hr>
        <CancelButton type="reset" value="reset">Cancel</CancelButton>
        <ConfirmButton type="submit" value="submit">Confirm</ConfirmButton>
      </form>
    </BidderContainer>
  );
};

export default BidderForm;
