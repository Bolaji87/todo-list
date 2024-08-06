import React from "react";
import "./list.css";

function Lists({ items, onDeleteItems }) {
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => (
          <List item={item} key={item.id} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

function List({ item, onDeleteItems }) {
  return (
    <li className="list-items">
      <h4>{item.quantity}</h4>
      <p>{item.description}</p>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
export default Lists;
