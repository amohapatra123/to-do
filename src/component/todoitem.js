import React,{Component} from 'react';
class TodoItem extends Component{
	render(){

  const {title,handleDelete,handleEdit}=this.props
     return(

         <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
         <h6 className="mt-3">{title}</h6>
         <div className="todo-icon">
         <div className="btn btn-group">
         <button className="btn btn-success"
         onClick={handleEdit}>Edit</button>
         <button className="btn btn-danger" 
         onClick={handleDelete}>Delete</button>
         </div>
         </div>
         </li>

			);
	}
}
export default TodoItem;