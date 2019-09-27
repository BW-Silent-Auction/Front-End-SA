import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';


import ItemCard from "./ItemCard";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";


const ItemListSection = styled.section`
  margin-top: 10%;
 
`;

const ListHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid #66b3ff;
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
margin: 10px auto 0 auto;
background-color: #eff4ff;
`;

const SearchInput = styled.input`
    margin: 10px auto 15px auto;
    width: 150px;
    padding: 3%;
    border: 1px solid #66b3ff;
    border-radius: 3px;
`;

const Items = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 5%;
  
`;



const AuctionItemList = props => {
  const [itemList, setItemList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [itemDetail, setItemDetail] = useState({});

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

  // useEffect(() => {
  //   console.log(itemDetail);
  //   // console.log(props);
  //   axiosWithAuth()
  //     .get(`/api/products/${props.match.params.id}`)
  //     .then(res => {
  //       console.log(res.data)
  //       setItemDetail(res.data)
  //     })
  //     .catch(err => console.log(err));
  // }, [props.match.params.id]);

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
