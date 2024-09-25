import React from "react";
import FormComponent from "./component/form/FormComponent";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e2f1e7;
`;

function App() {
  return (
    <Container>
      <FormComponent />
    </Container>
  );
}

export default App;
