import React from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import List from "./components/List";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";

const App = () => {
  const questions = [
    {
      id: 1,
      question: "What is Javascript?",
      answer:
        "Javascript is a programming language that enables interactive web pages.",
    },
    {
      id: 2,
      question: "How can I include Javascript im my HTML?",
      answer:
        "You can include Javascript in your HTMl using the <script> tag,either in the head or body of your HTML document.",
    },
    {
      id: 3,
      question: "What is an Array?",
      answer:
        "An array is a data structure that stores a collection of elements each identified by an index or a key.",
    },
  ];
  return (
    <div className="w-[440px] mx-auto mt-20">
      {/* <Heading/> */}
      {/* <CreateForm/> */}
      {/* <Status/> */}
      {/* <ListGroup/> */}
      {/* <Counter/> */}
      {/* <Input /> */}
      {/* <Checker /> */}
      {questions.map(({ question, answer, id }) => (
        <Accordion key={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default App;
