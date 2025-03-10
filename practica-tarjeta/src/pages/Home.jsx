import React, { useState, useEffect } from "react";

function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(true);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    setList(["queso", "arroz", "papa"]);

    return () => {
      setList([]);
    };
  }, []);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAddItem() {
    if (input.trim() !== "") {
      if (list.includes(input)) {
        setWarning("La palabra ya existe en la lista.");
      } else {
        setList([...list, input]);
        setInput("");
        setWarning("");
      }
    }
  }

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Ocultar lista" : "Mostrar lista"}
      </button>
      {showList && (
        <div>
          <h1>Agregador de Lista</h1>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Agregar item..."
          />
          <button onClick={handleAddItem}>Agregar</button>
          {warning && <p style={{ color: "red" }}>{warning}</p>}
          <ol>
            {list.map((item, index) => (
              <li key={`${item}-${index}`}>+ {item}</li>
            ))}
          </ol>
          <button onClick={() => setList([])}>Limpiar lista</button>
        </div>
      )}
    </div>
  );
}

export default Home;
