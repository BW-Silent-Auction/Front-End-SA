import React, { useState, useEffect } from "react";
import axios from "axios";

const SellerItemDetail = props => {
  const [sellerItemDetail, setSellerItemDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.silentauction.com/sellers/id/products/id`)
      .then(res => setSellerItemDetail(res.data))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  return (
    <section>
      <div>
        <img src={sellerItemDetail.image} alt="Card image" />
        <div>
          <h4>{sellerItemDetail.title}</h4>
          <p>{sellerItemDetail.description}</p>
        </div>
      </div>
      <div>
        <p>Starting Bid Price: {sellerItemDetail.startingPrice}</p>
        <p>Current Highest Bid: {sellerItemDetail.highestPrice}</p>
        <span>Current Highest Bidder{sellerItemDetail.hightestBidder}</span>
      </div>

      <div>
        Time remaining to bid:
        <Timer bidDeadline={sellerItemDetail.bidDeadline} />
      </div>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </section>
  );
};

export default SellerItemDetail;
