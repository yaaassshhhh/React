import {useState,useCallback, useEffect,useRef} from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>
  {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*_+";

    for(let i = 1 ; i<=length; i++)
    {
        let index = Math.floor(str.length * Math.random() + 1 );
        pass += str.charAt(index);

    }
    
    setPassword(pass);

  },[length , numberAllowed , charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>
  { passwordRef.current?.select();
    console.log(password)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>
  {
    passwordGenerator()
  },[numberAllowed,charAllowed,length,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 py-3 text-orange-500 bg-gray-700">
    <h1 className="text-center text-white my-3"> Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" 
              className="outline-none w-full py-1 px-3" 
              value = {password} 
              placeholder ="your passworwd here" 
              readOnly
              ref={passwordRef}></input>
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
              onClick={copyPasswordToClipBoard}>Copy</button>
     </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type = "range" 
                 min={6}
                 max={50}
                 value={length}
                 className="cursor-pointer"
                 onChange={(e) => {

                  setLength(e.target.value)}}

                 ></input>
          <label>Length : {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
                   defaultChecked = {numberAllowed}
                   id= "numberInput"

                   onChange={(e) => {

                   setNumberAllowed((prev)=>!prev)

                   }}></input>

          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
                   defaultChecked = {numberAllowed}
                   id= "characterInput"

                   onChange={(e) => {

                   setCharAllowed((prev)=>!prev)

                  }}></input>

          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
