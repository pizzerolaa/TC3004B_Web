import React, { useState } from 'react'

function Home() {
  const [sumar, setSumar] = useState(0)
  const [restar, setRestar] = useState(0)

  return (
    <div>
      <p>Sumar: {sumar}</p>
      <button onClick={() => setSumar(sumar + 1)}>Sumar</button>
      <p>Restar: {restar}</p>
      <button onClick={() => setRestar(restar - 1)}>Restar</button>
    </div>
  )
}

export default Home