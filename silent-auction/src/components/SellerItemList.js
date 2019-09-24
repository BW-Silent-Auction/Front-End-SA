import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

const SellerItemList = () => {
  const [sellerItemList, setSellerItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.silentauction.com/seller/id/products`)
      .then(res => setSellerItemList(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section>
      {sellerItemList
        ? itemList.map(item => (
            <ItemCard image={item.image} title={item.title} />
          ))
        : null}
    </section>
  );
};

export default SellerItemList;
