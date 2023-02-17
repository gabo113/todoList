import React, {useState} from 'react'
import FormTodo from './FormTodo'
import ListTodo from './ListTodo'

const Todo = () => {
    const [record, setRecord]=useState([])
     
    const handleAddItem = addItem => {
        setRecord([...record, addItem])
     }

    return (
        <div>
          <FormTodo handleAddItem={handleAddItem} />
          <ListTodo record={record} setRecord={setRecord} />
        </div>
      )
    
}

 
  
export default Todo
  