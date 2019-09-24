import React, { useState, useEffect } from "react";
import axios from "axios";

import AuctionItemCard from "./AuctionItemCard";

const AuctionItemDetail = () => {
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.silentauction.com/products/id`)
      .then(res => setItemDetail(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <section>
      <AuctionItemCard
        image={itemDetail.image}
        title={itemDetail.title}
        description={itemDetail.description}
      />
      <div>
        <p>{itemDetail.highestPrice}</p>
        <span>{itemDetail.hightestBidder}</span>
      </div>
      <div>
        <Timer />
      </div>
    </section>
  );
};

export default AuctionItemDetail;
