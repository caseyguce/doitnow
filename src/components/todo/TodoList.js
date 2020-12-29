import React, { Component } from 'react';
import '../../css/components/todo/TodoList.css';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render () {
    const { todoList, updateStatus, deleteItem } = this.props;

    return todoList.map((todoItem) => (
      <div
        key={'div-todo-item' + todoItem.id}
        className='item-div item'>
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            updateStatus={updateStatus}
            deleteItem={deleteItem} />
      </div>
    ));
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  updateStatus: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default TodoList;
