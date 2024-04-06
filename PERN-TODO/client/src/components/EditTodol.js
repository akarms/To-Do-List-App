import React, { Fragment , useState } from "react";

const EditTodol = ({todo}) => {
    const [description , setDescription] = useState(todo.description);

    const submitform = async(e) => {
      e.preventDefault();
      try{
          ;
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        }catch(err){
            console.error(err.message);
        }
    }


  return (
    <Fragment>
        <button type="button" class="btn btn-warning" style={{marginTop:"-6px"}} data-bs-toggle="modal" data-bs-target="#myModal">
  Edit
</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
       <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={(e) => submitform(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
};

export default EditTodol;
