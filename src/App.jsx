import React, { useState } from "react";
import Navbar from "./components/header/Navbar.jsx";
import Form from "./components/form/Form.jsx";
import Lists from "./components/main/Lists.jsx";

function App() {
  const [items, setItems] = useState([]);
  function handleUpadateItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Navbar />
      <Form onUpdateItems={handleUpadateItems} />
      <Lists items={items} onDeleteItems={handleDeleteItems} />
    </div>
  );
}

export default App;
