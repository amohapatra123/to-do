import React,{Component} from 'react';
import Form from './form';
import TodoList from './todolist';
class Main extends Component{
state={
	items:[],
	id:0,
	item:'',
	editItem:false
};

handleChange=(e)=>{
	this.setState({
		item:e.target.value
	});
};
handleSubmit =(e)=>{
	e.preventDefault();


	const newItem ={
		id:this.state.id,
		item:this.state.item
	}
console.log(newItem);

	const updatedItems=[...this.state.items,newItem];
    const a=this.state.id++;
  
	this.setState({
		items:updatedItems,
		item:'',
		id:this.state.id++,
		editItem:false

	});

};

clearList = ()=>{
	this.setState({
		items:[]
	});
};

handleDelete =(id) =>{
   const filteredItems=this.state.items.filter(item=>item.id!==id);
   this.setState({
   	items:filteredItems
   });
};



handleEdit =id=>{
	 const filteredItems=this.state.items.filter(item=>item.id!==id);
	 const selectedItem=this.state.items.find(item=>item.id===id)
	 this.setState({
   	items:filteredItems,
   	item:selectedItem.item,
   	editItem:true,
   	id:id

   });

};
	render(){
		return(
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
      <h1 className="text-capitalize text-center">Todo Input</h1>
          <Form
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}></Form>
          <TodoList items={this.state.items} 
          clearList={this.clearList}
           handleDelete={this.handleDelete} 
           handleEdit={this.handleEdit}></TodoList>
      </div>   
      </div>
      </div>

			);
	}
}

export default Main;