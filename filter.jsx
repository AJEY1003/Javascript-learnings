import React, {useState} from "react";
function App(){
    const[state,setState]=useState([{Name:"Ajey",Marks:100},{Name:"Akash",Marks:200},{Name:"Austin",Marks:300}]);
    function handleChange(){
        const newState=[...state];
        const filterArr=newState.filter(person=>person.Marks>=200);
        setState(filterArr);
    }
    return(
        <div>
            {state.map((person,index)=>(
            
        <h2 key={index}>{person.Name},{person.Marks}</h2>
            ))}
        <button onClick={handleChange}>Filter</button>
        </div>
    )
}export default App;
