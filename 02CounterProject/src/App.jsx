import { useState } from "react";

function App() {

  let [counter , setCounter] = useState(0);

let addValue = ()=>
{
  counter += 1;
  setCounter(counter);
  
}

let removeValue = () =>
{
  counter -= 1;
  setCounter(counter);
  
}

  return (
    <>
     <h1>
      Basic Counter
     </h1>
     <h2>
      Counter Value : {counter}
     </h2>
     <button onClick={addValue}>
      Add Value
     </button>
     <br></br>
     <button onClick={removeValue}>
      Remove Value
     </button>
    </>
  )
}

export default App
