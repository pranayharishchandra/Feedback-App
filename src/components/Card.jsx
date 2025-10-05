import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        margin: "10px 0",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      {children}
    </div>
  );
}

export default Card;
