import React from "react";

const ItemCard = props => {
  return (
    <div>
      <img className="card-image" src={props.image} alt="Card image" />
      <div>
        <h4 className="card-title">{props.title}</h4>
        <a href="#" className="card-btn">
          Details
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
