import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const ListItem = styled.li`
  padding: 10px 20px;
  background-color: #e2f1e7;
  border-radius: 8px;
  font-size: 18px;
  color: #0d7c69;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background-color: #cbe6db;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  &:hover {
    background-color: #096956;
  }
`;

const BreedsList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/random-dog");
  };

  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setBreeds(Object.keys(data.message));
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch breeds.");
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) {
    return <Container>Loading breeds...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <h2>List of Dog Breeds</h2>
      <List>
        {breeds.map((breed, index) => (
          <ListItem key={index}>{breed}</ListItem>
        ))}
      </List>
      <Button onClick={handleClick}>Get random dog image</Button>
    </Container>
  );
};

export default BreedsList;
