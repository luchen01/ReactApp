import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js'
import Axios from 'axios';
const dbUrl = "http://localhost:3000/db";

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

  addTodo(event, taskName){
    // event.preventDefault()
    // var newTodo = this.state.todos.concat([{taskText: event.target.value, completed: false}]);
    // this.setState({
    //   todos: newTodo
    // })
    var self = this;
    Axios.post(dbUrl + '/add', {task: taskName})
      .then(function (response) {
        // Do whatever you want with the request's response in here
        self.setState({
          todos: self.state.todos.concat([{taskText: response.data.task, completed: false}])
        })
        console.log("success");
        console.log(self.state.todos)
      })
      .catch(function (error) {
        // Do whatever you want in the event of an error in here
        console.log("err", error)
      });


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
