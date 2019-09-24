import React from "react";
import styled from "styled-components";
import {FaUser} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaKey} from 'react-icons/fa';

import { connect } from "react-redux";
import { registerBuyer, registerSeller } from "../../actions";

const FormContainer = styled.div`
  width: 460px;
  margin: auto 100px;
  padding: 5%;
  border: solid black;
  background-color: white;
  box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
  font-size: .8rem;
`;
const RegisterTitle = styled.label`
    text-align: center;
    font-size: 1.5rem;
`;
const RegisterInput = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 const Input = styled.input`
  margin-top: 1%;
  width: 350px;
  padding: 2% 0;
 `;

 const Button = styled.button`
  width: 350px;
  padding: 1.2% 0;
  margin-top: 2%;
 `;

function RegisterForm({ registerBuyer, registerSeller }) {

  const handleSubmit = (usertype, e) => {
    e.preventDefault();
    // if (usertype === "seller") {
      console.log("seller activated")
      // registerSeller()
    // } else {
    //   console.log("buyer activated")
    //   // registerBuyer()
    // }
  };

  return (
    <div className="register-box">
      <FormContainer>
      <RegisterTitle htmlFor="title">Sign In</RegisterTitle>
        <form onSubmit={handleSubmit}>
          <RegisterInput>
            <Input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="First Name"
            />
            <Input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
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
            <FaEnvelope/>
            <Input 
              id="email" 
              type="email" 
              name="email" 
              placeholder="Email" />
            </div>
            <div className='input-container'>
            <FaKey/>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
            </div>
            <h2>Please Select User Type:</h2>
            <label> 
              <input 
                id="seller" 
                type="checkbox" 
                name="usertype"
                value="seller" /> 
            Seller
            </label> 
            <label>
              <input 
                id="buyer" 
                type="checkbox" 
                name="usertype"
                value="buyer" /> 
              Buyer 
            </label>
            <Button type="submit" value="Submit">Sign Up</Button>
          </RegisterInput>
        </form>
      </FormContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { registerBuyer, registerSeller }
)(RegisterForm);

