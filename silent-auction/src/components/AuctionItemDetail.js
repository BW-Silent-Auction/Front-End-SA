import React, { useState, useEffect } from "react";
import axios from "axios";

const AuctionItemDetail = props => {
  const [itemDetail, setItemDetail] = useState({});

  const clickedHandler = () => {
    props.history.push(`/products/id/bid`);
  };

  useEffect(() => {
    axios
      .get(`https://api.silentauction.com/products/id`)
      .then(res => setItemDetail(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <section>
      <div>
        <img src={itemDetail.image} alt="image" />
        <div>
          <h4>{itemDetail.title}</h4>
          <p>{itemDetail.description}</p>
        </div>
      </div>
      <div>
        <p>Starting Price: {itemDetail.startingPrice}</p>
        <ul>
          {itemDetail.bid.map(bid => (
            <li>
              <p>Bid Price: {bid.bid_amount}</p>
              <span>Bidder: {bid.buyer}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        Time Remaining to Bid:
        <Timer bidDeadline={itemDetail.bidDeadline} />
      </div>
      <div>
        <button onClick={clickedHandler}>Place a bid</button>
      </div>
    </section>
  );
};

export default AuctionItemDetail;
