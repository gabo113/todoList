import React from 'react'

const Unicbox = props => {
    const {
        onChange,
        data: {id, write, done }
    } = props

  return (
    <>
        <label className='todo new-item'>
            <input
            className='todo__state'
            name={id}
            type='checkbox'
            onChange={onChange}
            defaultChecked={done}
            />
            <div className="todo__text">{write}</div>
        </label>
    </>
  )
}

export default Unicbox
