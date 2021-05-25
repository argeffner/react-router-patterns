import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import './styles/NewColorForm.css';

function NewColorForm({newColor}) {
  let iState = {name: '', hex: "#ffffff"};

  const [formData, setFormData] = useState(iState);
  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = (e.target.name !== '') ? e.target : {'blank': e.target.value}; 
    setFormData(form => (
        {...form, [name]: value}
  ))
}
  const submitData = e => {
    e.preventDefault();
    newColor({[formData.name]: formData.hex});
    history.push("/colors");
};

  const {name, hex} = formData;

  return (
    <div className="NewColorForm">
      <form onSubmit={submitData}>
        <input
          name="name"
          id="name"
          value={name}
          placeholder="Choose a color name"
          onChange={handleChange} />
        <input
          type="color"
          name="hex"
          id="hex"
          value={hex}
          onChange={handleChange} />
        <div>
          <button> Add New Color </button> 
        </div>     
      </form>
    </div>
  )
}

export default NewColorForm;