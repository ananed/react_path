import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

// initial value
const initialState = ["Clean Kitchen", "Wipe Floor"];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>To-do List</h1>
      <div>
        <input
        
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button onClick={(e) => {
          setTodos([...todos, inputValue]);
          // clean up the field
          setInputValue("");
        }}>Add Todo</button>
      </div>
      {todos.map((todo) => {
        <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
