import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
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
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    queryType: Yup.string().required("Please select a query type"),
    agreedToTerms: Yup.boolean().oneOf([true], "You must agree to the terms"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      agreedToTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Form submitted successfully!");
      navigate("/dog-page");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>First Name</Label>
      <Input
        type="text"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your first name"
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
      )}

      <Label>Last Name</Label>
      <Input
        type="text"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your last name"
      />
      {formik.touched.lastName && formik.errors.lastName && (
        <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
      )}

      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your email"
      />
      {formik.touched.email && formik.errors.email && (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      )}

      <SelectLabel>Query Type</SelectLabel>
      <RadioGroup>
        <RadioOption>
          <input
            type="radio"
            name="queryType"
            value="general"
            onChange={formik.handleChange}
            checked={formik.values.queryType === "general"}
          />
          General Inquiry
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="queryType"
            value="support"
            onChange={formik.handleChange}
            checked={formik.values.queryType === "support"}
          />
          Support Request
        </RadioOption>
      </RadioGroup>
      {formik.touched.queryType && formik.errors.queryType && (
        <ErrorMessage>{formik.errors.queryType}</ErrorMessage>
      )}

      <Checkbox>
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={formik.values.agreedToTerms}
          onChange={formik.handleChange}
        />
        I consent to being contacted by the team
      </Checkbox>
      {formik.touched.agreedToTerms && formik.errors.agreedToTerms && (
        <ErrorMessage>{formik.errors.agreedToTerms}</ErrorMessage>
      )}

      <Button type="submit" disabled={!formik.values.agreedToTerms}>
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
