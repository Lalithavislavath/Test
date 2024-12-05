import React, { useState } from 'react'

function Name() {
    const [name,SetName]=useState
     const handleclick =()=>{
     }
  return (
    <div>
       <input type='text' value={name} onChange={(e)=>SetName(e.target.value)}/>
       <button onClick={handleclick}>click me</button>
    </div>
  )
}
export default Name