import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from '../utils/axiosWithAuth';

import SellerItemCard from "./SellerItemCard";


const SellerItemList = props => {
  const [sellerItemList, setSellerItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bw-silent-auction.herokuapp.com/api/sellers/1/auctions`)
      .then(res => setSellerItemList(res.data))
      .catch(err => console.log(err));
  }, []);

  const editHandler = () => {
    console.log(`edit`);
  };

  const deleteHandler = () => {
    console.log(`delete`);
  };

  return (
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
              edit={editHandler}
              delete={deleteHandler}
            />
          ))
        : null}
    </section>
  );
};

export default SellerItemList;
