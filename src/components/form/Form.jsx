import React, { useState } from "react";
import "./form.css";

function Form({ onUpdateItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSSubmitForm(e) {
    e.preventDefault();
    if (!description) return;

    const newItems = {
      description,
      quantity,
      id: crypto.randomUUID(),
    };

    onUpdateItems(newItems);

    setQuantity("");
    setDescription("");
  }
  return (
    <div className="form-wrapper">
      <form action="" onSubmit={handleSSubmitForm}>
        <select
          name=""
          id=""
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="items..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
