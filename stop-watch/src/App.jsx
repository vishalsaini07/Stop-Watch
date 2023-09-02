import { useState } from 'react'

import './App.css'
let watchValue=undefined;
function App() {
const [value,setValue]=useState(0)
const [frez,setFrez]=useState(false)
const start =()=>{
  watchValue= setInterval(() => {
  setValue((x)=>x+1)
}, 1000);
setFrez(true)
}
const stop =()=>{
clearInterval(watchValue)
setFrez(false)
}
const reset =()=>{
setValue(0)
clearInterval(watchValue)
setFrez(false)
}
  return (
    <>
    <h1 className='text-yellow-400'>Stop Watch</h1>
<div className='m-5'>

<div className='border p-2 rounded-lg'><h1>{value}</h1></div>
</div> 
<div className='btn'>
<button disabled={frez} onClick={start} className='m-4 bg-green-400 text-black' >Start</button>
<button onClick={stop} className='m-4 bg-red-600 text-black'>Stop</button>
<button onClick={reset} className='m-4 bg-blue-400 text-black'>Reset</button>
</div>     
    </>
  )
}

export default App
