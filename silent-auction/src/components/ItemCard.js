import React from "react";

const ItemCard = props => {
  return (
    <div>
      <img className="card-image" src={props.image} alt="Card" />
      <div>
        <h4 className="card-title">{props.title}</h4>
        <button onClick={props.onDetailClicked}>Details</button>
      </div>
    </div>
  );
};

export default ItemCard;
