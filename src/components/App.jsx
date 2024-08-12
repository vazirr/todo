import React, { useState } from "react";
function App() {
  const [inputText, setInputtext] = useState("");
  const [items, setItems] = useState([]);
  function noteChange(event) {
    const text = event.target.value;
    setInputtext(text);
  }

  function addNote(prevItems) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputtext("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={noteChange} type="text" value={inputText} />
        <button onClick={addNote}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
