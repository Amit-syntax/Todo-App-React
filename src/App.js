import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';

function App() {
  const [todosList, setTodosList] = useState([])

  const onDeleteTodoItem = (todo)=>{
    setTodosList(todosList.filter((e)=>{
      return e!==todo
    }))
  }

  const handleAddTodoItemSubmit = (event)=>{
    event.preventDefault()
    let newElement = {
      sno: todosList.length + 1,
      title: event.target.elements.todo.value
    }
    setTodosList([...todosList, newElement])
    event.target.elements.todo.value = ''
  }

  return (
    <>
    <Header title='Master Todos'/>
    <Todos onAddTodoSumit={handleAddTodoItemSubmit} todos={todosList} onDeleteTodoItem={onDeleteTodoItem}/>
    <Footer/>
    </>
  );
}

export default App;