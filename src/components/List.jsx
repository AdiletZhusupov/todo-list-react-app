import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function List(props) {
  return (
    <li className="list-item">
      <input
        checked={props.check[props.id]}
        onChange={(e) => {
          props.funcCheckboxChange(e, props.id);
        }}
        type="checkbox"
      />
      <p className={props.check[props.id] ? "cross" : null}>{props.text}</p>
      <button
        onClick={() => {
          props.funcDeleteClick(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </li>
  );
}

export default List;
