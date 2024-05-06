import React, { useState } from "react";

export const Todoinput = (props) => {
  const [inputtext, setInputtext] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputtext);
      setInputtext("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        value={inputtext}
        placeholder="Enter Your Todo"
        onChange={(e) => {
          setInputtext(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      ></input>
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputtext);
          setInputtext("");
        }}
      >
        +
      </button>
    </div>
  );
};
