import React, { useState } from "react";
// import "/src/App.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");  // state create ki input receive karne ke liye
  const handleInputText = (e) => {
    setInputText(e.target.value);                 // ek call back function jo ki onChange par input value ko inputText me dalega
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
        className="add-btn"
        onClick={() => {
          props.addList(inputText );   // pass string directly --> inputText, instead of object{inputText} ....
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
