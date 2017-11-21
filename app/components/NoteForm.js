import React from 'react';
import List from './List';

class NoteForm extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.refs.txt.value);
    this.refs.txt.value = '';
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" pleaceholder="Enter your text..." ref="txt"/>
        <br /> <br />
        <button>Add</button>
      </form>
    )
  }
}

module.exports = NoteForm;
