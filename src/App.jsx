import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todoinput } from "./copmonents/Todoinput";
import Todolist from "./copmonents/Todolist";

function App() {
  const [listtodo, seTlisttodo] = useState([]);
  let addList = (inputText) => {
    if(inputText!='')
      seTlisttodo([...listtodo, inputText]);
  };

  const deletelistitem = (key) => {
    let newlisttodo = [...listtodo];
    newlisttodo.splice(key, 1);
    seTlisttodo([...newlisttodo]);
  };

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <Todoinput addList  ={addList} />  
          <h1 className="app-heading">TODO</h1>
          <hr></hr>
          {listtodo.map((listItem, i) => {
            return (
              <Todolist
                key={i}
                index={i}
                item={listItem}
                deleteitem={deletelistitem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
