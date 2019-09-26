import React from "react";
import styled from "styled-components";

const ItemCards = styled.div`
  background: #eff4ff;
  height: auto;
  border-radius: 4px;
  box-shadow: -14px 12px 14px 0px rgb(52, 28, 9), 0 15px 12px rgba(0, 0, 0, 0.22);
  text-align: center;
  border: .5px dotted #341C09;
`;

const CardImg = styled.img`
    width: 250px;
    max-height: 400px;
    margin: 5%;
`;
const Strong = styled.strong`
font-size:1rem;
color: red;
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
      {/* {console.log(props)} */}
      <CardImg className="card-image" src={props.image} alt="Card" />
      <div>
        <h4 className="card-title">{props.title}</h4>
        <h5 className="card-title">Starting Price: <Strong>${props.starting_price}</Strong></h5>
        <DetailsButton onClick={props.onDetailClicked}>Details</DetailsButton>
      </div>
    </ItemCards>
  );
};

export default ItemCard;
