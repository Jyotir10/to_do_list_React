import React, {Component} from 'react';
import './App.css';


import PlaceHolder from "./PlaceHolder/PlaceHolder"
import todosData from "./todosData"

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    //console.log("Changed", id)
    this.setState(prevState => {
      const updatedTodos  = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos:updatedTodos
      }
    })
  }

  render() {
    //create an array of components and just call them in the return function
    const todoItems = this.state.todos.map(item => <PlaceHolder key = {item.id} change = {this.handleChange} item = {item}/>)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
  
  
}

export default App;
