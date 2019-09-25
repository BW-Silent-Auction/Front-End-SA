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
  margin: auto 100px;
  padding: 5%;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 10px 10px rgba(69, 62, 62, 0.53);
  font-size: 0.8rem;
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
  font-size: 0.9rem;
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
<<<<<<< HEAD
 const Button = styled.input`
    width: 350px;
    padding: 2% 0;
    margin-top: 2%;
    border-radius: 3px;
    background-color: #66b3ff;
    color: black;
    font-weight: bold;
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
=======

function RegisterForm({ registerBuyer, registerSeller }) {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: ""
  });
>>>>>>> 793ebc34ac9cc4670348268085cf4e5123becc4f

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    // console.log(register);
  };
<<<<<<< HEAD
    
  useEffect(() => console.log("submit with useEffect"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (check.buyer === true) {
  console.log("submit activated");
    axios
      .post(`https://bw-silent-auction.herokuapp.com/api/buyers/register`, register)
      .then(res => {      
        console.log(res.data, "buyer call made");
        // localStorage.setItem('token', res.data);
        history.push('/login');
      })
      .catch(err => console.log(err));
  } else if (check.seller === true) {
    axios
      .post(`https://bw-silent-auction.herokuapp.com/api/sellers/register`, register)
      .then(res => {      
        console.log(res.data, "seller call made");
        // localStorage.setItem('token', res.data);
        history.push('/login');
      })
      .catch(err => console.log(err));
  }};

=======

  useEffect(() => {
    console.log(`give me sth`);
  });

  const handleSubmit = e => {
    e.preventDefault();
    // if (usertype === "seller") {
    console.log("seller activated");
    // registerSeller()
    // } else {
    //   console.log("buyer activated")
    //   // registerBuyer()
    // }
  };

>>>>>>> 793ebc34ac9cc4670348268085cf4e5123becc4f
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
<<<<<<< HEAD
                    // minlength='8' 
=======
                    minlength="8"
>>>>>>> 793ebc34ac9cc4670348268085cf4e5123becc4f
                    required
                    value={register.password}
                    onChange={e => handleChange(e)}
                  />
                </label>
              </div>
              <Checkboxes className="checkbox-container">
                <label>
                  <SubTitle>Please Select User Type:</SubTitle>
<<<<<<< HEAD
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
=======
                  <input
                    id="sellerChoice"
                    type="checkbox"
                    name="usertype"
                    value="seller"
                  />
                  Seller
                </label>
                <label>
                  <input
                    id="buyerChoice"
                    type="checkbox"
                    name="usertype"
                    value="buyer"
                  />
                  Buyer
                </label>
>>>>>>> 793ebc34ac9cc4670348268085cf4e5123becc4f
              </Checkboxes>
              <Button type="submit" value="Submit"></Button>
            </RegisterInput>
<<<<<<< HEAD
            </RegisterFieldSet>
=======
          </RegisterFieldSet>
>>>>>>> 793ebc34ac9cc4670348268085cf4e5123becc4f
        </form>
      </FormContainer>
    </div>
  );
<<<<<<< HEAD
};

const mapStateToProps = state => {
  return {
      first_name: state.first_name, 
      last_name: state.last_name, 
      username: state.username, 
      email: state.email, 
      password: state.password
  };
};

export default connect(
  mapStateToProps,
  { registerBuyer, registerSeller }
)(RegisterForm);

=======
}

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
>>>>>>> 793ebc34ac9cc4670348268085cf4e5123becc4f
