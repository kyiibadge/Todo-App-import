import React, { useState } from "react";

function Counter() {
  //   console.log(useState(0));

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="font-mono p-10 border border-gray-500 rounded">
      <h1 className="font-bold text-4xl mb-5">Counter : {count}</h1>
      <div className="flex gap-3">
        <button onClick={decrement} className="bg-sky-500 px-2 py-1 rounded-lg">
          Sub (-)
        </button>
        <button onClick={increment} className="bg-sky-500 px-2 py-1 rounded-lg">
          Add (+)
        </button>
      </div>
    </div>
  );
}

export default Counter;
