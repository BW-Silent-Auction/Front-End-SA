import React, { useState, useEffect } from "react";
import axios from "axios";

const AuctionItemDetail = props => {
  const [itemDetail, setItemDetail] = useState({});

  const clickedHandler = () => {
    props.history.push(`/products/1/bid`);
    console.log("clicked")
  };

  useEffect(() => {
    console.log(props);
    axios
      .get(`https://bw-silent-auction.herokuapp.com/api/products/10`)
      .then(res => {
        console.log(res.data)
        setItemDetail(res.data)
      })
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
        <p>Starting Price: {itemDetail.starting_price}</p>
        <ul>
          {/* {itemDetail ? itemDetail.bid.map(bid => (
            <li>
              <p>Bid Price: {bid.bid_amount}</p>
              <span>Bidder: {bid.buyer}</span>
            </li>
          )) : null} */}
        </ul>
      </div>

      <div>
        Time Remaining to Bid:
        {/* <Timer bidDeadline={itemDetail.bidDeadline} /> */}
      </div>
      <div>
        <button onClick={clickedHandler}>Place a bid</button>
      </div>
    </section>
  );
};

export default AuctionItemDetail;
