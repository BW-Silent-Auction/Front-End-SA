import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


const FormContainer = styled.div`
    width: 460px;
    margin: auto 100px;
    padding: 5%;
    border: 1px solid black;
    background-color: white;
    box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    text-align: center;
    border-radius: 10px;
`;
const SignInTitle = styled.legend`
    font-size: 1.5rem;
`;
const Input = styled.input`
    margin-top: 3%;
    width: 333px;
    padding: 2% 0;
`;
const Button = styled.button`
    width: 350px;
    padding: 3% 0;
    margin-top: 2.5%;
    background-color: #66b3ff;
    color: black;
    border-radius: 3px;
    font-weight: bold;
`;
const SignInFieldSet = styled.fieldset`
    border: none;
`;


const SignInForm = props => {
  const [signIn, setSignIn] = useState({
    username: '', 
    password: ''
  });

  const handleChange = e => {
    // console.log(signIn);
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(signIn)
    e.preventDefault();
    axios
    .post(`https://bw-silent-auction.herokuapp.com/api/sellers/login`, signIn)
    .then(res => {      
      console.log(res, "buyer login call made");
      localStorage.setItem('token', res.data);
      props.history.push('/auction-item-list');
      // if (!res.data) {
      //   axios
      //   .post(`https://bw-silent-auction.herokuapp.com/api/sellers/login`, signIn)
      //   .then(res => {      
      //     console.log(res.data, "seller login call made");
      //     localStorage.setItem('token', res.data);
      //     props.history.push('/seller-item-list');
      //   })
      // }
    })
    .catch(err => console.log(err));
  };
  
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <SignInFieldSet>
          <SignInTitle htmlFor="title">Sign In</SignInTitle>
          <div className="input-container">
            <label>
              <FaUser />
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
                value={signIn.username}
                onChange={e => handleChange(e)}
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              <FaKey />
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                minlength="8"
                required
                value={signIn.password}
                onChange={e => handleChange(e)}
              />
            </label>
          </div>
          <Button type="submit">Sign In</Button>
        </SignInFieldSet>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
