import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div  className="same">
        <Button variant="outlined" onClick={()=>setCount(count-1)}>Decrement</Button>
        {count}
        <Button variant="outlined" onClick={()=>setCount(count+1)}>Increment</Button>
        <div>
            <Button variant="outlined" onClick={()=>setCount(0)}>Reset</Button>
        </div>
    </div>
  )
}

export default Counter