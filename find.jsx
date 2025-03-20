import React,{useState} from "react";
function App(){
    const[state,setState]=useState([{Name:"Ajey",Marks:100},
                                    {Name:"Vijay",Marks:200},{
                                        Name:"Akash",Marks:300
                                    }]);
    function handleClick(){
        const test=state.find(person=>person.Marks>200);
        if(test){
            alert(`person found ${test.Name}`)
        }
        else{
            alert(`person not found with ${test.Name}`)
        }
    }
    return(
    <div>
    {state.map((person,index)=>(
    <h2 key={index}>{person.Name},{person.Marks}</h2>
    
    ))}
        <button onClick={handleClick}>Find</button>
    
    </div>
    )
}export default App;
