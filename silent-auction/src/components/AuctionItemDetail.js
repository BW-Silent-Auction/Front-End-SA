import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        <img src={itemDetail.image} alt="Card image" />
        <div>
          <h4>{itemDetail.title}</h4>
          <p>{itemDetail.description}</p>
        </div>
      </div>
      <div>
        <p>Starting Price: {itemDetail.startingPrice}</p>
        <p>Highest Price: {itemDetail.highestPrice}</p>
        <span>Highest Bidder: {itemDetail.hightestBidder}</span>
      </div>
      <div>
        <button>Place a bid</button>
      </div>

      <div>
        Time Remaining to Bid:
        <Timer bidDeadline={itemDetail.bidDeadline} />
      </div>
    </section>
  );
};

export default AuctionItemDetail;
