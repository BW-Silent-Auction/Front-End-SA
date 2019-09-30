import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';


import ItemCard from "./ItemCard";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


const ItemListSection = styled.section`
  margin-top: 5%;
`;

const ListHeader = styled.div`
  text-align: center;
  /* border-bottom: 1px solid #66b3ff; */
`;

const HeaderTitle = styled.h1`
  /* margin-top: 0px; */
  padding: 5px;
  border-radius: 10px;
  /* background-color: white; */
`;

const SeachContainer = styled.div`
  width: 300px;
  box-shadow: 3px 5px 20px darkgrey;
  border: .5px solid lightgrey;
  border-radius: 10px;
  padding: 2% 0 1.5% 0;
  margin: 10px auto 0 auto;
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
`;

const SearchInput = styled.input`
  margin: 10px auto 15px auto;
  margin-left: 5px;
  width: 200px;
  padding: 3%;
  border: 1px solid #66b3ff;
  border-radius: 3px;
`;

const Items = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 5%;
  margin-top: 2%;
`;

const AuctionItemList = props => {
  const [itemList, setItemList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const auctionItemDetailHandler = id => {
    props.history.push(`/products/${id}`);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/products`)
      .then(res => {
        console.log(res.data)
        const fullItemList = res.data;
        const filteredItemList = fullItemList.filter(item => item.title.toLowerCase().includes(searchTerm))
        setItemList(filteredItemList)
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  return (
    <ItemListSection>
      <ListHeader className='list-header'>
        <HeaderTitle>What Are You Looking For?</HeaderTitle>
        
        <SeachContainer className="Search">
          <label>
            <FaSearch/>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          </label>
        </SeachContainer>
     </ListHeader>
      <Items>
        {console.log(itemList)}
      {itemList
        ? itemList.map(item => (
            <ItemCard
              key={item.id}
              image={item.image}
              title={item.title}
              starting_price={item.starting_price}
              onDetailClicked={() => auctionItemDetailHandler(item.id)}
            />
          ))
        : null}
        </Items>
    </ItemListSection>
  );
};

export default AuctionItemList;
