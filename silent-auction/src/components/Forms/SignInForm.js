import React from "react";
import {FaUser} from 'react-icons/fa';
import {FaKey} from 'react-icons/fa';
import styled from "styled-components";

const FormContainer = styled.div`
  width: 460px;
  margin: auto 100px;
  padding: 5%;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
  font-size: .8rem;
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const SignInTitle = styled.label`
    text-align: center;
    font-size: 1.5rem;
`;

const Input = styled.input`
margin-top: 1%;
width: 333px;
padding: 2% 0;
`;

const Button = styled.button`
width: 350px;
padding: 1.2% 0;
margin-top: 2%;
background-color: grey;
color: white;
`;

const SignInForm = props => {

  return(
    <FormContainer>
      <SignInTitle htmlFor="title">Sig In</SignInTitle>
      <form>
      <div className='input-container'>
            <FaUser/>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder= 'Username'
            />
            </div>
            <div className='input-container'>
            <FaKey/>
            <Input
              id="password"
              type="text"
              name="password"
              placeholder="password"
            />
            </div>
            <Button type="submit">Sign In</Button>
      </form>
    </FormContainer>
  )
}

export default SignInForm;