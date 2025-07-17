// src/components/LoginButton.jsx
import React from "react";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080"; // Adjust port if needed

const LoginButton = () => {
  const backendUrl = `${BACKEND_URL}/oauth2/authorization/google`; // Adjust port

  return (
    <a href={backendUrl}>
      <button style={{ padding: "8px 16px", margin: "10px", background: "green", color: "white", border: "none", borderRadius: "5px" }}>
      Login
    </button>
    </a>
  );
};

export default LoginButton;
