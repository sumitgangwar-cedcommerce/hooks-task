import { Button, TextField } from '@mui/material'
import React, { memo, useState } from 'react'

const Toggle = () => {
    const [styles , setStyles] = useState({backgroundColor:'black' , color:'white', margin: '2vw'})
    const [num , setNum] = useState([])
    const toggle = ()=>{
        if(styles.color === 'white'){
            setStyles({backgroundColor:'white', color:'black' , margin: '2vw'})
        }
        else{
            setStyles({backgroundColor:'black', color:'white', margin: '2vw'})
        }
    }
    const changeHandler = (e) => {
        let n = e.target.value
        n = Number(n)
        setNum([n , n+1 , n+2])
    }
  return (
    <div className="same" style={{width: '50%', margin: '2vw',marginRight:'auto' , marginLeft:'auto'}}>
        <TextField variant='outlined' type='number' onChange={changeHandler} ></TextField>
        <div style={styles}>
            <Button  onClick={toggle}>Toggle Theme</Button>
            <div>{num[0]}</div>
            <div>{num[1]}</div>
            <div>{num[2]}</div>
        </div>
    </div>
  )
}

export default memo(Toggle)