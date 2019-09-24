import React, { useState, useEffect } from "react";
import axios from "axios";

import AuctionItemCard from "./AuctionItemCard";

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
            <AuctionItemCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        : null}
    </section>
  );
};

export default AuctionItemList;
