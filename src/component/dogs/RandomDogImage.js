import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const ImageContainer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #0d7c69;
  color: #e2f1e7;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #096956;
  }
`;

const RandomDogImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      if (data.status === "success") {
        setImageUrl(data.message);
      } else {
        setError("Failed to fetch dog image.");
      }
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch dog image.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Random Dog Image</h2>
      <ImageContainer>
        <DogImage src={imageUrl} alt="Random Dog" />
      </ImageContainer>
      <Button onClick={fetchRandomImage}>Reload Image</Button>
    </Container>
  );
};

export default RandomDogImage;
