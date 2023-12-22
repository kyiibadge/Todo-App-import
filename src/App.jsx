import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateForm from "./components/CreateForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import List from "./components/List";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/AccordionGroup";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, job: "Complete homework", isDone: false },
    { id: 2, job: "Go to the grocery store", isDone: false },
    { id: 3, job: "Read a book", isDone: false },
    // { id: 4, job: "Exercise for 30 minutes", isDone: false },
    // { id: 5, job: "Write a blog post", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const updateJobTask = (id, newJob) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, job: newJob } : task))
    );
  };

  const doneAllTask = () => {
    setTasks(tasks.map((task) => ({ ...task, isDone: true })));
  };

  return (
    <div className="w-[440px] mx-auto mt-20">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup
        updateJobTask={updateJobTask}
        deleteTask={deleteTask}
        doneTask={doneTask}
        tasks={tasks}
        doneAllTask={doneAllTask}
      />
      {/* <Counter/> */}
      {/* <Input /> */}
      {/* <Checker /> */}
      {/* <Accordion /> */}
      {/* <AccordionGroup /> */}
    </div>
  );
};

export default App;
