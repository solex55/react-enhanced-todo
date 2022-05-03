import {FaPlus} from "react-icons/fa";


function AddTodo({ addTodo, setAddTodo, submitHandler, statusHandler}) {
    return (
        <form onSubmit={submitHandler} className="addForm">
            <input
                type="text"
                placeholder="Add a New Todo"
                value={addTodo}
                onChange={(e) => setAddTodo(e.target.value)}
            />
            <button type="submit"><FaPlus /></button>
            
            <div className="selecter">
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </form>
    )
}

export default AddTodo
