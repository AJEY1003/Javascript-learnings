import React, { useState } from "react";

function App() {
  const [state, setState] = useState(["pink", "red", "orange"]);

  const handleRemoveColor = () => {
    const newState = [...state]; // Create a copy of the array to avoid direct mutation
    const removedColor = newState.shift(); // Remove the first element
    setState(newState);
    alert(`Removed Color: ${removedColor}`);
  };

  return (
    <div>
      <h1>{state.join(", ")}</h1>
      <button onClick={handleRemoveColor}>Remove First Color</button>
    </div>
  );
}

export default App;
