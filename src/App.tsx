import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import ReviewList from "./pages/ReviewList";
import ReviewDetails from "./pages/ReviewDetails";
import ReviewRegister from "./pages/ReviewRegister";
import ReviewComments from "./pages/ReviewComments";

import GlobalNavigation from "./components/GlobalNavigation";

const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* overflow: scroll; */
  background: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <GlobalContainer>
      <Router>
        <GlobalNavigation />
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/details/:id/comments" element={<ReviewComments />} />
          <Route path="/register" element={<ReviewRegister />} />
        </Routes>
      </Router>
    </GlobalContainer>
  );
}

export default App;
