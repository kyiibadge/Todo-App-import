import React, { useState } from "react";

function Accordion({ id, openAccordion, question, answer, isOpen }) {
  // const [open, setOpen] = useState(false);
  // const accordionHandler = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="border border-gray-400">
      <div
        onClick={() => openAccordion(id)}
        className=" bg-gray-400 p-3 select-none cursor-pointer flex justify-between"
      >
        <h4>{question}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`duration-300 w-6 h-6 ${!isOpen && "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      </div>
      {isOpen && (
        <div className={`p-3`}>
          <p className={`p-4 animate__animated animate__fadeIn`}>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
