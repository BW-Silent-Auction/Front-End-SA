import React from "react";
import styled from "styled-components";

const ItemCards = styled.div`
  width: 300px;
  background-color: #E4E4E1;
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  height: auto;
  border-radius: 10px;
  box-shadow: 3px 5px 20px darkgrey;
  text-align: center;
  border: .5px solid lightgrey;
  margin: 0 auto;
`;

const CardImg = styled.img`
  width: 250px;
  max-height: 400px;
  margin: 5%;
  border-radius: 3px;
  margin-bottom: 0px;
  margin-top: 23px;

`;

const Strong = styled.strong`
  font-size:1rem;
  color: red;
`;

const DetailsButton = styled.button`
  width: 150px;
  padding: 3% 0;
  margin: 4% 0;
  background-color: white;
  color: black;
  border-radius: 3px;
  font-weight: bold;
  :hover {
    background-color: dodgerblue;
    color: white;
  }
`;

const ItemCard = props => {
  return (
    <ItemCards>
      <CardImg className="card-image" src={props.image} alt="Card" />
      <div>
        <h4 className="card-title">{props.title}</h4>
        <h5 className="card-title">Starting Price: <Strong>${props.starting_price}</Strong></h5>
        <h5></h5>
        <DetailsButton onClick={props.onDetailClicked}>Details</DetailsButton>
      </div>
    </ItemCards>
  );
};

export default ItemCard;
