import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import Navbar from './Navbar';

import About from '../pages/about';
import NotMatch from '../pages/notMatch';

function getInitialTodos() {
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return { todos: savedTodos || [] };
}

function TodoContainer() {
  const [state, setState] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const handleChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({ todos: [...state.todos, newTodo] });
  };

  const delTodo = (id) => {
    setState({ todos: state.todos.filter((todo) => todo.id !== id) });
  };

  const setUpdate = (updatedTitle, id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updatedTitle };
        }
        return todo;
      }),
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                  todos={state.todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
          )}
        />

        <Route
          exact
          path="/"
          element={(
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                  todos={state.todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={delTodo}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
          )}
        />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}
export default TodoContainer;
