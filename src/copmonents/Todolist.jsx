import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

function Todolist(props) {
  return (
    <>
      <div className="list-item">
        {props.item}
        <span className="icons">
          <a
            className="fa-solid fa-trash-can icon-delete"
            onClick={(e) => {
              props.deleteitem(props.index);
            }}
          ></a>
        </span>
      </div>
    </>
  );
}

export default Todolist;
