import React, { useState } from "react";
import styled from "styled-components";

import { FaTag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
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
const UploadFieldSet = styled.fieldset`
    color: none;
`;
const UploadTitle = styled.legend`
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
const NewItemButton = styled.button`
    width: 350px;
    padding: 2% 0;
    margin-top: 2%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
`;


const SellerForm = props => {
  const [item, setItem] = useState({});

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <SellerFormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <UploadFieldSet>
            <UploadTitle>Add New Item</UploadTitle>
                <div className="input-file">
                    <label>
                        <FaFileImage />
                        <Inputs
                        id="item-img"
                        type="file"
                        name="myFile"
                        value={item.image}
                        onChange={e => handleChange(e)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaTag />
                        <Inputs
                        id="itemnam"
                        type="text"
                        name="itemname"
                        placeholder="Enter Item Name"
                        required
                        value= {item.name}
                        onChange={e => handleChange(e)}
                        />
                    </label>
                </div>
                    <label>
                    <FaDollarSign />
                    <Inputs
                        id="price"
                        type="number"
                        name="price"
                        min="0.00"
                        max="10000.00"
                        step="any"
                        placeholder="Enter Starting Price"
                        required
                        value={item.price}
                        onChange={e => handleChange(e)}
                    />
                    </label>
                <div>
                    <label>
                        <FaPenFancy />
                        <ItemDescription
                        id="description"
                        name="description"
                        rows="15"
                        cols="30"
                        placeholder="Add Item Description"
                        value={item.description}
                        onChange={e => handleChange(e)}
                        />
                    </label>
                </div>
                <NewItemButton type="submit">Upload New Item</NewItemButton>
            </UploadFieldSet>
      </form>
    </SellerFormContainer>
  );
};
export default SellerForm;
//
