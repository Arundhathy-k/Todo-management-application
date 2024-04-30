import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { completeTodo, deleteTodoItem, getAllTodos, getTodoById, incompleteTodo } from "../ToDoService";

type todo={
    id:number,
    title:string,
    description:string,
    completed:string 
}
    
const ListOfTodos: React.FC = () => {
    
    const [todos, setTodos] = useState<todo[]>([]);
    const navigator = useHistory();

    useEffect( () => {
       listOfTodos();
    }, [])

    function listOfTodos(){
        getAllTodos().then((response) => {
            console.log(response.data);
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function updateTodo(id:number){
        navigator.push(`/update-todo/${id}`)
    }

    function removeTodo(id:number){
        deleteTodoItem(id).then((response) => {
            console.log(response.data);
            listOfTodos();
        }).catch(error => {
            console.error(error);
        })
    }
    function completeTodoItem(id:number){
       completeTodo(id).then((response) => {
            console.log(response.data);
            listOfTodos();
        }).catch(error => {
            console.error(error);
        })
    }
    function incompleteTodoItem(id:number){
       incompleteTodo(id).then((response) => {
            console.log(response.data);
            listOfTodos();
        }).catch(error => {
            console.error(error);
        })
    }
    return (<>
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <Link to='/add-todo' className='btn btn-primary mb-2'>Add Todo</Link>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Todo Title</th>
                    <th>Todo Description</th>
                    <th>Todo Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map( todo => 
                            <tr key={todo.id}>
                                <td> {todo.title} </td>
                                <td> {todo.description} </td>
                                <td> {todo.completed} </td>
                                <td>
                                    <button onClick={() => updateTodo(todo.id)} className='btn btn-info'>Update</button>
                                    <button onClick={() => removeTodo(todo.id)} className='btn btn-danger'
                                        style={{marginLeft: "10px"}}
                                    >Delete</button>
                                     <button onClick={() => completeTodoItem(todo.id)} className='btn btn-success' style={{marginLeft: "10px"}}>Complete</button>
                                     <button onClick={() => incompleteTodoItem(todo.id)} className='btn btn-info' style={{marginLeft: "10px"}}>Incomplete</button>
                                </td>
                            </tr>
                        )
                }
            </tbody>
        </table>

    </div>
    </>);
}
export default ListOfTodos;