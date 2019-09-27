import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

import { FaTag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa";
import image from '../../images/placeholder_image_logo.png';


const SellerFormContainer = styled.div`
    width: 460px;
    margin: 5% auto 10% auto;
    padding: 5%;
    border: 1px solid black;
    background-color: white;
    box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-radius: 10px;
    text-align: center;
`;
const UploadFieldSet = styled.fieldset`
    border: none;
`;
const UploadTitle = styled.legend`
    font-size: 2rem;
`;
const Inputs = styled.input`
    margin-top: 3%;
    margin-left: 1%;
    width: 325px;
    padding: 4% 0;
`;
const ItemDescription = styled.textarea`
    margin-top: 3%;
    width: 333px;
    padding: 2% 0;
`;
const NewItemButton = styled.button`
    width: 350px;
    padding: 4% 0;
    margin-top: 2%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
    font-size: .9rem;
`;


const SellerForm = props => {
    // console.log(props);

    const id = localStorage.getItem("seller-id")

  const [item, setItem] = useState({
    seller_id: id,
    title: '',
    description: '',
    image: '',
    starting_price: '',
    duration: ''
    });

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
    //  console.log(item);
  };

  const handlePickChange = e => {
    setItem({ ...item, [e.target.name]: e.target.files[0] });
    //  console.log(item);
  }



  useEffect(() => {
      if (props.edit === true) {
        setItem({
            description: props.Edescription,
            starting_price: props.EstartingPrice,
            title: props.Etitle,
            image: props.Eimage,
            duration: props.Eduration
        })
        delete item.seller_id;
        // delete item.duration;
        // console.log(item);
        // console.log(props.Eid)
      }
  }, [props.edit, props.editItem])

//     useEffect(() => {
//       if (props.edit === true && !props.image) {
//         setItem({
//             image: props.Eimage
//         })
//       }
//     //   console.log(image)
//   }, []);

  const handleSubmit = e => {
    // console.log(item);
    e.preventDefault();
    // console.log(props.edit)
    if (props.edit === false) {
        console.log(item)
    const fd = new FormData();
    fd.append("seller_id", item.seller_id)
    fd.append("title", item.title)
    fd.append("description", item.description)
    item.image === '' ? fd.append("image", item.image) : fd.append("image", item.image, item.image.name);
    fd.append("starting_price", item.starting_price)
    fd.append("duration", item.duration)
    axiosWithAuth()
    .post(`/api/products`, fd)
    .then(res => {
        console.log(res);
        console.log("new item posted!")
        props.history.push('/upload-success/');
    })
    .catch(err => console.log(err))
  } else if (props.edit === true) {
    console.log(item)
    // setItem(props.editItem);
    const fd = new FormData();
    console.log(props.Eid)
    // fd.append("seller_id", item.seller_id)
    fd.append("title", item.title)
    fd.append("description", item.description)
    fd.append("image", item.image)
    fd.append("starting_price", item.starting_price)
    fd.append("duration", item.duration)
    axiosWithAuth()
    .put(`/api/products/${props.Eid}`, fd)
    .then(res => {
        console.log(res.data);
        console.log("item edited!!")
        // console.log(props);
        props.history.push('/edit-success/')
    })
    .catch(err => console.log(err))
  }};

  return (
    <SellerFormContainer>
      <form onSubmit={handleSubmit}                         encType="multipart/form-data">
        <UploadFieldSet>
            <UploadTitle>Add/Edit New Item</UploadTitle>
                <div className="input-file">
                    <label>
                        <FaFileImage />
                        <Inputs
                        id="item-img"
                        type="file"
                        name="image"
                        // files={item.image}
                        onChange={handlePickChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <FaTag />
                        <Inputs
                        id="itemnam"
                        type="text"
                        name="title"
                        placeholder="Enter Item Name"
                        required
                        value= {item.title}
                        onChange={e => handleChange(e)}
                        />
                    </label>
                </div>
                    <label>
                    <FaDollarSign />
                    <Inputs
                        id="price"
                        type="number"
                        name="starting_price"
                        min="0.00"
                        max="10000.00"
                        step="any"
                        placeholder="Enter Starting Price"
                        required
                        value={item.starting_price}
                        onChange={e => handleChange(e)}
                    />
                    </label>
                    <label>
                    <Inputs
                        id="duration"
                        type="number"
                        name="duration"
                        // min="0.00"
                        // max="10000.00"
                        step="any"
                        placeholder="Enter Bidding Duration (days)"
                        required
                        value={item.duration}
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
                <NewItemButton type="submit">Submit</NewItemButton>
            </UploadFieldSet>
      </form>
    </SellerFormContainer>
  );
};
export default SellerForm;
//
