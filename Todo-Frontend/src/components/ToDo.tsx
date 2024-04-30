import { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { addTodoItem, getTodoById, updateTodoItem } from "../ToDoService";

interface RouteParams {
    id: string;
}
type todo={
    id:number,
    title:string,
    description:string,
    completed:string 
}


const ToDo: React.FC = () => {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [completed,setCompleted] = useState('')

const {id} = useParams<RouteParams>();

const navigator = useHistory();
useEffect(() => {

    getTodoById(Number(id)).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setCompleted(response.data.completed);
    }).catch(error => {
      console.error(error);
    })

  }, [id])

  function saveOrUpdateToDo(e:FormEvent){
    e.preventDefault();

    const todo = { title, description,completed }

    console.log(todo); 

    if(id){
      updateTodoItem(Number(id), todo).then((response) => {
        console.log(response.data);
        navigator.push('/todos');
      }).catch(error => {
        console.error(error);
      })
    }else {
      addTodoItem(todo).then((response) => {
        console.log(response.data);
        navigator.push('/todos')
      }).catch(error => {
        console.error(error);
      })
    }

  }

  function pageTitle(){
    if(id){
        return <h2 className='text-center'>Update ToDo</h2>
    } else {
        return <h2 className='text-center'>Add ToDo</h2>
    }
  }

  return (
    <div className='container'><br/><br/>
      <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                pageTitle()
              }

              <div className='card-body'>
                  <form>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Title:</label>
                          <input
                            type='text'
                            name='title'
                            placeholder='Enter Title'
                            className='form-control'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}>
                          </input>
                      </div>

                      <div className='form-group mb-2'>
                          <label className='form-label'>Description:</label>
                          <input
                            type='text'
                            name='description'
                            placeholder='Enter Todo Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='form-control'
                          >
                          </input>
                      </div>

                      <div className='form-group mb-2'>
                          <label className='form-label'>Completed:</label>
                          <select
                            onChange={(e) => setCompleted(e.target.value)}
                            value={completed}
                            className='form-control'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                        </div>
                      <button className='btn btn-success mb-2' onClick={(e) => saveOrUpdateToDo(e)}>Submit</button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  )
}
export default ToDo;