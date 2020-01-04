import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const FormContainer = styled.div`
  width: 460px;
  margin: 15% auto 10% auto;
  padding: 5%;
  border: 1px solid black;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`;

const SignInTitle = styled.legend`
  font-size: 2rem;
  margin-bottom: 5%;
`;

const Input = styled.input`
  margin-top: 3%;
  width: 333px;
  padding: 4% 0;
`;

const Button = styled.button`
  width: 350px;
  padding: 4% 0;
  margin-top: 5%;
  background-color: #66b3ff;
  color: black;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1rem;
  :hover {
    color: white;
    background-color: dodgerblue;
  }
`;

const SignInFieldSet = styled.fieldset`
  border: none;
`;

const SignInForm = props => {
  const [signIn, setSignIn] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    // console.log(signIn);
    e.preventDefault();
    axios
      .post(`https://bw-silent-auction.herokuapp.com/api/buyers/login`, signIn)
      .then(res => {
        // console.log(res, "buyer login call made");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("buyer-id", res.data.user.id);
        props.history.push("/auction-item-list");
      })
      .catch(err => console.log(err));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <SignInFieldSet>
          <SignInTitle htmlFor="title">Bidder Sign In</SignInTitle>
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
