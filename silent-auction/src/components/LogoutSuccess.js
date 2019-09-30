import React, { useEffect } from "react";
import styled from "styled-components";
import image from "../images/WavingBye.jpg"

const SignOutContainer = styled.div`
    margin: 10% 0 5% 0;
    text-align: center;
`;

const ByeImg = styled.img`
    width: 20%;
`;

const LogOutHeader = styled.h1`
  width: 60%;
  text-align: center;
  font-size: 2rem;
  margin: 5% 0 0 20%;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 0 grey;
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  padding: 2% 0;
`;

const BackToRegisterButton = styled.button`
    width: 250px;
    padding: 2% 0;
    margin-top: 5%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
    font-size: 1rem;
    :hover {
        color: white;
        background-color: dodgerblue;
    }
`;

const LogoutSuccess = (props) => {

    useEffect(() => {
        localStorage.removeItem("token");
    })

    const submitHandle = () => {
        props.history.push("/register/")
    }

    return(
        <SignOutContainer>
            <ByeImg src={image}></ByeImg>
        <LogOutHeader>Logout Success!</LogOutHeader>
        <form onSubmit={submitHandle}>
            <BackToRegisterButton type="submit">Back to Register</BackToRegisterButton>
        </form>
        </SignOutContainer>
    )
}

export default LogoutSuccess;