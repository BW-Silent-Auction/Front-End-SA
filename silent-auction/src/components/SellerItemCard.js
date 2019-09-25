import React from "react";
import Timer from "./Timer";

const SellerItemCard = props => {
  return (
    <section>
      <div>
        <img src={props.image} alt="Card image" />
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div>
        <p>Starting Bid Price: {props.startingPrice}</p>
        {/* <ul>
          {props.bid.map(bid => (
            <li>
              <p>Bid Price: {bid.bid_amount}</p>
              <span>Bidder: {bid.buyer}</span>
            </li>
          ))}
        </ul> */}
      </div>
      <div>
        Time remaining to bid:
        {/* <Timer bidDeadline={props.bidDeadline} /> */}
      </div>
      <div>
        <button onClick={props.edit}>Edit</button>
        <button onClick={props.delete}>Delete</button>
      </div>
    </section>
  );
};

export default SellerItemCard;
