import React,{Component} from "react";
import "./TodoListComponent.css"


class TodoListComponent extends Component
{
  delete(index){
    console.log("called",index);
    this.props.onDelete(index);
  }
  render(){
    var myList = this.props.myList;
    myList = myList.map(function(item,index){
      return(
        <li key={index}>{item}
          <span onClick={()=>this.delete(index)}>x</span>
        </li>
      )
    }.bind(this));
    return(
      <ul className="list">{myList}</ul>
    )};
}
export default TodoListComponent;
