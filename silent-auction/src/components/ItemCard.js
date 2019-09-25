import React from "react";
import styled from "styled-components";

const ItemCards = styled.div`
  background: #eff4ff;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  text-align: center;
`;

const CardImg = styled.img`
    width: 250px;
    max-height: 400px;
    margin: 5%;

`;

const DetailsButton = styled.button`
    width: 150px;
    padding: 3% 0;
    margin: 4% 0;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
`;



const ItemCard = props => {
  return (
    <ItemCards>
      <CardImg className="card-image" src={props.image} alt="Card" />
      <div>
        <h4 className="card-title">{props.title}</h4>
        <DetailsButton onClick={props.onDetailClicked}>Details</DetailsButton>
      </div>
    </ItemCards>
  );
};

export default ItemCard;
