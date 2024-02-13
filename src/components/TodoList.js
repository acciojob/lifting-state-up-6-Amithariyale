import React from "react"

const TodoList = (props) => {
    const { handleComplete, todos } = props;
  
    return (
      <ul>
        <h2>Child Component</h2>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item.task}
              {!item.state && (
                <button onClick={() => handleComplete(index)}>Complete</button>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

export default TodoList;