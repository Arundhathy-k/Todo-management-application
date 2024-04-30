import axios from 'axios'

const ToDo_REST_API_BASE_URL = 'http://localhost:8080/api/todos'

export const getAllTodos = () => axios.get(ToDo_REST_API_BASE_URL);

export const addTodoItem= (todo: any) => axios.post(ToDo_REST_API_BASE_URL, todo);

export const getTodoById = (id: number) => axios.get(ToDo_REST_API_BASE_URL + '/' + id);

export const updateTodoItem = (id: number, todo: any) => axios.put(ToDo_REST_API_BASE_URL + '/' + id, todo);

export const deleteTodoItem = (id: number) => axios.delete(ToDo_REST_API_BASE_URL + '/' + id); 

export const completeTodo = (id: number) =>
axios.patch(ToDo_REST_API_BASE_URL + '/' + id + '/' + "complete");

export const incompleteTodo = (id: number) =>
axios.patch(ToDo_REST_API_BASE_URL + '/' + id + '/' + "incomplete");