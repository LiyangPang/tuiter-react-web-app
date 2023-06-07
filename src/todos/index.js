import React,{useState} from "react";


function Todos(){
    const [todos,setTodos] = useState([
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Learn JSX", completed: true },
        { id: 3, title: "Learn Hooks", completed: false },
        { id: 4, title: "Learn Router", completed: true },
        { id: 5, title: "Learn Route", completed: false },
        { id: 6, title: "Learn Navigate", completed: false },
        { id: 7, title: "Learn Link", completed: false },
      ]);

      const createTodo = () =>{
        alert("111")
      };
    return(
        <div>
            <h1>Todos</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodo} className="float-end btn btn-success">Add</button>
                    <input type="text" className="form-control w-75"/>
                </li>
                {todos.map(((todo) =>(
                    <li key ={todo.id} className="list-group-item">
                        <input type="checkbox" checked = {todo.completed} className="me-2"></input>
                        <button className="btn btn-danger float-end">Delete</button>
                        {todo.title}
                    </li>
                )))}
            </ul>
        </div>
    )
}
export default Todos;