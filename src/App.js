import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import Search from './components/Search'

function App() {
  const [todos, setTodos] = useState([])

  const [addTodo, setAddTodo] = useState([])
  const [searchTodo, setSearchTodo] = useState("")
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [todoEditing, setTodoEditing] = useState(false)
  const [editingText, setEditingText] = useState("")

  useEffect(() => {
    const access = localStorage.getItem("todos")
    const loadedTodos =JSON.parse(access)

    if(loadedTodos){
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const createTodo = () => {
    const newtodoid = todos.length + 1;
    const newtodo = [...todos, {id: newtodoid, activity: addTodo, checked: false}]
    setTodos(newtodo);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(!addTodo) return;
    createTodo(addTodo);
    setAddTodo("");
  }

  const checkHandler = (id) => {
    const checktodo = todos.map((el) => el.id === id ? {...el, checked: !el.checked} : el)
    setTodos(checktodo);
  }

  const deleteHandler = (id) => {
    const deletetodo = todos.filter((el) => el.id !== id)
    setTodos(deletetodo);
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.checked === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.checked === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const editHandler = (id) => {
    setTodoEditing(id)
  } 

  const editTodo =(id) => {
    const updatedTodo = todos.map((todo) => (todo.id === id) ? {...todo, activity: editingText} : todo)
    if(!updatedTodo) return;
    setTodos(updatedTodo);
    setTodoEditing(false)
    setEditingText("")
  }

  return (
    <div className="App">
      <Header />
      <AddTodo 
        addTodo = {addTodo}
        setAddTodo = {setAddTodo}
        submitHandler = {submitHandler}
        setStatus = {setStatus}
        statusHandler = {statusHandler}
      />
      <Search 
        searchTodo = {searchTodo}
        setSearchTodo = {setSearchTodo}
      />
      <Todo
        todos = {todos}
        setTodos = {setTodos}
        checkHandler = {checkHandler}
        deleteHandler = {deleteHandler}
        filteredTodos = {filteredTodos.filter(todo => ((todo.activity).toLowerCase()).includes(searchTodo.toLowerCase()))}
        editHandler = {editHandler}
        editingText = {editingText}
        setEditingText = {setEditingText}
        todoEditing = {todoEditing}
        editTodo = {editTodo}
      />
    </div>
  );
}

export default App;
