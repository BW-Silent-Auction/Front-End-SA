import React, { useState, useEffect } from "react";
import axios from "axios";

import ItemCard from "./ItemCard";

const AuctionItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.silentauction.com/products`)
      .then(res => setItemList(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section>
      {itemList
        ? itemList.map(item => (
            <ItemCard image={item.image} title={item.title} />
          ))
        : null}
    </section>
  );
};

export default AuctionItemList;
