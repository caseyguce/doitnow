import React, { Component } from 'react';
import '../../css/components/todo/Checkbox.css';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  todoItem: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired
}

export default Checkbox;