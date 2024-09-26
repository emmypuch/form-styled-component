import React from "react";
import FormComponent from "./component/form/FormComponent";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogComponent from "./component/dogs/DogComponent";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e2f1e7;
`;

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/dog-page" element={<DogComponent />} />{" "}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
