import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

export const Todo = ({ removeTodo, onClick, completed, text, id }) => {
  const handleRemove = (ev) => {    
    ev.stopPropagation()
    removeTodo(id)
  }
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      className={completed ? 'completed' : ''}
    >
      <p>{text}</p>
      <FontAwesomeIcon icon={!completed ? faTrashAlt : faCheckCircle} onClick={(ev) => {
        if(!completed) handleRemove(ev) }}/>
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo)
