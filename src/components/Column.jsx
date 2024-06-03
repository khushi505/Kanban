import "./Column.css";
import Task from "./Task";

export default function Column({ state }) {
  //one prop is returned with name state
  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo" />
    </div>
  );
}
