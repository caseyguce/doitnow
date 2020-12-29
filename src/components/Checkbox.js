import React, { Component } from 'react';
import '../css/components/Checkbox.css';

class Checkbox extends Component {
  render () {
    const { todoItem, updateStatus } = this.props;
    return (
      <input type='checkbox'
      className='checkbox'
      defaultChecked={todoItem.completed}
      onChange={updateStatus.bind(this, todoItem.id)} />
    );
  }
}

export default Checkbox;