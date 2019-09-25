import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ItemCard from "./ItemCard";

const SellerItemList = props => {
  const [sellerItemList, setSellerItemList] = useState([]);

  const sellerItemDetailHandler = id => {
    props.history.push(`selled/id/products/${id}`);
  };

  useEffect(() => {
    axios
      .get(`/api/sellers/:id/auctions`)
      .then(res => {
        console.log(res.data)
        setSellerItemList(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section>
      {sellerItemList
        /*? itemList*/.map(item => (
            <ItemCard
              image={item.image}
              title={item.title}
              onDetailClicked={() => sellerItemDetailHandler(item.id)}
            />
          ))
        /*: null*/}
    </section>
  );
};

export default SellerItemList;
