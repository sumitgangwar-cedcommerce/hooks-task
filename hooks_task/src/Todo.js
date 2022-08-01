import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [completed , setCompleted] = useState([])
    const [incomplete, setIncomplete] = useState([])
    const [btnName , setBtnName] = useState('Add')
    const [editTask , setEditTask] = useState([])

    const add_update = (e) => {
        e.preventDefault()
        if(btnName==='Add'){
            setIncomplete([...incomplete ,document.getElementById('txt').value])
            document.getElementById('txt').value = ''
        }
        else{
            if(editTask[0]==='C'){
                let txt = document.getElementById('txt').value
                let temp = completed
                temp.splice(editTask[1],1,txt)
                setCompleted([...temp])
                setEditTask([])
                setBtnName('Add')
                document.getElementById('txt').value = ''
            }
            else{
                let txt = document.getElementById('txt').value
                let temp = incomplete
                temp.splice(editTask[1],1,txt)
                setIncomplete([...temp])
                setEditTask([])
                setBtnName('Add')
                document.getElementById('txt').value = ''
            }
        }
    }
    const checkboxHandel = (e) => {
        let ind = e.target.closest('tr').id
        if(e.target.checked){
            e.target.checked = false
            let temp = incomplete
            let data = temp[ind] 
            temp.splice(ind,1)
            setIncomplete([...temp])
            setCompleted([...completed , data])
        }
        else{
            let temp = completed
            let data = temp[ind] 
            temp.splice(ind,1)
            setIncomplete([...incomplete , data])
            setCompleted([...temp])
        }
    }
    const deleteIncomplete = (e) => {
        let ind = e.target.closest('tr').id
        let temp = incomplete
        temp.splice(ind,1)
        setIncomplete([...temp])
    }
    const editIncomplete = (e)=>{
        let ind = e.target.closest('tr').id
        document.getElementById('txt').value = incomplete[ind]
        setBtnName('Update')
        setEditTask(['I' , ind])
    }
    const deleteComplete = (e) => {
        let ind = e.target.closest('tr').id
        let temp = completed
        temp.splice(ind,1)
        setCompleted([...temp])
    }
    const editComplete = (e)=>{
        let ind = e.target.closest('tr').id
        document.getElementById('txt').value = completed[ind]
        setBtnName('Update')
        setEditTask(['C' , ind])
    }
  return (
    <div id='todo'>
        <div>
            <form onSubmit={add_update}>
                <TextField id='txt' variant="outlined" required></TextField>
                <Button variant='contained' type="submit">{btnName}</Button>
            </form>
        </div>
        <div>
            <h1>Incomplete</h1>
            <table><tbody>
                {
                    incomplete.map((data, index)=>
                        <tr id={index}>
                            <td><input type="checkbox" onChange={checkboxHandel} /> </td>
                            <td >{data}</td>
                            <td>
                                <Button onClick={editIncomplete} variant='contained'>Edit</Button>
                                <Button onClick={deleteIncomplete} variant='contained'>Delete  </Button>
                            </td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
        <div>
            <h1>Completed</h1>
            <table><tbody>
                {
                    completed.map((data, index)=>
                        <tr id={index}>
                            <td><input type="checkbox" checked onChange={checkboxHandel}/> </td>
                            <td className="cross">{data}</td>
                            <td>
                                <Button onClick={editComplete} variant='contained'>Edit</Button>
                                <Button onClick={deleteComplete} variant='contained'>Delete  </Button>
                            </td>
                        </tr>
                    )
                }
            </tbody></table>
        </div>
        
    </div>
  )
}

export default Todo