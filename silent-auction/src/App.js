import React from "react";
import RegisterForm from "./components/Forms/RegisterForm.js";
import Navigation from "./components/Navigation.js";
import './index.css';
import styled from 'styled-components';

const MainApp = styled.main`
box-sizing: border-box;
width: 100%;
height: auto;
margin:5%;
background-attachment: fixed;
background-size: cover;
animation-name: fade-in;
animation-duration: 3s;
margin: auto;

@keyframes fade-in {
from {opacity: 0.1;}
to {opacity: 1;}
} 
`;

export default function App() {
  return (
    <MainApp>
      <Navigation />
    </MainApp>
  );
}
