import React, { useState } from 'react'

function TextEx() {

    const [text, setText] = useState('');

    function handleText(e){
        setText(e.target.value);
    }

  return (
    <div>
      <input type='text' value={text} onChange={handleText}/>
      <p>{text}</p>
    </div>
  )
}

export default TextEx