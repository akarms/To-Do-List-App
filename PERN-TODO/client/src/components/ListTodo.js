import React, { Fragment , useEffect , useState } from "react";
import EditTodol from "./EditTodol";

const ListTodo = () => {

    const [todos , setTodos] = useState([]);

    const deleteTodo = async(id) => {
        try{
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            console.log(deleteTodo);

            setTodos(todos.filter(todo => todo.todo_id !== id))
        }catch(err){
            console.error(err.message);
        }
    }

    const getTodose = async() => {
        try{
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData)
        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodose();
    })


    return (
        <Fragment>
        
              <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
        {todos.map(todos => (
            <tr>
                <td>{todos.description}</td>
                <td><button className="btn"><EditTodol todo={todos} /></button></td>
                <td><button className="btn btn-danger" onClick={() => deleteTodo(todos.todo_id)}>Delete</button></td>
            </tr>
        ))}
        
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr> */}
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodo;