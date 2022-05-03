import {FaTrashAlt, FaRegEdit} from "react-icons/fa";

function Todo({ todos, setTodos, checkHandler, deleteHandler, filteredTodos, editHandler, todoEditing, editingText, setEditingText, editTodo }) {
    return (
        <main className="todos">
        {todos.length ? (
            <ul>
                {
                    filteredTodos.map((todo) => (
                        <li key={todo.id} className="listItems">
                            
                            {todoEditing === todo.id ? (<input
                                type="text"
                                onChange={(e) => setEditingText(e.target.value)}
                                value={editingText}
                            />) : (<label className={`${todo.checked ? "strike" : ""}`}>
                            {todo.activity}
                            </label>)
                            }
                            
                            {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)} className="submitbtn">Submit Edit</button>) : (<FaRegEdit onClick={() => editHandler(todo.id)} className="editbtn" role="button"/>)}

                            <input 
                                type="checkbox"
                                onChange={() => checkHandler(todo.id)}  
                            />
                            <FaTrashAlt 
                                role="button"
                                tabIndex="0"
                                onClick={(e) => deleteHandler(todo.id)}
                            />
                        </li>
                    ))
                }
            </ul>
        ) : (
            <p> No Todo found...</p>
        )}
        </main>
    )
}

export default Todo
