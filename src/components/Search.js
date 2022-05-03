import {FaSearch} from "react-icons/fa";

function Search({searchTodo, setSearchTodo}) {
    return (
        
        <form onSubmit={(e) => e.preventDefault()} className="searchForm">
            <input
                type="text"
                placeholder="Search Todo..."
                role="searchbox"
                value={searchTodo}
                onChange={(e) => setSearchTodo(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>

        </form>
    )
}

export default Search
