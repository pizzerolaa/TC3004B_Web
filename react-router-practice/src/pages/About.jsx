import React, { useState } from 'react'
import TextEx from './textEx';

function About() {

  const [show, setShow] = useState(true);

  function handleShow(){
    setShow(!show);
  }

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleShow}>Show/Hide</button>
      {show && <TextEx/>}
    </div>
  )
}

export default About