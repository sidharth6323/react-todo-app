import React,{Component} from "react";
import "./AddTodoComponent.css";

class AddTodoComponent extends Component{
  constructor(){
    super();
    this.handle_add = this.handle_add.bind(this);
  }
  handle_add(e){
    e.preventDefault();
    console.log("handled");
    console.log(this.refs.data.value);
    this.props.onAdd(this.refs.data.value);
    this.refs.data.value="";
  }
  render(){
    return(
      <form onSubmit={this.handle_add}>
        <input type="text" ref="data" placeholder="enter new todo" />
        <input type="submit" value="Add this !" />
      </form>
    )
  }
}

export default AddTodoComponent;
