import { Button } from '@mui/material'
import React, { useState } from 'react'

const ButtonClick = () => {
    const [count , setCount] = useState(0)
  return (
    <div className="same">
        <Button variant="outlined" onClick={()=>setCount(count+1)}>You Click {count} times</Button>
    </div>
  )
}

export default ButtonClick