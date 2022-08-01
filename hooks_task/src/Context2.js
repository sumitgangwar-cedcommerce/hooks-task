import React, { useContext } from 'react'
import { data } from './App'

const Context2 = () => {
    let name = useContext(data)
  return (
    <div>
       Hello, {name}
    </div>
  )
}

export default Context2