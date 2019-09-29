import React from "react";
import styled from "styled-components";


const UploadSuccessContainer = styled.div`
    margin: 15% 0 5% 0;
    text-align: center;
`;

const UploadSuccessHeader = styled.h1`
    width: 60%;
    text-align: center;
    font-size: 2rem;
    margin: 4% 0 0 20%;
    box-shadow: 0px 1px 10px 0 grey;
    border: 1px solid white;
    padding: 2% 0;
`;

const BackToProfileButton = styled.button`
    width: 250px;
    padding: 2% 0;
    margin-top: 5%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
    font-size: 1rem;
`;


const UploadItemSuccess = (props) => {

    const submitHandle = () => {
        props.history.push("/seller-item-list/")
    }

    return(
        <UploadSuccessContainer>
        <UploadSuccessHeader>Item successfully added!</UploadSuccessHeader>
        <form onSubmit={submitHandle}>
            <BackToProfileButton type="submit">Back to Profile</BackToProfileButton>
        </form>
        </UploadSuccessContainer>
    )
}

export default UploadItemSuccess;