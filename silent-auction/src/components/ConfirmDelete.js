import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const DeleteContainer = styled.div`
  margin: 10% 0 5% 0;
  text-align: center;
`;

const DeleteHeader = styled.h1`
  width: 60%;
  text-align: center;
  font-size: 2rem;
  margin: 4% 0 0 20%;
  box-shadow: 0px 1px 10px 0 grey;
  border: 1px solid white;
  padding: 2% 0;
`;

const GoBackButton = styled.button`
  width: 200px;
  padding: 1% 0;
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 3px;
  background-color: #eff4ff;
  color: black;
  font-weight: bold;
  font-size: 1rem;
`;
const DeleteButton = styled.button`
  width: 200px;
  padding: 1% 0;
  margin-top: 5%;
  border-radius: 3px;
  background-color: #66b3ff;
  color: black;
  font-weight: bold;
  font-size: 1rem;
`;

const ConfirmDelete = props => {
  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/products/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        props.history.push("/seller-item-list/");
      })
      .catch(err => console.log(err));
  };

  const handleCancel = () => {
    props.history.push("/seller-item-list/");
  };

  return (
    <DeleteContainer>
      <DeleteHeader>Are you sure you want to delete?</DeleteHeader>
      <DeleteButton type="submit" onClick={handleDelete}>
        Delete
      </DeleteButton>
      <GoBackButton onClick={handleCancel}>Go Back</GoBackButton>
    </DeleteContainer>
  );
};

export default ConfirmDelete;
