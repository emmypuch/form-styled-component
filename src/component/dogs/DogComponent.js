import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Div = styled.div`
  text-align: center;
  color: #0d7c69;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const P = styled.p`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #0d7c69;
  color: #e2f1e7;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const DogComponent = () => {
  return (
    <Container>
      <Div>
        <P>Welcome to Dog's World!</P>
        <Button>Let's dive in</Button>
      </Div>
    </Container>
  );
};

export default DogComponent;
