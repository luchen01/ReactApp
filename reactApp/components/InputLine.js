import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

handleTyping(event){
    event.preventDefault();
  this.setState({
    typedText: event.target.value
  })
}

handleSubmit(event){
  event.preventDefault();
  this.props.submit(event, this.state.typedText);
  this.setState({
    typedText:''
  })
}

  render(){
    return (<form>
      <input onChange = {(event)=>this.handleTyping(event)} type = "text" value = {this.state.typedText} name = "taskName"></input>
      <button onClick = {(event)=>this.handleSubmit(event)} className="btn btn-default" value = {this.state.typedText}>Add todo</button>
    </form>)
  }

};

export default InputLine;
