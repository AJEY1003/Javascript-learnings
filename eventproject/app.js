// const button=document.getElementsByID("mybutton");
// let display="";
// button.addEventListener("Click" ()=>{
//     const clicked=event.target.textContent;
//     if(clicked==="="){
//         try{
//         display=eval(display).toString;}
//         catch{
//             display="error";
//         }
//     }
//     if(clicked==="C"){
//         display=" ";
//     }
//     else{
//         display+=clicked;
//     }
    
// }
let display = "";

// Function to update the display
function updateDisplay(value) {
    const displayElement = document.getElementById("display") || createDisplay();
    displayElement.textContent = value || "0";
}

// Function to create the display element dynamically
function createDisplay() {
    const displayElement = document.createElement("div");
    displayElement.id = "display";
    displayElement.style.marginTop = "20px";
    displayElement.style.fontSize = "24px";
    displayElement.style.border = "1px solid #000";
    displayElement.style.padding = "10px";
    displayElement.style.width = "200px";
    displayElement.style.textAlign = "right";
    document.body.insertBefore(displayElement, document.getElementById("buttons"));
    return displayElement;
}

// Function to handle button clicks
function handleButtonClick(value) {
    display += value; // Append the clicked value to the display
    updateDisplay(display);
}

// Function to calculate the result
function calculateResult() {
    try {
        display = eval(display).toString(); // Evaluate the mathematical expression
        updateDisplay(display);
    } catch {
        display = "Error"; // Handle invalid expressions
        updateDisplay(display);
    }
}

// Function to clear the display
function clearDisplay() {
    display = ""; // Reset the display string
    updateDisplay("0");
}
