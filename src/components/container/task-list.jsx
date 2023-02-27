import { useState } from "react";
import { Level } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import CreateTask from "../pure/forms/create-task";
import TaskComponent from "../pure/task";

const TaskList = () => {
  const t1 = new Task("Task 1", "First Task", false, Level.BLOCKING);
  const t2 = new Task("Task 2", "Second Task", true);
  const t3 = new Task("Task 3", "Third Task", false, Level.URGENT);
  const [tasks, setTasks] = useState([t1, t2, t3]);
  const actionState = (task) => {
    let index = tasks.indexOf(task);
    let temp = [...tasks];
    temp[index].completed = !temp[index].completed;
    setTasks(temp);
  };
  const actionRemove = (task) => {
    let index = tasks.indexOf(task);
    let temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };
  const actionAdd = (task) => {
    let temp = [...tasks];
    temp.push(task);
    setTasks(temp);
  };

  const Table = () => {
    return (
      <table
        style={{
          background: "#DEB887"
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((e, i) => {
            return (
              <TaskComponent
                task={e}
                key={i}
                actionState={actionState}
                actionRemove={actionRemove}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "500px",
        margin: "auto"
      }}
    >
      <h1
        style={{
          background: "#CD853F"
        }}
      >
        Task List
      </h1>
      {tasks.length ? <Table></Table> : <p>There are no tasks to show</p>}
      <CreateTask actionAdd={actionAdd}></CreateTask>
    </div>
  );
};

export default TaskList;
