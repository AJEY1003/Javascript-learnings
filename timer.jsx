import React, { useState, useRef } from "react";
function Parent() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null); 
  function startTimer() {
    if (!timerRef.current) { 
      timerRef.current = setInterval(() => {
        setTimer((prevCount) => prevCount + 1); 
      }, 1000);
    }
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0);
  }

  return (
    <div>
      <h2>{Math.floor(timer / 60)} mins</h2>
      <h2>{timer % 60} sec</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Parent;
