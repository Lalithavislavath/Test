import React, { useState } from 'react'

function Name() {
    const [name,SetName]=useState
  return (
    <div>
       <input type='text' value={name} onChange={(e)=>SetName(e.target.value)}/>
    </div>
  )
}
export default Name