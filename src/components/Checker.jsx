import React, { useState } from "react";

function Checker() {
  const [done, setDone] = useState(true);
  console.log(done);
  const checkUpHandler = () => {
    setDone(!done);
  };

  return (
    <div>
      <h1 className="mb-5">Checker</h1>
      <div className="flex items-center gap-3">
        <input
          checked={done}
          onChange={checkUpHandler}
          type="checkbox"
          name=""
          id="x"
          className="w-6 h-6"
        />
        <label className="text-2xl select-none cursor-pointer" htmlFor="x">
          Click Me
        </label>
      </div>
    </div>
  );
}

export default Checker;
