import React, { useState, useEffect } from "react";
import axios from "axios";


import ItemCard from "./ItemCard";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


const ListHeader = styled.div`
  text-align: center;
  border-top: 1px solid #66b3ff;
  border-bottom: 1px solid #66b3ff;
  margin: 3% 2%;
  background-color: #eff4ff;
`;
const HeaderTitle = styled.h1`
  margin-top: 4%;
`;
const SeachContainer = styled.div`
width: 400px;
border-top: 1px solid #66b3ff;
border-right: 1px solid #66b3ff;
border-left: 1px solid #66b3ff;
padding: 2% 0 1% 0;
margin-left: 30%;
`;
const SearchInput = styled.input`
    margin-bottom: 2%;
    margin-left: 3%;
    width: 150px;
    padding: 3%;
    border: 1px solid #66b3ff;
    border-radius: 3px;
`;
const Items = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 20px 1rem;
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
    axios
      .get(`https://bw-silent-auction.herokuapp.com/api/products`)
      .then(res => {
        console.log(res.data)
        const fullItemList = res.data;
        const filteredItemList = fullItemList.filter(item => item.title.toLowerCase().includes(searchTerm))
        setItemList(filteredItemList)
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  return (
    <section>
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
      {itemList
        ? itemList.map(item => (
            <ItemCard
              image={item.image}
              title={item.title}
              onDetailClicked={() => auctionItemDetailHandler(item.id)}
            />
          ))
        : null}
        </Items>
    </section>
  );
};

export default AuctionItemList;
