import React from "react"
import Unicbox from "./Unicbox"

const ListTodo = props => {

  const { record, setRecord } = props

  const onChangeStatus = e => {
    const { name, checked } = e.target

    
    const updateRecord = record.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setRecord(updateRecord)
  };

  
  const onClickRemoveItem = e => {
    const updateRecord = record.filter(item => !item.done);
    setRecord(updateRecord)
  };

 
  const search = record.map(item => (
    <Unicbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-record">
     
      {record.length ? search : "Boring"}
      
      {record.length ? (
        <p>
          <button className="button yellow" onClick={onClickRemoveItem}>
            Good Bye
          </button>
        </p>
      ) : null}
    </div>
  )
}

export default ListTodo;

