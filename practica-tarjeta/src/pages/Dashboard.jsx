import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 10)))
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div>
      <h1>Carga de Datos API</h1>
      <div>
        {data.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={`https://via.placeholder.com/150?text=Album+${item.id}`} alt={`Album ${item.id}`} />
            <p><strong>Usuario:</strong> {item.userId}</p>
            <p><strong>Rol:</strong> {item.title}</p>
            <p><strong>Tipo:</strong> Album</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;