import React, { useState } from "react";
import Accordion from "./Accordion";

function AccordionGroup() {
  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "What is Javascript?",
      answer:
        "Javascript is a programming language that enables interactive web pages.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How can I include Javascript im my HTML?",
      answer:
        "You can include Javascript in your HTMl using the <script> tag,either in the head or body of your HTML document.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is an Array?",
      answer:
        "An array is a data structure that stores a collection of elements each identified by an index or a key.",
      isOpen: false,
    },
  ]);
  const openAccordion = (id) => {
    setFaq(
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
      )
    );
  };

  return (
    <div>
      <h1 className="mb-5 text-3xl">FAQ Group</h1>
      {faq.map(({ question, answer, id, isOpen }) => (
        <Accordion
          key={id}
          id={id}
          openAccordion={openAccordion}
          isOpen={isOpen}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default AccordionGroup;
