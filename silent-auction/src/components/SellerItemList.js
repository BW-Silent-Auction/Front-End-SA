import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWithAuth from '../utils/axiosWithAuth';

import SellerItemCard from "./SellerItemCard";
import SellerUploadForm from './Forms/SellerUploadForm'
import image from '../images/placeholder_image_logo.png';


const SellerItemList = props => {
  // console.log(props)
  const [sellerItemList, setSellerItemList] = useState([]);
  const id = localStorage.getItem('id');
  const [editItem, setEditItem] = useState({});
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    // console.log(id);
    axiosWithAuth()
      .get(`/api/sellers/${id}/auctions`)
      .then(res => {
        console.log(res.data);
        setSellerItemList(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  const editHandler = (id) => {
    const itemToEdit = sellerItemList.find(element => element.id === id);
    setEditItem(itemToEdit);
    setEdit(true);
  };

  // console.log(Object.keys(editItem).length === 0);

  const deleteHandler = (id) => {
    console.log(`delete`);
    // props.match.params.id = id;
    props.history.push("/confirm-delete/")
  };

  return (
    <>
    <section className="sell-item-list">
      <section>
      <p>Seller item list page</p>
      {sellerItemList
        ? sellerItemList.map((item, idx) => (
            <SellerItemCard
              key={idx}
              image={item.image ? item.image : image}
              title={item.title}
              description={item.description}
              startingPrice={item.starting_price}
              duration={item.duration}
              edit={() => editHandler(item.id)}
              delete={() => deleteHandler(item.id)}
              id={item.id}
            />
          ))
        : null}
        </section>
    </section>
    <section className="sell-upload-form">
      {edit === true ? <SellerUploadForm 
      {...props} 
      Edescription={editItem.description} 
      EstartingPrice={editItem.starting_price}
      Etitle={editItem.title}
      Eimage={editItem.image}
      // placeholderImage={image}
      Eid={editItem.id}
      Eduration={editItem.duration}
      edit={edit} /> : <SellerUploadForm {...props} edit={edit}/>}
    </section>
    {/* {console.log(editItem)} */}
    </>
  );
};

export default SellerItemList;
