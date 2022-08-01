import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CountDownClock = () => {
    const [counter , setCounter] = useState([0,0,0])
    var t=0;

    const start = ()=> {
        if(t===0){
            let d = new Date();
            let temp = [d.getHours() , d.getMinutes() , d.getSeconds()]
            setInterval(()=>{
                temp[2]--
                if(temp[2] === -1){
                    temp[2]=59
                    temp[1]--
                    if(temp[1]=== -1){
                        temp[1]=59
                        temp[0]--
                    }
                }
                setCounter([...temp])
            },1000)

        }
        
        
    }
    useEffect(()=>{
        if(counter[0]!==0)   t=1;
    })
  return (
    <div  className="same">
        <div >
            {counter[0]} : {counter[1]} : {counter[2]} 
        </div>
        <Button variant='outlined' onClick={start}>Start</Button>
    </div>
  )
}

export default CountDownClock