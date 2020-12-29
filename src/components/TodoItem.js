import React, { Component } from 'react';
import '../css/components/TodoItem.css';
import Checkbox from './Checkbox.js';
import Delete from './Delete.js';

class TodoItem extends Component {
  getStyle = () => { return this.props.todoItem.completed ? 'completed' : ''; }

  render () {
    const { todoItem, updateStatus, deleteItem } = this.props;
    return (
        <table>
          <tbody>
            <tr>
              <td className='checkbox-cell'>
                <Checkbox
                  key={'checkbox-todo-item' + todoItem.id}
                  todoItem={todoItem}
                  updateStatus={updateStatus} />
              </td>
              <td className={this.getStyle()}>
                <p className='item-title'>{todoItem.title}</p>
                <p className='item-desc'>{todoItem.description}</p>
              </td>
              <td className='delete-cell'>
                <Delete
                  id={todoItem.id}
                  deleteItem={deleteItem} />
              </td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default TodoItem;