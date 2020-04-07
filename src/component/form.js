import React,{Component} from 'react';
class Form extends Component{
 render(){
   const {item,handleChange,handleSubmit,editItem}=this.props 
   return(
   <div className="card card-body my-3">
   <form onSubmit={handleSubmit}>
   <div className="input-group">
   <div className="form-group row">
   <div className="col-12">
   <input type="text"  className="form-control col-md-12" 
    placeholder="Add Todo Item"
    value={item}
    onChange={handleChange}/>
   </div>
   </div>
   </div> 
    <div className=" mt-2">
   <button type="submit"
   className={
   	editItem ? "btn btn-success":"bt btn-primary"
   } >
   {editItem ? "Edit Item":"Add Item"}</button>
   </div>
   </form>
   </div>

  		);
  }
}

export default Form;