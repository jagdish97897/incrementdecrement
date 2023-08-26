
//increment and decrement the value 
import {useState} from 'react'
function App()
{
  let[data, setData]=useState(0)

  function Increse()
  {
    if(data<10)
    setData(data+1)
  }

  function Decrese()
  {
    if(data>0)
    setData(data-1)
  }

  function Reset()
  {
    
    setData(0)
  }
    return(
    <>
    <button onClick={()=>Increse()}>Increse</button>
    <h1>{data}</h1>
    <button onClick={()=>Decrese()}>Decrese</button>
    <button onClick={()=>Reset()}>Reset</button>
    
    </>
  )
}
export default App


































// import { useState } from 'react';

// function App() {
//   let [ḍata, setData] = useState(0);

//   function Increase() {
//     if (ḍata < 10) {
//       setData(ḍata + 1);
//     }
//   }

//   function Decrese() {
//     if (ḍata > 0) {
//       setData(ḍata - 1);
//     }
//   }

//   function Reset() {
//     setData(0);
//   }

//   return (
//     <>
//       <button onClick={()=>Increase()}>aage</button> <br />
//       <h1>{ḍata}</h1> <br />
//       <button onClick={()=>Decrese()}>piche</button> <br />
//       <button onClick={()=>Reset()}>reset</button> <br />
//     </>
//   );
// }

// export default App;