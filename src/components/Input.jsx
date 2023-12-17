import React, { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  const inputHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1 className="mb-5">Name Input</h1>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={inputHandler}
        className="rounded w-full border border-gray-400 px-3 py-1"
      />
      <p>{text}</p>
    </div>
  );
}

export default Input;
