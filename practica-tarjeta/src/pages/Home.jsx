import React, { useState } from "react";

function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAddItem(e) {
    if (e.key === "Enter" && input.trim() !== "") {
      setList([...list, input]);
      setInput("");
    }
  }

  return (
    <div>
      <div>
        <h1>Agregador de Lista</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleAddItem}
          placeholder="Agregar item..."
        />
        <ol>
          {list.map((item, index) => (
            <li key={`${item}-${index}`}>+ {item}</li>
          ))}
        </ol>
      </div>
      <button onClick={() => setList([])}>Limpiar lista</button>
    </div>
  );
}

export default Home;
