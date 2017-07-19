import React, { Component } from 'react';
import './App.css';
import TodoListComponent from './components/TodoListComponent/TodoListComponent'
import AddTodoComponent from "./components/AddTodoComponent/AddTodoComponent";


class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      myList :["having food","chilling","going to beach"]
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }//endconstructor
  onDelete(index)
  {
    console.log("called on delete");
    this.state.myList.splice(index,1);
    console.log(this.myList);
    this.setState({
      myList:this.state.myList
    });
  };
  onAdd(element){
    this.state.myList.push(element);
    this.setState({
      myList:this.state.myList
    })
  };
  render() {
    return (
      <div className="App">
        <h1>Sidharth's Todo App</h1>
        <TodoListComponent myList={this.state.myList} onDelete={this.onDelete}/>
        <AddTodoComponent onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
