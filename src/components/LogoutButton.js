import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080"; // Adjust port if needed

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/logout`, {}, {
        withCredentials: true
      });

      // Optionally clear any client-side state here

      navigate("/"); // or wherever your login page is
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button onClick={handleLogout} style={{ padding: "8px 16px", margin: "10px", background: "#e53935", color: "white", border: "none", borderRadius: "5px" }}>
      Logout
    </button>
  );
};

export default LogoutButton;
