import React from "react";

function Clear(props) {
  return (
    <p onClick={() => props.funcClearClick()} className="clear">
      Clear Items
    </p>
  );
}

export default Clear;
