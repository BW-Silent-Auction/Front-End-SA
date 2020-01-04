import React from "react";
import Navigation from "./components/Navigation.js";
import "./index.css";
import styled from "styled-components";

const MainApp = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin: 5%;
  background-attachment: fixed;
  background-size: cover;
  background-color: #e4e4e1;
  background-image: radial-gradient(
      at top center,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(143, 152, 157, 0.6) 100%
    );
  background-blend-mode: normal, multiply;
  animation-name: fade-in;
  animation-duration: 3s;
  margin: auto;

  @keyframes fade-in {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function App() {
  return (
    <MainApp>
      <Navigation />
    </MainApp>
  );
}
