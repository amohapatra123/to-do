import React,{Component} from 'react';
import TodoItem from './todoitem';
export default class TodoList extends Component{
	render(){

        const {items,clearList,handleDelete,handleEdit}=this.props
        return(

        <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
{
        items.map((item =>{
                return(

               <TodoItem 
                key={item.id} 
                title={item.item}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)} ></TodoItem>

                );
        }))
}


       
        <button type="button" 
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}>Clear List</button>
        </ul>

			);
	}
}


