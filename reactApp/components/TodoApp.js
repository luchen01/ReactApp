import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js'

var dummyData = [{taskText: "grocery shopping", completed: false},
{taskText: "call my parents", completed: false},
{taskText: "go running", completed: false},
{taskText: "drink water", completed: true}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

componentDidMount(){
    this.setState({
      todos: dummyData
    })
}

  addTodo(event){
    // event.preventDefault()
    var newTodo = this.state.todos.concat([{taskText: event.target.value, completed: false}]);
    this.setState({
      todos: newTodo
    })
  }

  removeTodo(index){

    var deleteTodo = this.state.todos.filter((item)=> {if(this.state.todos.indexOf(item) !== index){return item}})
   this.setState({
     todos:deleteTodo
   })
  }

  toggleComplete(index){
    var toggleTodo = this.state.todos;
    toggleTodo[index].completed = !toggleTodo[index].completed
    this.setState({
      todos: toggleTodo
    })
  }

  render(){
    return(
      <div>
        <InputLine submit = {this.addTodo.bind(this)}/>
        <TodoList todos={this.state.todos} todoXClick = {this.removeTodo.bind(this)} toggleState = {this.toggleComplete.bind(this)} />
      </div>

    )
  }

};

export default TodoApp;
