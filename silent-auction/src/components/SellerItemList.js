import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import SellerItemCard from "./SellerItemCard";
import SellerUploadForm from "./Forms/SellerUploadForm";
import image from "../images/placeholder_image_logo.png";
import styled from "styled-components";

// const SellerFormContainer = styled.div`
//   margin-top: 15%;
// `;

const SellerProfile = styled.h1`
  width: 60%;
  text-align: center;
  font-size: 2rem;
  margin: 5% 0 0 20%;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 0 grey;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  padding: 2% 0;
  /* position: fixed; */
`;

// const SellerList = styled.div`
//   margin: 2% 0;
// `;

const SellerItemList = props => {
  const [sellerItemList, setSellerItemList] = useState([]);
  const id = localStorage.getItem("seller-id");
  const [editItem, setEditItem] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/sellers/${id}/auctions`)
      .then(res => {
        // console.log(res.data);
        setSellerItemList(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const editHandler = id => {
    const itemToEdit = sellerItemList.find(element => element.id === id);
    setEditItem(itemToEdit);
    setEdit(true);
    // scrollToComponent(Form);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const deleteHandler = id => {
    props.history.push("/confirm-delete/");
  };

  return (
    <>
      <section className="sell-upload-form">
        {edit === true ? (
          <SellerUploadForm
            {...props}
            Edescription={editItem.description}
            EstartingPrice={editItem.starting_price}
            Etitle={editItem.title}
            Eimage={editItem.image}
            Eid={editItem.id}
            Eduration={editItem.duration}
            edit={edit}
          />
        ) : (
          <SellerUploadForm {...props} edit={edit} />
        )}
      </section>
      <section
        className="sell-item-list" /*ref={(section) => { Form = section; }}*/
      >
        <section>
          <SellerProfile>Your Items</SellerProfile>

          {sellerItemList
            ? sellerItemList.map((item, idx) => (
                <SellerItemCard
                  key={idx}
                  image={item.image ? item.image : image}
                  title={item.title}
                  created={item.created_at}
                  description={item.description}
                  startingPrice={item.starting_price}
                  duration={item.duration}
                  edit={() => editHandler(item.id)}
                  delete={() => deleteHandler(item.id)}
                  id={item.id}
                />
              ))
            : null}
        </section>
      </section>
    </>
  );
};

export default SellerItemList;
