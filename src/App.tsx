import React from 'react';
import './App.css';
import TodoList from './pages/Todo/TodoList';
import { defaultTaskList } from './utils/defaultTaskList';

function App() {
  return (
    <div className="App">
      <TodoList taskList={defaultTaskList} />
    </div>
  );
}

export default App;
