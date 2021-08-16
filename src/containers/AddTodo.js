import React, { useState } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import '../styles/inputStyles.scss'
import '../styles/buttonStyles.scss'

const AddTodo = (props) => {
  const [input, handleInput] = useState('');
  const [errorMessage, handleErrorMessage] = useState(false)

  const handleSubmit = () => {
    input !== '' ? props.addTodo(input) : handleErrorMessage(true)
    handleInput('')
  }

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      props.addTodo(input)
      handleInput('')
    } else {
      handleErrorMessage(false)
    }
  }

  return (
    <div className='add-container'>
      {errorMessage && <p className='error'>Please enter a name for this TODO</p>}
      <input 
        onChange={(ev) => handleInput(ev.target.value)}
        onKeyDown={handleKeyDown}
        value={input}
        placeholder="Enter TODO name..."
      />      
      <button 
        onClick={handleSubmit}
        className='add-button'
      >
        Add Todo
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (input) => dispatch(addTodo(input))
})

export default connect(null, mapDispatchToProps)(AddTodo)
