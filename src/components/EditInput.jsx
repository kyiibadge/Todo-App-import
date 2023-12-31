import React, { useEffect, useRef } from "react";

const EditInput = ({
  updateInput,
  handleUpdateInputText,
  handleUpdateInputBlur,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="">
      <input
        ref={inputRef}
        value={updateInput}
        type="text"
        className={`border border-gray-400 text-sm w-[280px] py-1 px-2`}
        onChange={handleUpdateInputText}
        onBlur={handleUpdateInputBlur}
      />
    </div>
  );
};

export default EditInput;
