import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/todo/Header.js';
import TodoList from './components/todo/TodoList.js';
import AddNewItem from './components/todo/AddNewItem.js';
import DeleteCompleted from './components/todo/DeleteCompleted.js';
import About from './components/about/About.js';
import './css/main.css';
import './css/common.css';

class Main extends Component {
  state = {
    todoList: []
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((result) => this.setState({
        todoList: result.data.map((toDo) => {
          return Object.assign(toDo, {description: 'dummy description! do it now!'})
        })
      }));
  }

  updateStatus = (id) => {
    this.setState({ todoList: this.state.todoList.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.completed = !todoItem.completed;
        }

        return todoItem;
      })
    });
  }

  deleteItem = (id) => {
    try {
      Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        this.setState({ todoList: this.state.todoList.filter(todoItem => todoItem.id !== id) });
      });
      return true;
    } catch (error) {
      alert('Error occured. Details: ' + error.message);
      return false;
    }

  }

  addNewItem = (details) => {
    let todoList = this.state.todoList;
    let newTodoItem = {
      title: 'New Item',
      description: details.newItemDesc
    };

    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: details.newItemTitle,
      completed: false
    }).then((result) => {
      Object.assign(newTodoItem, result.data);
      this.setState({ todoList: todoList.concat(newTodoItem) });
      alert('Item added!');
    });
  }

  deleteCompleted = () => {
    const completedItems = this.state.todoList.filter((item) => item.completed);

    if (completedItems.length && completedItems.every((item) => this.deleteItem(item.id))) {
      alert('Completed items successfully deleted.');
    } else {
      alert('No complete items to be deleted.');
    }
  }

  render () {
    return (
      <Router>
        <div className='main'>
          <Header />
          <Route exact path='/'>
            <DeleteCompleted
              deleteCompleted={this.deleteCompleted.bind(this)} />
            <TodoList
              todoList={this.state.todoList}
              updateStatus={this.updateStatus.bind(this)}
              deleteItem={this.deleteItem.bind(this)} />
            <AddNewItem
              addNewItem={this.addNewItem.bind(this)} />
          </Route>
          <Route path='/about'>
              <About />
          </Route>
        </div>
      </Router>
    );
  }
}

export default Main;
