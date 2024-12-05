import React, { useState } from 'react'

function Name() {
    const [name,SetName]=useState
  return (
    <div>
       <input type='text' onChange={(e)=>SetName(e.target.value)}/>
    </div>
  )
}
export default Name
