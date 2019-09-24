import React, { useState, useEffect } from "react";
import axios from "axios";

import ItemCard from "./ItemCard";

const AuctionItemList = props => {
  const [itemList, setItemList] = useState([]);

  const auctionItemDetailHandler = id => {
    props.history.push(`/products/${id}`);
  };

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
            <ItemCard
              image={item.image}
              title={item.title}
              onDetailClicked={() => auctionItemDetailHandler(item.id)}
            />
          ))
        : null}
    </section>
  );
};

export default AuctionItemList;
