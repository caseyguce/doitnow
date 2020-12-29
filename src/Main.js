import React, { Component } from 'react';
import Header from './components/todo/Header.js';
import TodoList from './components/todo/TodoList.js';
import AddNewItem from './components/todo/AddNewItem.js';
import DeleteCompleted from './components/todo/DeleteCompleted.js';
import { v4 as uuidv4 } from 'uuid';
import './css/main.css';
import './css/common.css';

class Main extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        title: 'Feed the dogs',
        description: 'Lamb-flavored for Hank and Chicken-flavored for Kuma.',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Check stocks',
        description: 'Check your blue chips.',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Meeting with boss',
        description: 'Prepare KPI charts.',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Wash the car',
        completed: true
      }
    ]
  };

  updateStatus = function(id) {
    this.setState({ todoList: this.state.todoList.map(todoItem => {
        if (todoItem.id === id) {
          todoItem.completed = !todoItem.completed;
        }

        return todoItem;
      })
    });
  }

  deleteItem = function(id) {
    this.setState({ todoList: this.state.todoList.filter(todoItem => todoItem.id !== id) });
  }

  addNewItem = function(state) {
    const todoList = this.state.todoList;
    const newTodoItem = {
      id: uuidv4(),
      title: state.newItemTitle,
      description: state.newItemDesc,
      completed: false
    };

    this.setState({ todoList: todoList.concat(newTodoItem) });
  }

  deleteCompleted = function(evt) {
    this.setState({ todoList: this.state.todoList.filter(todoItem => !todoItem.completed) });
  }

  render () {
    return (
      <div className='main'>
        <Header />
        <DeleteCompleted
          deleteCompleted={this.deleteCompleted.bind(this)} />
        <TodoList
          todoList={this.state.todoList}
          updateStatus={this.updateStatus.bind(this)}
          deleteItem={this.deleteItem.bind(this)} />
        <AddNewItem
          addNewItem={this.addNewItem.bind(this)} />
      </div>
    );
  }
}

export default Main;
