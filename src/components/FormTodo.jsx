import React, {useState} from 'react'

const FormTodo = props => {
    const { handleAddItem} = props
    const [write, setWrite] = useState('')
    const handleSubmit = e => {
        e.preventDefault()

        handleAddItem({
            done: false,
            id: (+new Date()).toString(), 
            write
        })
        
        setWrite('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                    type='text'
                    className='text'
                    value={write}
                    onChange={e => setWrite(e.target.value)}
                    />
                    <button
                    className='button red'
                    disabled={write ? '' : 'disabled'}
                    > Add
                    </button>
                </div>
            </div>
        </form>
    )
    }

  

export default FormTodo
