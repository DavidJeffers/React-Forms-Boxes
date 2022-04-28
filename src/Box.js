import React from "react";

/** render box */
function Box({ box }) {
  console.log(box);
  const boxStyle = {
    height: `${box.height}px`,
    width: `${box.width}px`,
    backgroundColor: box.color,
  };

  return <div style={boxStyle} id={box.id}></div>;
}

export default Box;
