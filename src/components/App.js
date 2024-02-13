
import React,{useState} from "react";
import './../styles/App.css';
import TodoList from "./TodoList.js"

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", state: false },
    { task: "Build a React app", state: false },
    { task: "Deploy the React app", state: false },
  ]);
  const handleComplete = (index) => {
    todos[index].state = true;
    setTodos([...todos]);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Do not remove the main div */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};


export default App
