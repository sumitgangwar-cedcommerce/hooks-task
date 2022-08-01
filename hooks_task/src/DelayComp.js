import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const DelayComp = () => {
    const [counter , setCounter] = useState(0)
    var delay , t=0;

    
    const wait = ()=>{
        document.getElementById('1').disabled = true;
        delay = setInterval(()=>{
          t++;
          if(t===3){
            stop()
          }
        },1000)
    }

    const stop = ()=>{
      document.getElementById('1').disabled = false;
      clearInterval(delay)
      setCounter((prev)=> prev+1)
    }

   
  return (
    <div className="Delay">
        <h1>{counter}</h1>
        <Button id='1' variant='contained' color='error' onClick={()=>wait()}>Button 1</Button>
        <Button variant='contained' color='success' onClick={()=>setCounter(counter+1)}>Button 2</Button>
    </div>
  )
}

export default DelayComp