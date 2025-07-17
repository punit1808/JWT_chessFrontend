import React, { useState } from "react";
import axios from "axios"; // ✅ Make sure this is imported
import LogoutButton from "../components/LogoutButton";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080"; // Adjust port if needed

const Test = () => {
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    axios
      .get(`${BACKEND_URL}/api/hello`, {
        withCredentials: true, // ✅ Sends the session cookie
      })
      .then((res) => {
        setMsg(res.data); // ✅ axios parses JSON/text automatically
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <button onClick={handleClick} style={{ padding: "8px 16px", margin: "10px", background: "grey", color: "white", border: "none", borderRadius: "5px" }}>
      Call API
    </button>
      <LogoutButton/>
      {msg && <h1>{msg}</h1>}
    </>
  );
};

export default Test;
