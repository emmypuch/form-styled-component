import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
    margin: 10px;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const SelectLabel = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 16px;
  margin-top: 5px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const RadioOption = styled.label`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
    margin-right: 0px;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 5px;

  input {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
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
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.queryType) {
      newErrors.queryType = "Please select a query type";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>First Name</Label>
      <Input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        required
      />
      {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}

      <Label>Last Name</Label>
      <Input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
        required
      />
      {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}

      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

      <SelectLabel>Query Type</SelectLabel>
      <RadioGroup>
        <RadioOption>
          <input
            type="radio"
            name="queryType"
            value="general"
            onChange={handleChange}
            required
          />
          General Inquiry
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="queryType"
            value="support"
            onChange={handleChange}
            required
          />
          Support Request
        </RadioOption>
      </RadioGroup>
      {errors.queryType && <ErrorMessage>{errors.queryType}</ErrorMessage>}

      <Checkbox>
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
        />
        I consent to being contacted by the team
      </Checkbox>
      {errors.agreedToTerms && (
        <ErrorMessage>{errors.agreedToTerms}</ErrorMessage>
      )}

      <Button type="submit" disabled={!formData.agreedToTerms}>
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
