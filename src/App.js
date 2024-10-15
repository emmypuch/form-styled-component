import React from "react";
import FormComponent from "./component/form/FormComponent";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogComponent from "./component/dogs/DogComponent";
import BreedsList from "./component/dogs/BreedsList";
import RandomDogImage from "./component/dogs/RandomDogImage";

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
          <Route path="/breeds" element={<BreedsList />} />
          <Route path="/random-dog" element={<RandomDogImage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
