import React, { useState } from "react";
import axios from "axios";

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

      // Prepare JSON-parsable arrays
      const payload = {
        drugName,
        description,
        uses: JSON.stringify(uses.split(",").map((item) => item.trim())),
        indications: JSON.stringify(indications.split(",").map((item) => item.trim())),
        sideEffects: JSON.stringify(sideEffects.split(",").map((item) => item.trim())),
        warnings: JSON.stringify(warnings.split(",").map((item) => item.trim())),
      };

      const response = await axios.post("https://drug-dex-server.vercel.app/upload", payload);
      setResponseMessage({ type: "success", text: response.data.message });
    } catch (error) {
      setResponseMessage({
        type: "error",
        text: error.response?.data?.message || "Error uploading drug.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const containerStyle = {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const fieldSetStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#555",
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    transition: "border-color 0.3s",
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: "#007BFF",
  };

  const buttonStyle = {
    padding: "12px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
  };

  const responseStyle = {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "5px",
    color: responseMessage.type === "success" ? "#155724" : "#721c24",
    backgroundColor: responseMessage.type === "success" ? "#d4edda" : "#f8d7da",
    border: `1px solid ${
      responseMessage.type === "success" ? "#c3e6cb" : "#f5c6cb"
    }`,
  };

  const loaderStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "16px",
    color: "#007BFF",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Upload Drug Data</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        {[
          { label: "Drug Name", name: "drugName", type: "text" },
          { label: "Description", name: "description", type: "textarea" },
          { label: "Uses (comma-separated)", name: "uses", type: "text" },
          { label: "Indications (comma-separated)", name: "indications", type: "text" },
          { label: "Side Effects (comma-separated)", name: "sideEffects", type: "text" },
          { label: "Warnings (comma-separated)", name: "warnings", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} style={fieldSetStyle}>
            <label style={labelStyle}>{label}:</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.target.style = inputFocusStyle)}
                onBlur={(e) => (e.target.style = inputStyle)}
                required
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.target.style = inputFocusStyle)}
                onBlur={(e) => (e.target.style = inputStyle)}
                required
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style = buttonHoverStyle)}
          onMouseLeave={(e) => (e.target.style = buttonStyle)}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {responseMessage && <p style={responseStyle}>{responseMessage.text}</p>}
      {isLoading && <p style={loaderStyle}>Uploading data, please wait...</p>}
    </div>
  );
}

export default App;
