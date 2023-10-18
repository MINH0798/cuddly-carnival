// src/components/SelectAndEnterForm.tsx

import React, { useState } from 'react';

const SelectAndEnterForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State for the select input
  const [textInput, setTextInput] = useState(''); // State for the text input

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Handle the action you want to perform when Enter key is pressed
      console.log('Enter key pressed');
    }
  };


  const blockStyleBlue = {
    backgroundColor: 'lightblue',
    padding: '10px',
    width: '300px', 
    height: '200px',
    color: 'white',
    display: 'inline-block',
    margin:'30px'
  };

  const blockStylePink = {
    backgroundColor: 'lightpink',
    padding: '10px',
    width: '500px', 
    height: '300px',
    color: 'white',
    display: 'inline-block',
    margin:'30px',
  };

  



  return (
    <div>
      <br />
      <br />
      <h1>Start A New Gantt Chart</h1>
      <label htmlFor="textInput">Title</label>
      <input
        type="text"
        placeholder="Title"
        id="textInput"
        value={textInput}
        onChange={handleTextChange}
        onKeyPress={handleEnterPress}
      />
      <br />
      <p />
      <label htmlFor="selectInput">Select an option:</label>
      <select id="selectInput" value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Gantt Chart Type --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <label htmlFor="selectInput">Associate Branches</label>
      <select id="selectInput" value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Gantt Chart Type --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <h1>Gantt Chart Detail</h1>
      <h1>Personalisation</h1>
      <br />


      
      <div style={blockStyleBlue }>
        <h2>Green Block</h2>
        <p>This is the green block with a green background.</p>
        <button>Click me</button>
      </div>
      <div style={blockStylePink  }>
        <h2>Green Block</h2>
        <p>This is the green block with a green background.</p>
        <button>Click me</button>
      </div>
      

    


    </div>
    

    
  );
};

export default SelectAndEnterForm;
