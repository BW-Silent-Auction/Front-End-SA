import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaFont } from "react-icons/fa";
import { FaBold } from "react-icons/fa";

import { connect } from "react-redux";
import { registerBuyer, registerSeller } from "../../actions";

const FormContainer = styled.div`

    width: 460px;
    margin: 5% auto 10% auto;
    padding: 6%;
    border: 1px solid black;
    background-color: white;
    box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
    font-size: .8rem;
    border-radius: 10px;
    text-align: center;
`;
const RegisterFieldSet = styled.fieldset`
  border: none;
`;
const RegisterTitle = styled.legend`
    font-size: 2rem;
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
    padding: 4% 0;
 `;

 const SubTitle = styled.h2`
    font-size: .9rem;
 `;

 const Checkboxes = styled.div`
 display: flex;
 flex-direction: column;
`;

 const Button = styled.input`
    width: 350px;
    padding: 4% 0;
    margin-top: 2%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
    font-size: .9rem;
 `;
  
function RegisterForm({ registerBuyer, registerSeller, history }) {

  const [register, setRegister] = useState({
        first_name: '', 
        last_name: '', 
        username: '', 
        email: '', 
        password: ''
  });

  const [check, setCheck] = useState({
    seller: false,
    buyer: false
  })

  const handleCheck = e => {
    // setCheck(e.target.name)
    if (e.target.value === "buyer") {
      setCheck({ buyer: true })
    } else if (e.target.value === "seller") {
      setCheck({ seller: true })
    }
    console.log(check.seller, check.buyer);
  }

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    // console.log(register);
  };
    
  useEffect(() => console.log("submit with useEffect"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (check.buyer === true) {
  console.log("submit activated");
    axios
      .post(`https://bw-silent-auction.herokuapp.com/api/buyers/register`, register)
      .then(res => {      
        console.log(res.data, "buyer call made");
        localStorage.setItem('id', res.data.id);
        history.push('/buyer-login');
      })
      .catch(err => console.log(err));
  } else if (check.seller === true) {
    axios
      .post(`https://bw-silent-auction.herokuapp.com/api/sellers/register`, register)
      .then(res => {      
        console.log(res.data, "seller call made");
        localStorage.setItem('id', res.data.id);
        history.push('/seller-login');
      })
      .catch(err => console.log(err));
  }};

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <RegisterFieldSet>
            <RegisterTitle htmlFor="title">
              Register for an Account
            </RegisterTitle>
            <RegisterInput>
              <div className="input-container">
                <label>
                  <FaFont />
                  <Input
                    id="firstname"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={register.first_name}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <FaBold />
                  <Input
                    id="lastname"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={register.last_name}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <FaUser />
                  <Input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    value={register.username}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <FaEnvelope />
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
              <div className="input-container">
                <label>
                  <FaKey />
                  <Input
                    id="pass"
                    type="password"
                    name="password"
                    placeholder="password"
                    // minlength='8' 
                    required
                    value={register.password}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <Checkboxes className="checkbox-container">
                <label>
                  <SubTitle>Please Select User Type:</SubTitle>
                  <input 
                  id="sellerChoice" 
                  type="checkbox" 
                  name="seller"
                  value="seller"
                  // required
                  checked={check.seller}
                  onChange={handleCheck}
                  /> 
                    Seller
                  </label> 
                  <label>
                    <input 
                    id="buyerChoice" 
                    type="checkbox" 
                    name="buyer" 
                    value="buyer"
                    // required
                    checked={check.buyer}
                    onChange={handleCheck}
                    /> 
                  Buyer 
                  </label>
              </Checkboxes>
              <Button type="submit" value="Submit"></Button>
            </RegisterInput>
            </RegisterFieldSet>
        </form>
      </FormContainer>
    </div>
  );

};
// const mapStateToProps = state => {
//   return {
//     data: state.data,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { registerBuyer, registerSeller }
// )(RegisterForm);

export default RegisterForm;
