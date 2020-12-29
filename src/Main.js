import React, { Component } from 'react';
import './css/main.css';
import './css/common.css';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';
import AddNewItem from './components/AddNewItem.js';
import DeleteCompleted from './components/DeleteCompleted.js';

class Main extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: 'Feed the dogs',
        description: 'Lamb-flavored for Hank and Chicken-flavored for Kuma.',
        completed: false
      },
      {
        id: 2,
        title: 'Check stocks',
        description: 'Check your blue chips.',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        description: 'Prepare KPI charts.',
        completed: false
      },
      {
        id: 4,
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
      id: todoList.length + 1,
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
