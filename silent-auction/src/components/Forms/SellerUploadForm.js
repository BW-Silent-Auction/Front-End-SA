import React from "react";
import styled from "styled-components";

import { FaTag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPenFancy} from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";



const SellerFormContainer = styled.div`
  width: 460px;
  margin: auto 100px;
  padding: 5%;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  border-radius: 10px;
  text-align: center;
`;

const UploadTitle = styled.h1`
  font-size: 1.5rem;
`;

const Inputs = styled.input`
margin-top: 3%;
margin-left: 1%;
width: 325px;
padding: 2% 0;
`;

const ItemDescription = styled.textarea`
margin-top: 3%;
width: 333px;
padding: 2% 0;
`;


const SellerForm = props => {
  return (
    <SellerFormContainer>
      <UploadTitle>Add New Item</UploadTitle>
      <form>
        {/* <ItemImage alt="item-image" /> */}
        <div className='input-file'>
          <label><FaFileImage/></label>
          <Inputs id="item-img" type="file" name="myFile" />
        </div>
        <div>
          <FaTag/>
          <Inputs
            id="itemnam"
            type="text"
            name="itemname"
            placeholder="Enter Item Name"
          />
        </div>
        <label><FaDollarSign/></label>
        <Inputs
          id="price"
          type="number"
          name="price"
          min="0.00"
          max="10000.00"
          step="any"
          placeholder='Enter Starting Price'
        />
        <div>
          <label><FaPenFancy/></label>
          <ItemDescription id="description" name="description" rows="15" cols="30" placeholder='Add Item Description' />
        </div>
      </form>
    </SellerFormContainer>
  );
};
export default SellerForm;
