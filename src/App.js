import React from 'react';
// import React, { Component } from "react";

import TodoItem from './component/todoitem';
import './App.css';
import todosData from './todosData'
import MainContent from './component/MainContent'


class App extends React.Component {

  state = {
    todos: todosData,
    count: 0
  }



  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} count={this.state.count}/>)
    
    return (
      <div className="todo-list">
        {todoItems}
        <MainContent />
      </div>
    )
  }
}
export default App;