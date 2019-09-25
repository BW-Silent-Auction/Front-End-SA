import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from '../utils/axiosWithAuth';

import SellerItemCard from "./SellerItemCard";
import SellerUploadForm from './Forms/SellerUploadForm'


const SellerItemList = props => {
  console.log(props)
  const [sellerItemList, setSellerItemList] = useState([]);

const id = localStorage.getItem('id');

const [editItem, setEditItem] = useState({});

const [edit, setEdit] = useState(false)

//username: seller6, id: 12

  useEffect(() => {
    console.log(id);
    axios
      .get(`https://bw-silent-auction.herokuapp.com/api/sellers/${id}/auctions`)
      .then(res => {
        console.log(res);
        setSellerItemList(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  const editHandler = (id) => {
    console.log(`edit`);
    const itemToEdit = sellerItemList.find(element => element.id === id);
    console.log(itemToEdit);
    setEditItem(itemToEdit);
    setEdit(true);
  };

  console.log(Object.keys(editItem).length === 0);

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
              image={item.image}
              title={item.title}
              description={item.description}
              startingPrice={item.starting_price}
              edit={() => editHandler(item.id)}
              delete={() => deleteHandler(item.id)}
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
      Eid={editItem.id}
      edit={edit} /> : <SellerUploadForm {...props} edit={edit}/>}
    </section>
    </>
  );
};

export default SellerItemList;
