import React from "react";
import "./list.css";

function Lists({ items }) {
  return (
    <div className="list-container">
      <h1>{items}</h1>
    </div>
  );
}

export default Lists;
