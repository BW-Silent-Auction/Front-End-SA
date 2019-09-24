import React, { useState } from "react";
import styled from "styled-components";

import {FaUser} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaKey} from 'react-icons/fa';
import {FaFont} from 'react-icons/fa';
import {FaBold} from 'react-icons/fa';


const FormContainer = styled.div`
    width: 460px;
    margin: auto 100px;
    padding: 5%;
    border: 1px solid black;
    background-color: white;
    box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
    font-size: .8rem;
    margin-top: 5%;
    border-radius: 10px;
    text-align: center;
`;
const RegisterFieldSet = styled.fieldset`
    border: none;
`;
const RegisterTitle = styled.legend`
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
 const SubTitle = styled.h2`
    font-size: .9rem;
 `;
 const Checkboxes = styled.div`
 display: flex;
 flex-direction: column;
`;
 const Button = styled.button`
    width: 350px;
    padding: 2% 0;
    margin-top: 2%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
 `;


const RegistrationForm = props => {
  const [register, setRegister] = useState();

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <FormContainer>
        <form onSubmit={e => handleSubmit(e)}>
          <RegisterFieldSet>
          <RegisterTitle htmlFor="title">Register for an Account</RegisterTitle>
            <RegisterInput>
              <div className='input-container'>
                <label>
                  <FaFont/>
                  <Input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={register.first_name}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <div className='input-container'>
                <label>
                  <FaBold/>
                  <Input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={register.last_name}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <div className='input-container'>
                <label>
                  <FaUser/>
                  <Input
                    id="username"
                    type="text"
                    name="username"
                    placeholder='Username'
                    required
                    value={register.username}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <div className='input-container'>
                <label>
                  <FaEnvelope/>
                  <Input 
                  id="email" 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="user@example.com"
                  value={register.email}
                  onChange={e => handleChange(e)} 
                  />
                </label>
              </div>
              <div className='input-container'>
                <label>
                  <FaKey/>
                  <Input
                    id="pass"
                    type="text"
                    name="password"
                    placeholder="password"
                    minlength='8' 
                    required
                    value={register.password}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <Checkboxes className='checkbox-container'>
                  <label> 
                  <SubTitle>Please Select User Type:</SubTitle>
                    <input 
                    id="sellerChoice" 
                    type="checkbox" 
                    name="usertype"
                    value='seller'
                    required
                    /> 

                    Seller
                  </label> 
              <label>
                <input 
                id="buyerChoice" 
                type="checkbox" 
                name="usertype" 
                value='buyer'
                required
                /> 
              Buyer 
              </label>
              </Checkboxes>
              <Button type="submit">Sign Up</Button>
            </RegisterInput>
            </RegisterFieldSet>
        </form>
      </FormContainer>
    </div>
  );
};

export default RegistrationForm;
