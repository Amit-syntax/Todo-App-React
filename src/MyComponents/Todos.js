import React from 'react'
import TodoItem from './TodoItem'
import protoTypes from 'prop-types'
import AddTodo from './AddTodo';

export default function Todos({onAddTodoSumit, todos, onDeleteTodoItem, }) {
  return (
    <div className='container'>
      <h1>
        Todos List
      </h1>
      <AddTodo onSubmit={onAddTodoSumit}/>
      <ul>
      {
        todos.length !== 0 ?
        todos.map((todo, index, arr)=>{
          return (
               <TodoItem key={todo.sno} index={index+1} todo={todo} onDelete={()=>{onDeleteTodoItem(todo)}}/>
             )
            })
          : <p>No Todos</p>
        }
      </ul>
      
    </div>
  )
}


Todos.defaultProps = {
  todos: []
}

Todos.protoTypes = {
  todos: protoTypes.array.isRequired
}