import {useState} from "react";
function App(){
    const[state,setState]=useState([]);
    const[input ,setInput]=useState("");
    function handleChange(e){
        setInput(e.target.value);
    }
    function handleClick(e){
        e.preventDefault();
        const newState=[...state];
        newState.push(input);
        setState(state);
        setInput("");
    }
    return(
        <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
            <h2>{state}</h2>
        </div>
    )


}; 
export default App;
