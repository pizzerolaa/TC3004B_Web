import React, { useState } from "react";

function TextEx() {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(null);

  function handleText(e) {
    const value = e.target.value;
    setText(value);
    setIsValid(validateCreditCard(value));
  }

  function validateCreditCard(number) {
    const cleaned = number.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i], 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return cleaned.length > 0 && sum % 10 === 0;
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleText}
        placeholder="Introduce una tarjeta de crédito"
      />
      <p>{text}</p>
      {text && (
        <p style={{ color: isValid ? "green" : "red" }}>
          {isValid ? "Tarjeta Valida" : "Tarjeta Invalida"}
        </p>
      )}
    </div>
  );
}

export default TextEx;
