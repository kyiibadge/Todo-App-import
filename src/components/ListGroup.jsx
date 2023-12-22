import React, { useState } from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";

function ListGroup({
  tasks,
  deleteTask,
  doneTask,
  updateJobTask,
  doneAllTask,
}) {
  return (
    <div>
      {tasks.length === 0 && <EmptyStage />}
      {tasks.map(({ id, job, isDone }) => (
        <List
          deleteTask={deleteTask}
          doneTask={doneTask}
          key={id}
          id={id}
          job={job}
          isDone={isDone}
          updateJobTask={updateJobTask}
        />
      ))}
      <div className="flex justify-end">
        <button
          onClick={doneAllTask}
          className="bg-gray-300 px-4 py-1 rounded-full"
        >
          All Done
        </button>
      </div>
    </div>
  );
}

export default ListGroup;
