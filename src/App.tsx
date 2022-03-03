import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReviewList from "./pages/ReviewList";
import ReviewDetails from "./pages/ReviewDetails";
import ReviewRegister from "./pages/ReviewRegister";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/register" element={<ReviewRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
