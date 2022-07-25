import React from 'react'

export default function TodoItem(props) {
  const todoStyle = {marginRight : '10px'}
  return (
    <div className='mt-2' >
      <button className='btn btn-danger btn-sm' style={todoStyle} onClick={props.onDelete}> 
          <i className="bi bi-trash">x</i>
      </button>
      {props.index} - {props.todo.title}
    </div>
  )
}
