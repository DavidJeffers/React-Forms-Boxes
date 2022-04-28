import React, { useState } from "react";

/** render box form, handle form state */
function NewBoxForm({ addBox }) {
  const initialState = {
    height: "",
    width: "",
    color: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    addBox(formData);
    setFormData(initialState);
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input
        onChange={handleChange}
        name="height"
        value={formData.height}
      ></input>
      <label htmlFor="width">Width</label>
      <input
        onChange={handleChange}
        name="width"
        value={formData.width}
      ></input>
      <label htmlFor="color">Background Color</label>
      <input
        onChange={handleChange}
        name="color"
        value={formData.color}
      ></input>
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
