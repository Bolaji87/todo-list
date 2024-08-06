import React, { useState } from "react";
import Navbar from "./components/header/Navbar.jsx";
import Form from "./components/form/Form.jsx";
import Lists from "./components/main/Lists.jsx";

function App() {
  const [items, setItems] = useState([]);
  function handleUpadateItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div>
      <Navbar />
      <Form onUpdateItems={handleUpadateItems} />
      <Lists items={items} />
    </div>
  );
}

export default App;
