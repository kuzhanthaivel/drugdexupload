import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from './icon.png';

// Styled Components
const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ResponseMessage = styled.p`
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
  background-color: ${(props) => (props.type === "success" ? "#d4edda" : "#f8d7da")};
  border: 1px solid ${(props) => (props.type === "success" ? "#c3e6cb" : "#f5c6cb")};
`;

const Loader = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #007bff;
`;

// Form Fields Definition
const formFields = [
  { label: "Drug Name", name: "drugName", type: "text" },
  { label: "Description", name: "description", type: "textarea" },
  { label: "Uses (comma-separated)", name: "uses", type: "text" },
  { label: "Indications (comma-separated)", name: "indications", type: "text" },
  { label: "Side Effects (comma-separated)", name: "sideEffects", type: "text" },
  { label: "Warnings (comma-separated)", name: "warnings", type: "text" },
];

function App() {
  const [formData, setFormData] = useState({
    drugName: "",
    description: "",
    uses: "",
    indications: "",
    sideEffects: "",
    warnings: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const { drugName, description, uses, indications, sideEffects, warnings } = formData;

      const payload = {
        drugName,
        description,
        uses: uses.split(",").map((item) => item.trim()),
        indications: indications.split(",").map((item) => item.trim()),
        sideEffects: sideEffects.split(",").map((item) => item.trim()),
        warnings: warnings.split(",").map((item) => item.trim()),
      };

      const response = await axios.post("https://drug-dex-server.vercel.app/upload", payload);
      setResponseMessage({ type: "success", text: response.data.message });
    } catch (error) {
      setResponseMessage({
        type: "error",
        text: error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
<div style={{ 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  marginBottom: "20px" ,
  gap: "10px"
}}>

        <img src={Logo} alt="Logo" style={{ width: "150px", marginBottom: "20px" }} />
        <Header>DrugDex_Upload</Header>
      </div>
      <Form onSubmit={handleSubmit}>
        {formFields.map(({ label, name, type }) => (
          <FieldSet key={name}>
            <Label htmlFor={name}>{label}:</Label>
            {type === "textarea" ? (
              <TextArea
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            ) : (
              <Input
                id={name}
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            )}
          </FieldSet>
        ))}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </Button>
      </Form>
      {responseMessage && <ResponseMessage type={responseMessage.type}>{responseMessage.text}</ResponseMessage>}
      {isLoading && <Loader>Uploading data, please wait...</Loader>}
    </Container>
  );
}

export default App;
