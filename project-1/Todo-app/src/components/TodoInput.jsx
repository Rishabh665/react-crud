import React, { useState } from "react";
// import "/src/App.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="todoInput-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={handleInputText}
      />
      <button
        className="add-bnt"
        onClick={() => {
          props.addList({ inputText });
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
