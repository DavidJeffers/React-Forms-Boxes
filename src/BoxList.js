import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

/** render NewBoxForm and each Box in boxes */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    console.log(box);
    let newBox = { ...box, id: uuid() };
    setBoxes((box) => [...box, newBox]);
  }
  function handleDelete(evt) {
    const id = evt.target.id;
    const newBoxList = boxes.filter((el) => el.id !== id);
    setBoxes(newBoxList);
  }
  return (
    <div>
      <NewBoxForm addBox={addBox} />

      {boxes.map((box) => (
        <div key={box.id} style={{ width: "fit-content" }}>
          <Box box={box} />
          <button id={box.id} onClick={handleDelete}>
            Delete Box
          </button>
        </div>
      ))}
    </div>
  );
}

export default BoxList;
